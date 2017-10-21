import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar';
import Table from '../Table';

const streamList = {
  "_total": 37238,
  "streams": [
      {
          "_id": 26530284832,
          "game": "TwitchCon 2017",
          "viewers": 40685,
          "video_height": 1080,
          "average_fps": 30,
          "delay": 0,
          "created_at": "2017-10-20T18:25:07Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_twitch-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_twitch-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_twitch-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_twitch-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "TwitchCon 2017 - Keynote",
              "broadcaster_language": "en",
              "display_name": "Twitch",
              "game": "TwitchCon 2017",
              "language": "en",
              "_id": 12826,
              "name": "twitch",
              "created_at": "2007-05-22T10:39:54Z",
              "updated_at": "2017-10-20T20:05:54Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/twitch-profile_image-8a8c5be2e3b64a9a-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/3491ce9fa2f608b3-channel_offline_image-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/twitch-profile_banner-6936c61353e4aeed-480.png",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/twitch",
              "views": 154675076,
              "followers": 640769,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/twitch",
                  "follows": "https://api.twitch.tv/kraken/channels/twitch/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/twitch/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/twitch/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/twitch",
                  "features": "https://api.twitch.tv/kraken/channels/twitch/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/twitch/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/twitch/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/twitch/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/twitch/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/twitch"
          }
      },
      {
          "_id": 26529752208,
          "game": "Counter-Strike: Global Offensive",
          "viewers": 23183,
          "video_height": 720,
          "average_fps": 59.9625234229,
          "delay": 0,
          "created_at": "2017-10-20T17:12:34Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dreamhackcs-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dreamhackcs-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dreamhackcs-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dreamhackcs-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "LIVE: mousesports vs. LDLC - DreamHack ASTRO Open Denver 2017",
              "broadcaster_language": "en",
              "display_name": "DreamHackCS",
              "game": "Counter-Strike: Global Offensive",
              "language": "nl",
              "_id": 22859264,
              "name": "dreamhackcs",
              "created_at": "2011-06-09T06:03:20Z",
              "updated_at": "2017-10-20T20:05:57Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/c0977f2f26406e50-profile_image-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/b94cd13c893861e5-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/9c49e08ba70b52b0-profile_banner-480.png",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/dreamhackcs",
              "views": 119810425,
              "followers": 1272284,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/dreamhackcs",
                  "follows": "https://api.twitch.tv/kraken/channels/dreamhackcs/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/dreamhackcs/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/dreamhackcs/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/dreamhackcs",
                  "features": "https://api.twitch.tv/kraken/channels/dreamhackcs/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/dreamhackcs/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/dreamhackcs/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/dreamhackcs/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/dreamhackcs/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/dreamhackcs"
          }
      },
      {
          "_id": 26529389312,
          "game": "Party Hard Tycoon",
          "viewers": 22116,
          "video_height": 1080,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T16:17:22Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_gronkh-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_gronkh-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_gronkh-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_gronkh-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "★ #FREiAB18 ★",
              "broadcaster_language": "de",
              "display_name": "GRONKH",
              "game": "Party Hard Tycoon",
              "language": "de",
              "_id": 12875057,
              "name": "gronkh",
              "created_at": "2010-05-31T13:45:53Z",
              "updated_at": "2017-10-20T20:06:32Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/gronkh-profile_image-76b34139eaa46bb5-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/gronkh-channel_offline_image-eb70f551d9327737-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/gronkh-profile_banner-1b26d17bba00a4fd-480.png",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/gronkh",
              "views": 41277073,
              "followers": 752390,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/gronkh",
                  "follows": "https://api.twitch.tv/kraken/channels/gronkh/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/gronkh/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/gronkh/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/gronkh",
                  "features": "https://api.twitch.tv/kraken/channels/gronkh/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/gronkh/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/gronkh/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/gronkh/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/gronkh/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/gronkh"
          }
      },
      {
          "_id": 26530795616,
          "game": "H1Z1",
          "viewers": 21544,
          "video_height": 1080,
          "average_fps": 59.9700149925,
          "delay": 0,
          "created_at": "2017-10-20T19:30:48Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_h1z1-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_h1z1-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_h1z1-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_h1z1-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": false,
              "status": "H1Z1 Invitational at TwitchCon - Day 1! Stats: h1z1.com/watch Skin: h1z1.com/H1Z1Vertigo",
              "broadcaster_language": "en",
              "display_name": "H1Z1",
              "game": "H1Z1",
              "language": "en",
              "_id": 114029128,
              "name": "h1z1",
              "created_at": "2016-01-27T15:50:05Z",
              "updated_at": "2017-10-20T20:11:51Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/2697f76511aff418-profile_image-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/b2649110e144ac4d-channel_offline_image-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/acafb369e9cc5cd7-profile_banner-480.jpeg",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/h1z1",
              "views": 2470584,
              "followers": 91556,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/h1z1",
                  "follows": "https://api.twitch.tv/kraken/channels/h1z1/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/h1z1/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/h1z1/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/h1z1",
                  "features": "https://api.twitch.tv/kraken/channels/h1z1/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/h1z1/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/h1z1/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/h1z1/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/h1z1/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/h1z1"
          }
      },
      {
          "_id": 26528598176,
          "game": "League of Legends",
          "viewers": 18041,
          "video_height": 1080,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T13:58:56Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nightblue3-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nightblue3-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nightblue3-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nightblue3-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "challengers ONLY stream | help me stay awake O_O",
              "broadcaster_language": "en",
              "display_name": "Nightblue3",
              "game": "League of Legends",
              "language": "en",
              "_id": 26946000,
              "name": "nightblue3",
              "created_at": "2011-12-21T18:18:40Z",
              "updated_at": "2017-10-20T20:06:40Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/e714e6b9048b01cf-profile_image-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/ad7d037f20723217-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/d7c46e55218bd672-profile_banner-480.png",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/nightblue3",
              "views": 179646210,
              "followers": 2066097,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/nightblue3",
                  "follows": "https://api.twitch.tv/kraken/channels/nightblue3/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/nightblue3/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/nightblue3/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/nightblue3",
                  "features": "https://api.twitch.tv/kraken/channels/nightblue3/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/nightblue3/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/nightblue3/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/nightblue3/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/nightblue3/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/nightblue3"
          }
      },
      {
          "_id": 26528808976,
          "game": "FIFA 18",
          "viewers": 15384,
          "video_height": 720,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T14:38:46Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_castro_1021-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_castro_1021-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_castro_1021-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_castro_1021-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "Halloween SCREAMER cards!! @CASTRO1021",
              "broadcaster_language": "en",
              "display_name": "Castro_1021",
              "game": "FIFA 18",
              "language": "en-gb",
              "_id": 52091823,
              "name": "castro_1021",
              "created_at": "2013-11-24T08:42:28Z",
              "updated_at": "2017-10-20T20:06:27Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/1894f0796c2a77f4-profile_image-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/7440ae63dd7e3a08-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/623df6bbadcc4ca9-profile_banner-480.png",
              "profile_banner_background_color": "#454145",
              "url": "https://www.twitch.tv/castro_1021",
              "views": 37113105,
              "followers": 1286641,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/castro_1021",
                  "follows": "https://api.twitch.tv/kraken/channels/castro_1021/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/castro_1021/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/castro_1021/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/castro_1021",
                  "features": "https://api.twitch.tv/kraken/channels/castro_1021/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/castro_1021/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/castro_1021/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/castro_1021/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/castro_1021/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/castro_1021"
          }
      },
      {
          "_id": 26525009168,
          "game": "Stories Untold",
          "viewers": 14636,
          "video_height": 1080,
          "average_fps": 63,
          "delay": 0,
          "created_at": "2017-10-19T23:46:26Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "7th Annual Halloween Marathon  !store !horror !corsair",
              "broadcaster_language": "en",
              "display_name": "DansGaming",
              "game": "Stories Untold",
              "language": "en",
              "_id": 7236692,
              "name": "dansgaming",
              "created_at": "2009-07-15T03:02:41Z",
              "updated_at": "2017-10-20T20:06:18Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/dansgaming-profile_image-76e4a4ab9388bc9c-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/dansgaming-channel_offline_image-f4f6686e32afb2c7-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/dansgaming-profile_banner-4c2b8ece8cd010b4-480.jpeg",
              "profile_banner_background_color": "#f6f6f6",
              "url": "https://www.twitch.tv/dansgaming",
              "views": 78527294,
              "followers": 625501,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/dansgaming",
                  "follows": "https://api.twitch.tv/kraken/channels/dansgaming/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/dansgaming/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/dansgaming/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/dansgaming",
                  "features": "https://api.twitch.tv/kraken/channels/dansgaming/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/dansgaming/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/dansgaming/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/dansgaming/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/dansgaming/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/dansgaming"
          }
      },
      {
          "_id": 26530397312,
          "game": "League of Legends",
          "viewers": 14358,
          "video_height": 1080,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T18:40:14Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_riotgames-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_riotgames-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_riotgames-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_riotgames-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "(REBROADCAST) Worlds 2017 Quarterfinals: SK telecom T1 vs. Misfits Gaming",
              "broadcaster_language": "en",
              "display_name": "Riot Games",
              "game": "League of Legends",
              "language": "en",
              "_id": 36029255,
              "name": "riotgames",
              "created_at": "2012-09-08T06:53:10Z",
              "updated_at": "2017-10-20T20:06:12Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/riotgames-profile_image-4be3ad99629ac9ba-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/4119e8a9a79814ed-channel_offline_image-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/b737c0e0c2e968a3-profile_banner-480.jpeg",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/riotgames",
              "views": 925551966,
              "followers": 2581303,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/riotgames",
                  "follows": "https://api.twitch.tv/kraken/channels/riotgames/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/riotgames/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/riotgames/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/riotgames",
                  "features": "https://api.twitch.tv/kraken/channels/riotgames/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/riotgames/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/riotgames/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/riotgames/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/riotgames/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/riotgames"
          }
      },
      {
          "_id": 26530302016,
          "game": "TwitchCon 2017",
          "viewers": 13568,
          "video_height": 1080,
          "average_fps": 30.0107181136,
          "delay": 0,
          "created_at": "2017-10-20T18:27:26Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_itmejp-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_itmejp-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_itmejp-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_itmejp-{width}x{height}.jpg"
          },
          "channel": {
              "mature": true,
              "partner": true,
              "status": "Dropped Frames - TwitchCon 2017 Keynote | !Patreon !RollPlayStore | w/ @CohhCarnage @itmeJP",
              "broadcaster_language": "en",
              "display_name": "itmeJP",
              "game": "TwitchCon 2017",
              "language": "en",
              "_id": 10817445,
              "name": "itmejp",
              "created_at": "2010-02-28T09:30:51Z",
              "updated_at": "2017-10-20T20:05:25Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/itmejp-profile_image-64703923f21827e3-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/7ad68509509a467e-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/itmejp-profile_banner-4a0a3242b7445758-480.png",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/itmejp",
              "views": 49979996,
              "followers": 301175,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/itmejp",
                  "follows": "https://api.twitch.tv/kraken/channels/itmejp/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/itmejp/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/itmejp/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/itmejp",
                  "features": "https://api.twitch.tv/kraken/channels/itmejp/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/itmejp/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/itmejp/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/itmejp/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/itmejp/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/itmejp"
          }
      },
      {
          "_id": 26529185264,
          "game": "Counter-Strike: Global Offensive",
          "viewers": 12762,
          "video_height": 1080,
          "average_fps": 62.4,
          "delay": 0,
          "created_at": "2017-10-20T15:44:35Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nvidiageforcepl-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nvidiageforcepl-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nvidiageforcepl-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nvidiageforcepl-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "[WESG] 21:25 Virtus.pro vs PRIDE | !promocja",
              "broadcaster_language": "pl",
              "display_name": "NVIDIAGeForcePL",
              "game": "Counter-Strike: Global Offensive",
              "language": "pl",
              "_id": 93141680,
              "name": "nvidiageforcepl",
              "created_at": "2015-06-10T06:50:08Z",
              "updated_at": "2017-10-20T20:06:13Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/nvidiageforcepl-profile_image-fecc1664bf59135c-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/nvidiageforcepl-channel_offline_image-7d0b3b63120ca77d-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/nvidiageforcepl-profile_banner-a9e9f93d5b79dfdd-480.jpeg",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/nvidiageforcepl",
              "views": 10037233,
              "followers": 145960,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/nvidiageforcepl",
                  "follows": "https://api.twitch.tv/kraken/channels/nvidiageforcepl/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/nvidiageforcepl/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/nvidiageforcepl/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/nvidiageforcepl",
                  "features": "https://api.twitch.tv/kraken/channels/nvidiageforcepl/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/nvidiageforcepl/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/nvidiageforcepl/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/nvidiageforcepl/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/nvidiageforcepl/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/nvidiageforcepl"
          }
      },
      {
          "_id": 26528312048,
          "game": "Hearthstone",
          "viewers": 12532,
          "video_height": 1080,
          "average_fps": 61.5079365079,
          "delay": 0,
          "created_at": "2017-10-20T13:00:07Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_amazhs-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_amazhs-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_amazhs-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_amazhs-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "★AMAZ★ Super Stream Today - 100 wins in how many runs?!",
              "broadcaster_language": "en",
              "display_name": "AmazHS",
              "game": "Hearthstone",
              "language": "en",
              "_id": 43356746,
              "name": "amazhs",
              "created_at": "2013-05-09T16:46:10Z",
              "updated_at": "2017-10-20T20:06:16Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/amazhs-profile_image-128bb4f9fe96c7ba-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/392f20fc11fff226-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/70fd8cf29f780646-profile_banner-480.jpeg",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/amazhs",
              "views": 81464801,
              "followers": 867087,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/amazhs",
                  "follows": "https://api.twitch.tv/kraken/channels/amazhs/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/amazhs/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/amazhs/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/amazhs",
                  "features": "https://api.twitch.tv/kraken/channels/amazhs/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/amazhs/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/amazhs/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/amazhs/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/amazhs/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/amazhs"
          }
      },
      {
          "_id": 26529700880,
          "game": "Hearthstone",
          "viewers": 10148,
          "video_height": 720,
          "average_fps": 59.9625234229,
          "delay": 0,
          "created_at": "2017-10-20T17:05:11Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dreamhackhs-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dreamhackhs-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dreamhackhs-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dreamhackhs-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "LIVE: Day 1 of Hearthstone Grand Prix DreamHack Denver 2017",
              "broadcaster_language": "en",
              "display_name": "DreamHackHS",
              "game": "Hearthstone",
              "language": "en",
              "_id": 64291396,
              "name": "dreamhackhs",
              "created_at": "2014-06-13T17:03:20Z",
              "updated_at": "2017-10-20T20:06:02Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a3fa89e412e6ccad-profile_image-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/79517dc263c4412e-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/dreamhackhs-profile_banner-58051421a1424cb0-480.png",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/dreamhackhs",
              "views": 12998226,
              "followers": 99480,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/dreamhackhs",
                  "follows": "https://api.twitch.tv/kraken/channels/dreamhackhs/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/dreamhackhs/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/dreamhackhs/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/dreamhackhs",
                  "features": "https://api.twitch.tv/kraken/channels/dreamhackhs/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/dreamhackhs/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/dreamhackhs/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/dreamhackhs/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/dreamhackhs/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/dreamhackhs"
          }
      },
      {
          "_id": 26529475152,
          "game": "FIFA 18",
          "viewers": 9984,
          "video_height": 1080,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T16:31:29Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_montanablack88-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_montanablack88-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_montanablack88-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_montanablack88-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "Road zur Legende ...",
              "broadcaster_language": "de",
              "display_name": "MontanaBlack88",
              "game": "FIFA 18",
              "language": "de",
              "_id": 45044816,
              "name": "montanablack88",
              "created_at": "2013-06-21T23:14:20Z",
              "updated_at": "2017-10-20T20:06:36Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/33a370ddc7817a27-profile_image-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/montanablack88-channel_offline_image-a5234aaa9cb8c1cf-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/9b86cb8e055527b3-profile_banner-480.jpeg",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/montanablack88",
              "views": 12502208,
              "followers": 701210,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/montanablack88",
                  "follows": "https://api.twitch.tv/kraken/channels/montanablack88/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/montanablack88/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/montanablack88/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/montanablack88",
                  "features": "https://api.twitch.tv/kraken/channels/montanablack88/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/montanablack88/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/montanablack88/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/montanablack88/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/montanablack88/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/montanablack88"
          }
      },
      {
          "_id": 26529086864,
          "game": "South Park: The Fractured But Whole",
          "viewers": 9553,
          "video_height": 720,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T15:27:40Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_forsenlol-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_forsenlol-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_forsenlol-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_forsenlol-{width}x{height}.jpg"
          },
          "channel": {
              "mature": true,
              "partner": true,
              "status": "@forsensc2, The Talking Dead s01e02. More south park later",
              "broadcaster_language": "en",
              "display_name": "Forsenlol",
              "game": "South Park: The Fractured But Whole",
              "language": "en",
              "_id": 22484632,
              "name": "forsenlol",
              "created_at": "2011-05-19T00:28:28Z",
              "updated_at": "2017-10-20T20:05:55Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/forsenlol-profile_image-48b43e1e4f54b5c8-300x300.png",
              "banner": null,
              "video_banner": null,
              "background": null,
              "profile_banner": null,
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/forsenlol",
              "views": 59081567,
              "followers": 657061,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/forsenlol",
                  "follows": "https://api.twitch.tv/kraken/channels/forsenlol/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/forsenlol/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/forsenlol/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/forsenlol",
                  "features": "https://api.twitch.tv/kraken/channels/forsenlol/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/forsenlol/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/forsenlol/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/forsenlol/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/forsenlol/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/forsenlol"
          }
      },
      {
          "_id": 26530924208,
          "game": "IRL",
          "viewers": 9470,
          "video_height": 720,
          "average_fps": 30.1659125189,
          "delay": 0,
          "created_at": "2017-10-20T19:47:23Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_greekgodx-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_greekgodx-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_greekgodx-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_greekgodx-{width}x{height}.jpg"
          },
          "channel": {
              "mature": true,
              "partner": true,
              "status": "GREEKGODX AT TWITCH CON STREAM!",
              "broadcaster_language": "en",
              "display_name": "Greekgodx",
              "game": "IRL",
              "language": "en",
              "_id": 15310631,
              "name": "greekgodx",
              "created_at": "2010-09-05T19:51:48Z",
              "updated_at": "2017-10-20T20:05:21Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/greekgodx-profile_image-b6d4ec2780ff977c-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/e59ca7a5d68a0342-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/176dcddec4e0e601-profile_banner-480.png",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/greekgodx",
              "views": 3951422,
              "followers": 193622,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/greekgodx",
                  "follows": "https://api.twitch.tv/kraken/channels/greekgodx/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/greekgodx/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/greekgodx/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/greekgodx",
                  "features": "https://api.twitch.tv/kraken/channels/greekgodx/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/greekgodx/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/greekgodx/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/greekgodx/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/greekgodx/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/greekgodx"
          }
      },
      {
          "_id": 26529664896,
          "game": "The Witcher",
          "viewers": 9315,
          "video_height": 1080,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T17:00:14Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_honeymad-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_honeymad-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_honeymad-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_honeymad-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "(rus) гвинблэд 20!8, day 2",
              "broadcaster_language": "ru",
              "display_name": "HoneyMad",
              "game": "The Witcher",
              "language": "ru",
              "_id": 40298003,
              "name": "honeymad",
              "created_at": "2013-02-13T21:52:13Z",
              "updated_at": "2017-10-20T20:06:41Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/6cb759fc56be9be5-profile_image-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/b9bb422614767f4c-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/cb364264ec53b31e-profile_banner-480.png",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/honeymad",
              "views": 29914319,
              "followers": 344104,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/honeymad",
                  "follows": "https://api.twitch.tv/kraken/channels/honeymad/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/honeymad/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/honeymad/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/honeymad",
                  "features": "https://api.twitch.tv/kraken/channels/honeymad/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/honeymad/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/honeymad/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/honeymad/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/honeymad/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/honeymad"
          }
      },
      {
          "_id": 26530048704,
          "game": "Dota 2",
          "viewers": 9245,
          "video_height": 720,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T17:54:39Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_ybicanoooobov-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_ybicanoooobov-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_ybicanoooobov-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_ybicanoooobov-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "На ком выигрывать в соло на небольшом рейтинге? Заходи, учись братишка",
              "broadcaster_language": "ru",
              "display_name": "ybicanoooobov",
              "game": "Dota 2",
              "language": "ru",
              "_id": 68950614,
              "name": "ybicanoooobov",
              "created_at": "2014-08-14T11:23:08Z",
              "updated_at": "2017-10-20T20:06:35Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/ybicanoooobov-profile_image-841fca9b492bd5d5-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/ybicanoooobov-channel_offline_image-1c83584d8631bb45-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/ybicanoooobov-profile_banner-f13a14bc12e10c3a-480.jpeg",
              "profile_banner_background_color": "#000000",
              "url": "https://www.twitch.tv/ybicanoooobov",
              "views": 17729410,
              "followers": 256372,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/ybicanoooobov",
                  "follows": "https://api.twitch.tv/kraken/channels/ybicanoooobov/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/ybicanoooobov/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/ybicanoooobov/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/ybicanoooobov",
                  "features": "https://api.twitch.tv/kraken/channels/ybicanoooobov/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/ybicanoooobov/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/ybicanoooobov/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/ybicanoooobov/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/ybicanoooobov/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/ybicanoooobov"
          }
      },
      {
          "_id": 26529788848,
          "game": "FIFA 18",
          "viewers": 7404,
          "video_height": 1080,
          "average_fps": 63,
          "delay": 0,
          "created_at": "2017-10-20T17:17:44Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_feelfifaandgamingtv-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_feelfifaandgamingtv-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_feelfifaandgamingtv-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_feelfifaandgamingtv-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "20.000 FIFA POINTS PACK OPENING & FUT CHAMPIONS !! 🔥🔥🔥",
              "broadcaster_language": "de",
              "display_name": "FeelFIFAandGamingTV",
              "game": "FIFA 18",
              "language": "de",
              "_id": 40135340,
              "name": "feelfifaandgamingtv",
              "created_at": "2013-02-08T17:23:14Z",
              "updated_at": "2017-10-20T20:06:22Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/feelfifaandgamingtv-profile_image-880011156860015c-300x300.png",
              "banner": null,
              "video_banner": null,
              "background": null,
              "profile_banner": null,
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/feelfifaandgamingtv",
              "views": 756637,
              "followers": 93457,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/feelfifaandgamingtv",
                  "follows": "https://api.twitch.tv/kraken/channels/feelfifaandgamingtv/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/feelfifaandgamingtv/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/feelfifaandgamingtv/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/feelfifaandgamingtv",
                  "features": "https://api.twitch.tv/kraken/channels/feelfifaandgamingtv/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/feelfifaandgamingtv/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/feelfifaandgamingtv/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/feelfifaandgamingtv/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/feelfifaandgamingtv/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/feelfifaandgamingtv"
          }
      },
      {
          "_id": 26530846592,
          "game": "FIFA 18",
          "viewers": 7033,
          "video_height": 1080,
          "average_fps": 61.4285714286,
          "delay": 0,
          "created_at": "2017-10-20T19:37:19Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_brucegrannec-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_brucegrannec-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_brucegrannec-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_brucegrannec-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "FIFA 18 - FUT CHAMPIONS !",
              "broadcaster_language": "fr",
              "display_name": "BruceGrannec",
              "game": "FIFA 18",
              "language": "fr",
              "_id": 31813025,
              "name": "brucegrannec",
              "created_at": "2012-07-02T17:10:24Z",
              "updated_at": "2017-10-20T20:06:37Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/brucegrannec-profile_image-3f8432a17cdaa08a-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/brucegrannec-channel_offline_image-ed449aad8877e57b-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/brucegrannec-profile_banner-72888e1d088642c1-480.jpeg",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/brucegrannec",
              "views": 9293135,
              "followers": 241657,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/brucegrannec",
                  "follows": "https://api.twitch.tv/kraken/channels/brucegrannec/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/brucegrannec/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/brucegrannec/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/brucegrannec",
                  "features": "https://api.twitch.tv/kraken/channels/brucegrannec/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/brucegrannec/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/brucegrannec/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/brucegrannec/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/brucegrannec/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/brucegrannec"
          }
      },
      {
          "_id": 26529099536,
          "game": "FIFA 18",
          "viewers": 6815,
          "video_height": 900,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T15:29:57Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nick28t-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nick28t-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nick28t-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nick28t-{width}x{height}.jpg"
          },
          "channel": {
              "mature": true,
              "partner": true,
              "status": "FUT CHAMPS GRIND DAY.... ALL DAY | Twitter: @Nick28T",
              "broadcaster_language": "en",
              "display_name": "Nick28T",
              "game": "FIFA 18",
              "language": "en-gb",
              "_id": 49303276,
              "name": "nick28t",
              "created_at": "2013-09-21T20:10:06Z",
              "updated_at": "2017-10-20T20:05:32Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/nick28t-profile_image-4ea18513137e1c90-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/4d5f16d04b07b508-channel_offline_image-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/nick28t-profile_banner-23f9250904a5c7a1-480.png",
              "profile_banner_background_color": "#030303",
              "url": "https://www.twitch.tv/nick28t",
              "views": 20780135,
              "followers": 733929,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/nick28t",
                  "follows": "https://api.twitch.tv/kraken/channels/nick28t/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/nick28t/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/nick28t/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/nick28t",
                  "features": "https://api.twitch.tv/kraken/channels/nick28t/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/nick28t/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/nick28t/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/nick28t/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/nick28t/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/nick28t"
          }
      },
      {
          "_id": 26528674304,
          "game": "PLAYERUNKNOWN'S BATTLEGROUNDS",
          "viewers": 6761,
          "video_height": 720,
          "average_fps": 60.0985221675,
          "delay": 0,
          "created_at": "2017-10-20T14:13:22Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_break-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_break-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_break-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_break-{width}x{height}.jpg"
          },
          "channel": {
              "mature": true,
              "partner": true,
              "status": "TSM_BreaK //  YAYA",
              "broadcaster_language": "en",
              "display_name": "BreaK",
              "game": "PLAYERUNKNOWN'S BATTLEGROUNDS",
              "language": "en",
              "_id": 37851229,
              "name": "break",
              "created_at": "2012-11-20T23:51:48Z",
              "updated_at": "2017-10-20T20:06:08Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/69b041f2-57c2-4854-8204-d4fc260e6f57-profile_image-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/d8e33c2f12ebe30a-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/d19fcd661c3af7a8-profile_banner-480.png",
              "profile_banner_background_color": "#000000",
              "url": "https://www.twitch.tv/break",
              "views": 6331391,
              "followers": 159838,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/break",
                  "follows": "https://api.twitch.tv/kraken/channels/break/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/break/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/break/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/break",
                  "features": "https://api.twitch.tv/kraken/channels/break/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/break/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/break/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/break/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/break/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/break"
          }
      },
      {
          "_id": 26529251360,
          "game": "League of Legends",
          "viewers": 6433,
          "video_height": 1080,
          "average_fps": 59.9625234229,
          "delay": 0,
          "created_at": "2017-10-20T15:55:48Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_summonersinnlive-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_summonersinnlive-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_summonersinnlive-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_summonersinnlive-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "[Rebroadcast] World Championship 2017: Viertelfinale SKT vs. MSF [Ger]",
              "broadcaster_language": "de",
              "display_name": "SummonersInnLive",
              "game": "League of Legends",
              "language": "de",
              "_id": 40336240,
              "name": "summonersinnlive",
              "created_at": "2013-02-15T10:30:40Z",
              "updated_at": "2017-10-20T20:05:21Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/972fe1f486e6a958-profile_image-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/aa4b26877f51c29b-channel_offline_image-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/ee9c01abeb6a99c3-profile_banner-480.png",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/summonersinnlive",
              "views": 73547117,
              "followers": 363153,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/summonersinnlive",
                  "follows": "https://api.twitch.tv/kraken/channels/summonersinnlive/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/summonersinnlive/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/summonersinnlive/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/summonersinnlive",
                  "features": "https://api.twitch.tv/kraken/channels/summonersinnlive/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/summonersinnlive/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/summonersinnlive/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/summonersinnlive/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/summonersinnlive/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/summonersinnlive"
          }
      },
      {
          "_id": 26529624848,
          "game": "Warframe",
          "viewers": 6414,
          "video_height": 1080,
          "average_fps": 60,
          "delay": 0,
          "created_at": "2017-10-20T16:54:35Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_tactical_potato_-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_tactical_potato_-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_tactical_potato_-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_tactical_potato_-{width}x{height}.jpg"
          },
          "channel": {
              "mature": true,
              "partner": true,
              "status": "🐙[Warframe Partner] Beer&Fishing!! Hello.... , [PC] WARFRAME !Discord",
              "broadcaster_language": "en",
              "display_name": "Tactical_Potato_",
              "game": "Warframe",
              "language": "en-gb",
              "_id": 91296568,
              "name": "tactical_potato_",
              "created_at": "2015-05-17T14:56:45Z",
              "updated_at": "2017-10-20T20:06:40Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/43be01ab8958d898-profile_image-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/tactical_potato_-channel_offline_image-1cc28a37e5e5a221-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/a9a400ab4666a862-profile_banner-480.jpeg",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/tactical_potato_",
              "views": 592414,
              "followers": 61907,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/tactical_potato_",
                  "follows": "https://api.twitch.tv/kraken/channels/tactical_potato_/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/tactical_potato_/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/tactical_potato_/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/tactical_potato_",
                  "features": "https://api.twitch.tv/kraken/channels/tactical_potato_/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/tactical_potato_/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/tactical_potato_/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/tactical_potato_/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/tactical_potato_/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/tactical_potato_"
          }
      },
      {
          "_id": 26529673136,
          "game": "Dead by Daylight",
          "viewers": 5855,
          "video_height": 720,
          "average_fps": 62.4,
          "delay": 0,
          "created_at": "2017-10-20T17:01:23Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_admiralbahroo-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_admiralbahroo-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_admiralbahroo-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_admiralbahroo-{width}x{height}.jpg"
          },
          "channel": {
              "mature": true,
              "partner": true,
              "status": ":memo:  rooOhISam  There is a test today",
              "broadcaster_language": "en",
              "display_name": "AdmiralBahroo",
              "game": "Dead by Daylight",
              "language": "en",
              "_id": 40972890,
              "name": "admiralbahroo",
              "created_at": "2013-03-04T08:13:40Z",
              "updated_at": "2017-10-20T20:05:55Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/admiralbahroo-profile_image-9631b9c9dd19cdad-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/admiralbahroo-channel_offline_image-10fe7b5090109e23-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/admiralbahroo-profile_banner-45e59bc0ad15f032-480.png",
              "profile_banner_background_color": "#000000",
              "url": "https://www.twitch.tv/admiralbahroo",
              "views": 19270593,
              "followers": 420150,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/admiralbahroo",
                  "follows": "https://api.twitch.tv/kraken/channels/admiralbahroo/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/admiralbahroo/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/admiralbahroo/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/admiralbahroo",
                  "features": "https://api.twitch.tv/kraken/channels/admiralbahroo/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/admiralbahroo/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/admiralbahroo/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/admiralbahroo/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/admiralbahroo/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/admiralbahroo"
          }
      },
      {
          "_id": 26530520016,
          "game": "League of Legends",
          "viewers": 5805,
          "video_height": 720,
          "average_fps": 60.0122473974,
          "delay": 0,
          "created_at": "2017-10-20T18:56:21Z",
          "is_playlist": false,
          "stream_type": "live",
          "preview": {
              "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_boxbox-80x45.jpg",
              "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_boxbox-320x180.jpg",
              "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_boxbox-640x360.jpg",
              "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_boxbox-{width}x{height}.jpg"
          },
          "channel": {
              "mature": false,
              "partner": true,
              "status": "(ง°ل͜°)ง QUICK! while everyone's at twitch con... steal their viewers (ง°ل͜°)ง",
              "broadcaster_language": "en",
              "display_name": "boxbox",
              "game": "League of Legends",
              "language": "en",
              "_id": 38881685,
              "name": "boxbox",
              "created_at": "2012-12-30T06:58:18Z",
              "updated_at": "2017-10-20T20:05:46Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/96b30bc4546e2f71-profile_image-300x300.jpeg",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/boxbox-channel_offline_image-406898d7df88683e-1920x1080.png",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/boxbox-profile_banner-a383c4183668e317-480.jpeg",
              "profile_banner_background_color": "",
              "url": "https://www.twitch.tv/boxbox",
              "views": 74834372,
              "followers": 1190365,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/boxbox",
                  "follows": "https://api.twitch.tv/kraken/channels/boxbox/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/boxbox/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/boxbox/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/boxbox",
                  "features": "https://api.twitch.tv/kraken/channels/boxbox/features",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/boxbox/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/boxbox/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/boxbox/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/boxbox/videos"
              }
          },
          "_links": {
              "self": "https://api.twitch.tv/kraken/streams/boxbox"
          }
      }
  ],
  "_links": {
      "self": "https://api.twitch.tv/kraken/streams?limit=25&stream_type=live",
      "next": "https://api.twitch.tv/kraken/streams?limit=25&offset=25&stream_type=live",
      "featured": "https://api.twitch.tv/kraken/streams/featured",
      "summary": "https://api.twitch.tv/kraken/streams/summary",
      "followed": "https://api.twitch.tv/kraken/streams/followed"
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: streamList,
    }

    this.getStreams = this.getStreams.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
  }

  getStreams() {
    return
  }

  onNavClick(viewID) {
    return
  }

  render() {
    const list = this.state.results.streams;
    return (
      <div className="App">
        <Navbar onClick={this.onNavClick} />
        <Table list={list} />
      </div>
    );
  }
}

export default App;
