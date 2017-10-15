import React from 'react';
import './Table.css';

const Table = ({ list, width=320, height=180 }) =>
  <div className="table-container flex">
    { list.map(item =>
      <div className="table-item" key={item.id}>
        <a href="#">
          <div className="flex">
            <img src={item.thumbnail_url.replace('{width}x{height}', `${width}x${height}`)}
                alt="Stream Thumbnail"
            />
            <div className="table-item-text">
              <h3>{item.title}</h3>
              <p>{item.viewer_count} viewers on user_id:{item.user_id}</p>
            </div>
          </div>
        </a>
      </div>
    )}
  </div>

export default Table;