import React from 'react';
import './Table.css';

const Table = ({ list, width=320, height=180 }) =>
  <div>
    { list.map(item =>
      <div key={item.id}>
      <img src={item.thumbnail_url.replace('{width}x{height}', `${width}x${height}`)}
           alt="Stream Thumbnail"
      />
      <h3>{item.title}</h3>
      <p>{item.viewer_count} viewers on user_id:{item.user_id}</p>
      </div>
    )}
  </div>

export default Table;