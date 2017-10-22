import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar';
import GameTable from '../GameTable';
import StreamTable from '../StreamTable';

const streamList = {
  "_total": 1740,
  "_links": {
      "self": "https://api.twitch.tv/kraken/games/top?limit=10",
      "next": "https://api.twitch.tv/kraken/games/top?limit=10&offset=10"
  },
  "top": [
      {
          "game": {
              "name": "H1Z1",
              "popularity": 134941,
              "_id": 417892,
              "giantbomb_id": 52692,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/H1Z1-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/H1Z1-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/H1Z1-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/H1Z1-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/H1Z1-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/H1Z1-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/H1Z1-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/H1Z1-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "H1Z1",
              "locale": "en-us"
          },
          "viewers": 120123,
          "channels": 261
      },
      {
          "game": {
              "name": "League of Legends",
              "popularity": 116908,
              "_id": 21779,
              "giantbomb_id": 24024,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "League of Legends",
              "locale": "en-us"
          },
          "viewers": 116202,
          "channels": 2666
      },
      {
          "game": {
              "name": "IRL",
              "popularity": 83535,
              "_id": 494717,
              "giantbomb_id": 0,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/IRL-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/IRL-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/IRL-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/IRL-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/IRL-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/IRL-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/IRL-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/IRL-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "IRL",
              "locale": "en-us"
          },
          "viewers": 84011,
          "channels": 542
      },
      {
          "game": {
              "name": "PLAYERUNKNOWN'S BATTLEGROUNDS",
              "popularity": 54118,
              "_id": 493057,
              "giantbomb_id": 54979,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "PLAYERUNKNOWN'S BATTLEGROUNDS",
              "locale": "en-us"
          },
          "viewers": 57733,
          "channels": 3392
      },
      {
          "game": {
              "name": "FIFA 18",
              "popularity": 41645,
              "_id": 495589,
              "giantbomb_id": 58179,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2018-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2018-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2018-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2018-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/FIFA%2018-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/FIFA%2018-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/FIFA%2018-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/FIFA%2018-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "FIFA 18",
              "locale": "en-us"
          },
          "viewers": 41933,
          "channels": 653
      },
      {
          "game": {
              "name": "Hearthstone",
              "popularity": 41828,
              "_id": 138585,
              "giantbomb_id": 42033,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/Hearthstone-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Hearthstone-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/Hearthstone-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/Hearthstone-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "Hearthstone",
              "locale": "en-us"
          },
          "viewers": 41677,
          "channels": 272
      },
      {
          "game": {
              "name": "Counter-Strike: Global Offensive",
              "popularity": 40950,
              "_id": 32399,
              "giantbomb_id": 36113,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "Counter-Strike: Global Offensive",
              "locale": "en-us"
          },
          "viewers": 41117,
          "channels": 1470
      },
      {
          "game": {
              "name": "Talk Shows",
              "popularity": 33240,
              "_id": 417752,
              "giantbomb_id": 0,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/Talk%20Shows-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Talk%20Shows-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/Talk%20Shows-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/Talk%20Shows-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "Talk Shows",
              "locale": "en-us"
          },
          "viewers": 34130,
          "channels": 95
      },
      {
          "game": {
              "name": "Dota 2",
              "popularity": 33563,
              "_id": 29595,
              "giantbomb_id": 32887,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "Dota 2",
              "locale": "en-us"
          },
          "viewers": 32692,
          "channels": 628
      },
      {
          "game": {
              "name": "Warframe",
              "popularity": 30199,
              "_id": 66170,
              "giantbomb_id": 38788,
              "box": {
                  "large": "https://static-cdn.jtvnw.net/ttv-boxart/Warframe-272x380.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Warframe-136x190.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-boxart/Warframe-52x72.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-boxart/Warframe-{width}x{height}.jpg"
              },
              "logo": {
                  "large": "https://static-cdn.jtvnw.net/ttv-logoart/Warframe-240x144.jpg",
                  "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Warframe-120x72.jpg",
                  "small": "https://static-cdn.jtvnw.net/ttv-logoart/Warframe-60x36.jpg",
                  "template": "https://static-cdn.jtvnw.net/ttv-logoart/Warframe-{width}x{height}.jpg"
              },
              "_links": {},
              "localized_name": "Warframe",
              "locale": "en-us"
          },
          "viewers": 30141,
          "channels": 601
      }
  ]
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: streamList,
    }

    this.getStreams = this.getStreams.bind(this);
  }

  getStreams() {
    return
  }

  render() {
    const list = this.state.results;
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' render={ () => (
            <GameTable list={list} />
          )}/>
          <Route exact path='/communities' render={ () => (
            <div><p>Uh oh...  Nothing is here yet. 😢</p></div>
          )}/>
          <Route exact path='/popular' render={ () => (
            <StreamTable list={list} />
          )}/>
          <Route exact path='/creative' render={ () => (
            <div><p>Uh oh...  Nothing is here yet. 😢</p></div>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
