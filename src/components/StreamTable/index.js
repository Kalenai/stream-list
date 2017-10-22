import React from 'react';
import './StreamTable.css';

const StreamTable = ({ list }) =>
  <div className="table-container flex">
    { list.map(item =>
      <div className="table-item" key={item._id}>
        <a href={item.channel.url} target="_blank">
          <div className="flex">
            <img src={item.preview.medium}
                 alt="Stream Thumbnail"
            />
            <div className="table-item-text">
              <h3>{item.channel.status}</h3>
              <p>{item.viewers} viewers on {item.channel.name}</p>
            </div>
          </div>
        </a>
      </div>
    )}
  </div>

export default StreamTable;