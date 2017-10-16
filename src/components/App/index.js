import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar';
import Table from '../Table';

const streamList = {
  "data": [
      {
          "id": "26491514896",
          "user_id": "42776357",
          "game_id": "138585",
          "community_ids": [],
          "type": "live",
          "title": "HCT Summer Championship - Day 3",
          "viewer_count": 63017,
          "started_at": "2017-10-15T15:00:52Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_playhearthstone-{width}x{height}.jpg"
      },
      {
          "id": "26493027072",
          "user_id": "26490481",
          "game_id": "493057",
          "community_ids": [],
          "type": "live",
          "title": "gamin again - [ Follow @summit1g ]",
          "viewer_count": 40164,
          "started_at": "2017-10-15T18:23:03Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_summit1g-{width}x{height}.jpg"
      },
      {
          "id": "26488433504",
          "user_id": "7236692",
          "game_id": "497437",
          "community_ids": [
              "848d95be-90b3-44a5-b143-6e373754c382",
              "fd0eab99-832a-4d7e-8cc0-04d73deb2e54",
              "ff1e77af-551d-4993-945c-f8ceaa2a2829"
          ],
          "type": "live",
          "title": "Dan Spoops in Evil Within 2 (Nightmare) - 7th Annual 24/7 Horror Marathon!  !store !horror ",
          "viewer_count": 17307,
          "started_at": "2017-10-15T03:53:55Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-{width}x{height}.jpg"
      },
      {
          "id": "26495241648",
          "user_id": "37402112",
          "game_id": "493057",
          "community_ids": [],
          "type": "live",
          "title": "gametime  | Follow https://twitter.com/c9shroud",
          "viewer_count": 15903,
          "started_at": "2017-10-15T23:33:59Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_shroud-{width}x{height}.jpg"
      },
      {
          "id": "26492368256",
          "user_id": "40972890",
          "game_id": "66170",
          "community_ids": [],
          "type": "live",
          "title": "14K Plat Giveaway | Watch me and get loot ",
          "viewer_count": 13637,
          "started_at": "2017-10-15T17:01:16Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_admiralbahroo-{width}x{height}.jpg"
      },
      {
          "id": "26493501328",
          "user_id": "30080751",
          "game_id": "21779",
          "community_ids": [],
          "type": "live",
          "title": "avoiding decay to bronze",
          "viewer_count": 13278,
          "started_at": "2017-10-15T19:20:19Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_tsm_dyrus-{width}x{height}.jpg"
      },
      {
          "id": "26495077904",
          "user_id": "10384419",
          "game_id": "488353",
          "community_ids": [],
          "type": "live",
          "title": "2GGC: FE Saga - Day 2 - LUNATIC MODE",
          "viewer_count": 11410,
          "started_at": "2017-10-15T23:07:29Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_2ggaming-{width}x{height}.jpg"
      },
      {
          "id": "26494498592",
          "user_id": "27945625",
          "game_id": "493057",
          "community_ids": [
              "01d41280-9332-4f54-b77a-a20f577beade",
              "73872c57-c0b1-4cda-a0dc-52e8dc9cd456"
          ],
          "type": "live",
          "title": "Curse Trials | Powered by Alienware | Finals",
          "viewer_count": 11092,
          "started_at": "2017-10-15T21:35:18Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_curse-{width}x{height}.jpg"
      },
      {
          "id": "26492111392",
          "user_id": "31500812",
          "game_id": "32507",
          "community_ids": [],
          "type": "live",
          "title": "SPL FALL Gauntlet: Day 2",
          "viewer_count": 7992,
          "started_at": "2017-10-15T16:27:08Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_hireztv-{width}x{height}.jpg"
      },
      {
          "id": "26494654272",
          "user_id": "87204022",
          "game_id": "138585",
          "community_ids": [],
          "type": "live",
          "title": "Disguised Toast: Quest Mage to LEGEND. Meme Decks after?",
          "viewer_count": 7775,
          "started_at": "2017-10-15T21:59:35Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_disguisedtoasths-{width}x{height}.jpg"
      },
      {
          "id": "26493205888",
          "user_id": "30684909",
          "game_id": "21779",
          "community_ids": [],
          "type": "live",
          "title": "Leko 2k17 lul / SUBS 50% OFF",
          "viewer_count": 7261,
          "started_at": "2017-10-15T18:44:32Z",
          "language": "pt-br",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_leko92-{width}x{height}.jpg"
      },
      {
          "id": "26491530992",
          "user_id": "171115626",
          "game_id": "138585",
          "community_ids": [
              "136d5c6a-a7ed-4b6d-aedb-1deb08793157"
          ],
          "type": "live",
          "title": "[RU] HCT Summer Championship Day 3 FINAL",
          "viewer_count": 7207,
          "started_at": "2017-10-15T15:03:13Z",
          "language": "ru",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_neon_lab-{width}x{height}.jpg"
      },
      {
          "id": "26493000736",
          "user_id": "68950614",
          "game_id": "29595",
          "community_ids": [],
          "type": "live",
          "title": "Плохие тиммейты на дороге в 2-3к? Кем и как выигрывать By Skincoin",
          "viewer_count": 7056,
          "started_at": "2017-10-15T18:19:53Z",
          "language": "ru",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_ybicanoooobov-{width}x{height}.jpg"
      },
      {
          "id": "26494283952",
          "user_id": "136809201",
          "game_id": "478467",
          "community_ids": [],
          "type": "live",
          "title": "Mobile Masters Live - Vainglory",
          "viewer_count": 6688,
          "started_at": "2017-10-15T21:04:02Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_amazonappstore-{width}x{height}.jpg"
      },
      {
          "id": "26493125648",
          "user_id": "113314458",
          "game_id": "30921",
          "community_ids": [],
          "type": "live",
          "title": "ESL with Geno and Rapid",
          "viewer_count": 6201,
          "started_at": "2017-10-15T18:34:52Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_lemonpuppyrl-{width}x{height}.jpg"
      },
      {
          "id": "26494573184",
          "user_id": "19571641",
          "game_id": "33214",
          "community_ids": [],
          "type": "live",
          "title": "WE SLAYIN",
          "viewer_count": 6059,
          "started_at": "2017-10-15T21:46:54Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_ninja-{width}x{height}.jpg"
      },
      {
          "id": "26492845168",
          "user_id": "116882497",
          "game_id": "495589",
          "community_ids": [],
          "type": "live",
          "title": "[GER/ENG] FUT CHAMPIONS - ROAD TO TOP 100! ",
          "viewer_count": 5359,
          "started_at": "2017-10-15T18:01:28Z",
          "language": "de",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_mirza_jahic-{width}x{height}.jpg"
      },
      {
          "id": "26494755152",
          "user_id": "26194208",
          "game_id": "18122",
          "community_ids": [],
          "type": "live",
          "title": "Chillin ",
          "viewer_count": 5267,
          "started_at": "2017-10-15T22:15:04Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_mitchjones-{width}x{height}.jpg"
      },
      {
          "id": "26493188880",
          "user_id": "71092938",
          "game_id": "488552",
          "community_ids": [],
          "type": "live",
          "title": "xQc | Climb REFORMED DAY2",
          "viewer_count": 5052,
          "started_at": "2017-10-15T18:42:32Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_xqcow-{width}x{height}.jpg"
      },
      {
          "id": "26493648096",
          "user_id": "62502182",
          "game_id": "66170",
          "community_ids": [],
          "type": "live",
          "title": "[Warframe Partner] Unlocking Achievements in Eidolon [Platinum Coach]",
          "viewer_count": 4562,
          "started_at": "2017-10-15T19:38:28Z",
          "language": "en",
          "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_neoness007-{width}x{height}.jpg"
      }
  ],
  "pagination": {
      "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ"
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: streamList,
    }

    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(viewID) {
    return
  }

  render() {
    const list = this.state.results.data;
    return (
      <div className="App">
        <Navbar onClick={this.onNavClick} />
        <Table list={list} />
      </div>
    );
  }
}

export default App;
