import React, { Component } from 'react';
import './App.css';

const streamList = {"data":[{"id":"26473144704","user_id":"28633177","game_id":"29595","community_ids":[],"type":"live","title":"[RU] coL vs Na`Vi || SL i-League Invitational S3 LAN-Final || Day 2 by @bafikk \u0026 @DroogTV","viewer_count":49980,"started_at":"2017-10-13T09:17:11Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_starladder1-{width}x{height}.jpg"},{"id":"26473145344","user_id":"54933969","game_id":"29595","community_ids":[],"type":"live","title":"[EN] coL vs Na`Vi || SL i-League Invitational S3 LAN-Final || Day 2","viewer_count":41659,"started_at":"2017-10-13T09:17:24Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_dotastarladder_en-{width}x{height}.jpg"},{"id":"26474570288","user_id":"42776357","game_id":"138585","community_ids":[],"type":"live","title":"HCT Summer Championship - Day 1","viewer_count":40177,"started_at":"2017-10-13T15:06:55Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_playhearthstone-{width}x{height}.jpg"},{"id":"26474840272","user_id":"37402112","game_id":"493057","community_ids":[],"type":"live","title":"gametime  | Follow https://twitter.com/c9shroud","viewer_count":26780,"started_at":"2017-10-13T15:56:04Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_shroud-{width}x{height}.jpg"},{"id":"26472868624","user_id":"9072112","game_id":"494717","community_ids":[],"type":"live","title":"Club in Tokyo","viewer_count":22307,"started_at":"2017-10-13T07:38:37Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_reckful-{width}x{height}.jpg"},{"id":"26474906144","user_id":"23161357","game_id":"497437","community_ids":[],"type":"live","title":"The Fuccboi Within ----\u003e FALL MERCH: www.dbh.la/lirik2017","viewer_count":21146,"started_at":"2017-10-13T16:06:05Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_lirik-{width}x{height}.jpg"},{"id":"26473647424","user_id":"26610234","game_id":"497437","community_ids":[],"type":"live","title":"The Evil Within 2! \\o/ - Nightmare - Back to back ALL DAY streams until Southpark (on the 16th)! - !Subtember - 5 days until !4year","viewer_count":18939,"started_at":"2017-10-13T11:53:18Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_cohhcarnage-{width}x{height}.jpg"},{"id":"26472045888","user_id":"7236692","game_id":"497437","community_ids":["848d95be-90b3-44a5-b143-6e373754c382","fd0eab99-832a-4d7e-8cc0-04d73deb2e54","ff1e77af-551d-4993-945c-f8ceaa2a2829"],"type":"live","title":"The Evil Within 2 (Hardest Diff.) Sponsored by Bethesda - 7th Annual 24/7 Horror Marathon!  !store !horror ","viewer_count":18742,"started_at":"2017-10-13T03:53:36Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-{width}x{height}.jpg"},{"id":"26473172304","user_id":"91296568","game_id":"66170","community_ids":["b2c7a080-68a2-40db-88b1-8f85b041e897"],"type":"live","title":"🐙[Warframe Partner] Home On The Plains!! Hello.... 50% Off Sub, [PC] WARFRAME !Prime !Discord","viewer_count":18655,"started_at":"2017-10-13T09:26:57Z","language":"en-gb","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_tactical_potato_-{width}x{height}.jpg"},{"id":"26466190736","user_id":"106159308","game_id":"33945","community_ids":[],"type":"live","title":"#DOSENWURST ✶ 24/7 Dauerbeschallung ✶ Macht doof!","viewer_count":14347,"started_at":"2017-10-12T10:24:55Z","language":"de","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_gronkhtv-{width}x{height}.jpg"},{"id":"26474660928","user_id":"96642596","game_id":"138585","community_ids":["02fde7b7-58ae-473b-b30d-fa85a18af414","136d5c6a-a7ed-4b6d-aedb-1deb08793157","efc81f8f-234e-4bc0-b6b6-11bf1446a384"],"type":"live","title":"[TW] HCT Summer Championship Day 1 - HCT 夏季冠軍賽小組賽 D1","viewer_count":12624,"started_at":"2017-10-13T15:23:31Z","language":"zh-tw","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_blizzardzhtw-{width}x{height}.jpg"},{"id":"26474440944","user_id":"52091823","game_id":"495589","community_ids":[],"type":"live","title":"50 x 2 player packs... @Castro1021","viewer_count":12484,"started_at":"2017-10-13T14:43:22Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_castro_1021-{width}x{height}.jpg"},{"id":"26473441760","user_id":"74264786","game_id":"66170","community_ids":["0b9d06f9-fe5f-4f69-a4c3-2a9ee5604fb7","b2c7a080-68a2-40db-88b1-8f85b041e897","c1860172-4d14-41a1-b483-09d013d1fdab"],"type":"live","title":"Power Leveling Gara \u0026 Her Weapons, Then Exploring the Plains more. ","viewer_count":11013,"started_at":"2017-10-13T10:55:24Z","language":"en-gb","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_iflynn-{width}x{height}.jpg"},{"id":"26474090512","user_id":"60917582","game_id":"32399","community_ids":[],"type":"live","title":"@s1mpleO playing CS:GO ru/eng PUBG while waiting for FPL","viewer_count":9632,"started_at":"2017-10-13T13:34:31Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_s1mpleof-{width}x{height}.jpg"},{"id":"26473778912","user_id":"103825127","game_id":"497437","community_ids":[],"type":"live","title":"더 이블위딘2 공포고어 신작게임   풍월량","viewer_count":9506,"started_at":"2017-10-13T12:25:44Z","language":"ko","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_hanryang1125-{width}x{height}.jpg"},{"id":"26474957088","user_id":"27115707","game_id":"461410","community_ids":[],"type":"live","title":"🔴95%( ͝° ͜ʖ͡°) Рулетка PUBG: http://pubg-roll.ru/ (Classic, Low, Fast)","viewer_count":9172,"started_at":"2017-10-13T16:14:26Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_arthas-{width}x{height}.jpg"},{"id":"26474878960","user_id":"31089858","game_id":"29595","community_ids":[],"type":"live","title":"Dread's stream. SkinCoin","viewer_count":8902,"started_at":"2017-10-13T16:01:56Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_dreadztv-{width}x{height}.jpg"},{"id":"26473088464","user_id":"103861159","game_id":"495589","community_ids":[],"type":"live","title":"안녕하세요 6시의 행운아입니다","viewer_count":8149,"started_at":"2017-10-13T08:57:17Z","language":"ko","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_yapyap30-{width}x{height}.jpg"},{"id":"26473455536","user_id":"102381201","game_id":"138585","community_ids":[],"type":"live","title":"Cloud9 DDaHyoNi ","viewer_count":7076,"started_at":"2017-10-13T10:59:07Z","language":"ko","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ddahyoni-{width}x{height}.jpg"},{"id":"26474622368","user_id":"22484632","game_id":"493057","community_ids":[],"type":"live","title":"@Forsensc2 ,WOW! Chicken dinner with 50+ stream snipers, this guy dreams like a god! Evil within 2 later!","viewer_count":6592,"started_at":"2017-10-13T15:16:16Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_forsenlol-{width}x{height}.jpg"}],"pagination":{"cursor":"eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ"}}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: streamList,
    }
  }

  render() {
    const list = this.state.results.data;
    return (
      <div className="App">
        <Table list={list} />
      </div>
    );
  }
}

const Table = ({ list, width=320, height=180 }) =>
  <div>
    { list.map(item =>
      <div key={item.id}>
        <img src={item.thumbnail_url
                  .replace('{width}', width)
                  .replace('{height}', height)
                 } 
             alt="Stream Thumbnail"
        />
        <h3>{item.title}</h3>
        <p>{item.viewer_count} viewers on user_id:{item.user_id}</p>
      </div>
    )}
  </div>

export default App;
