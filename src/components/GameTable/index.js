import React from 'react';
import './GameTable.css';

const GameTable = ({ list }) =>
  <div className="Table-container flex">
    { list.top.map(item =>
      <div className="Table-item" key={item.game._id}>
        <a href="" target="_blank">
          <div className="flex">
            <img src={item.game.box.medium}
                 alt="Game Thumbnail"
            />
            <div className="Table-item-text">
              <h3>{item.game.localized_name}</h3>
              <p>{item.viewers} viewers</p>
            </div>
          </div>
        </a>
      </div>
    )}
  </div>

export default GameTable;