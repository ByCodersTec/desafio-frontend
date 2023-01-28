<template>
  <div class="player">
    <VideoPlayer :video="video" />
    <VideoRecommended :videos="videoRecommended" />
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
import VideoRecommended from '@/components/VideoRecommended.vue'
export default {
  name: "Player",
  components: {VideoPlayer, VideoRecommended},
  data() {
    return {
      video: {
        kind: "youtube#video",
        etag: "-BQp4bYvaWed6GgiWwv6-nX_9F4",
        id: "KanjNLyegXc",
        channel: {
          kind: "youtube#channel",
          etag: "ncb2d-evnH-m1aO54QPv-O2ICVA",
          id: "UCi7Zk9baY1tvdlgxIML8MXg",
          snippet: {
            title: "CTV News",
            description:
              "CTV News is Canada's most-watched news organization both locally and nationally, and has a network of national, international, and local news operations.",
            customUrl: "@ctvnews",
            publishedAt: "2015-02-02T20:08:27Z",
            thumbnails: {
              default: {
                url: "https://yt3.ggpht.com/ytc/AL5GRJUN5TSPRBDzVwV_bEKU2rpchW5tHygjKgHjTM2bQCM=s88-c-k-c0x00ffffff-no-rj",
                width: 88,
                height: 88,
              },
              medium: {
                url: "https://yt3.ggpht.com/ytc/AL5GRJUN5TSPRBDzVwV_bEKU2rpchW5tHygjKgHjTM2bQCM=s240-c-k-c0x00ffffff-no-rj",
                width: 240,
                height: 240,
              },
              high: {
                url: "https://yt3.ggpht.com/ytc/AL5GRJUN5TSPRBDzVwV_bEKU2rpchW5tHygjKgHjTM2bQCM=s800-c-k-c0x00ffffff-no-rj",
                width: 800,
                height: 800,
              },
            },
            localized: {
              title: "CTV News",
              description:
                "CTV News is Canada's most-watched news organization both locally and nationally, and has a network of national, international, and local news operations.",
            },
            country: "CA",
          },
          statistics: {
            viewCount: "634393805",
            subscriberCount: "870000",
            hiddenSubscriberCount: false,
            videoCount: "17620",
          },
        },
        snippet: {
          publishedAt: "2023-01-27T23:28:20Z",
          channelId: "UCi7Zk9baY1tvdlgxIML8MXg",
          title: "What is the polar vortex and when will it hit Canada?",
          description:
            "Your Morning’s meteorologist Kelsey McEwen explains what the polar vortex is and when its expected to hit Canada.<br/><br/>Subscribe to CTV News to watch more videos: https://www.youtube.com/ctvnews\n\nConnect with CTV News:\nFor the latest news visit: http://www.ctvnews.ca/ \nFor a full video offering visit the CTV News Network: http://www.ctvnews.ca/video\n \nCTV News on Facebook: https://www.facebook.com/CTVNews  \nCTV News on TikTok: https://www.tiktok.com/discover/CTV-News\nCTV News on Twitter: https://twitter.com/CTVNews  \nCTV News on Instagram: https://instagram.com/ctvnews/ \nCTV News on Reddit: https://www.reddit.com/user/CTVNEWS\n\n\n---\nCTV News is Canada's most-watched news organization both locally and nationally, and has a network of national, international, and local news operations.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/KanjNLyegXc/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/KanjNLyegXc/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/KanjNLyegXc/hqdefault.jpg",
              width: 480,
              height: 360,
            },
            standard: {
              url: "https://i.ytimg.com/vi/KanjNLyegXc/sddefault.jpg",
              width: 640,
              height: 480,
            },
            maxres: {
              url: "https://i.ytimg.com/vi/KanjNLyegXc/maxresdefault.jpg",
              width: 1280,
              height: 720,
            },
          },
          channelTitle: "CTV News",
          tags: [
            "CTV",
            "News",
            "CTV News",
            "polar vortex",
            "what is the polar vortex?",
            "polar vortex canada",
            "canada cold snap",
            "will the polar vortex hit canada?",
            "cold temperatures canada",
            "canada winter",
            "winter cold snap",
            "polar vortex temperature",
          ],
          categoryId: "25",
          liveBroadcastContent: "none",
          localized: {
            title: "What is the polar vortex and when will it hit Canada?",
            description:
              "Your Morning’s meteorologist Kelsey McEwen explains what the polar vortex is and when its expected to hit Canada.\n\nSubscribe to CTV News to watch more videos: https://www.youtube.com/ctvnews\n\nConnect with CTV News:\nFor the latest news visit: http://www.ctvnews.ca/ \nFor a full video offering visit the CTV News Network: http://www.ctvnews.ca/video\n \nCTV News on Facebook: https://www.facebook.com/CTVNews  \nCTV News on TikTok: https://www.tiktok.com/discover/CTV-News\nCTV News on Twitter: https://twitter.com/CTVNews  \nCTV News on Instagram: https://instagram.com/ctvnews/ \nCTV News on Reddit: https://www.reddit.com/user/CTVNEWS\n\n\n---\nCTV News is Canada's most-watched news organization both locally and nationally, and has a network of national, international, and local news operations.",
          },
          defaultAudioLanguage: "en-GB",
        },
        player: {
          embedHtml:
            '\u003ciframe width="480" height="270" src="//www.youtube.com/embed/KanjNLyegXc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
        },
      },
      videoRecommended: [
        {
          kind: "youtube#video",
          etag: "rVzkqTUj82IjhrilvsPyGd5gQ_0",
          id: "Q8M8bUCWsp8",
          snippet: {
            publishedAt: "2023-01-27T02:00:07Z",
            channelId: "UCVTyTA7-g9nopHeHbeuvpRA",
            title:
              "Ted Cruz’s Hypocrisy and Tucker Carlson’s Conspiracy Theory on Classified Docs: A Closer Look",
            description:
              "Seth takes a closer look at Trump's supporters spreading wild conspiracy theories and claiming Trump had been vindicated after more classified documents were found at the homes of President Biden and former Vice President Mike Pence.\n\nLate Night with Seth Meyers.  Stream now on Peacock: https://bit.ly/3erP2gX\n\nSubscribe to Late Night: http://bit.ly/LateNightSeth\n \nWatch Late Night with Seth Meyers Weeknights 12:35/11:35c on NBC.\n \nGet more Late Night with Seth Meyers: http://www.nbc.com/late-night-with-seth-meyers/\n \nLATE NIGHT ON SOCIAL\nFollow Late Night on Twitter: https://twitter.com/LateNightSeth\nLike Late Night on Facebook: https://www.facebook.com/LateNightSeth\nFollow Late Night Instagram: http://instagram.com/LateNightSeth\nLate Night on Tumblr: http://latenightseth.tumblr.com/\n \nLate Night with Seth Meyers on YouTube features A-list celebrity guests, memorable comedy, and topical monologue jokes.\n \nGET MORE NBC\nLike NBC: http://Facebook.com/NBC\nFollow NBC: http://Twitter.com/NBC\nNBC Tumblr: http://NBCtv.tumblr.com/\nYouTube: http://www.youtube.com/nbc\nNBC Instagram: http://instagram.com/nbc\n \nTed Cruz’s Hypocrisy and Tucker Carlson’s Conspiracy Theory on Classified Docs: A Closer Look - Late Night with Seth Meyers\nhttps://youtu.be/Q8M8bUCWsp8\n\nLate Night with Seth Meyers\nhttp://www.youtube.com/user/latenightseth",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Q8M8bUCWsp8/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/Q8M8bUCWsp8/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/Q8M8bUCWsp8/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/Q8M8bUCWsp8/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/Q8M8bUCWsp8/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Late Night with Seth Meyers",
            tags: [
              "late night",
              "seth meyers",
              "NBC",
              "NBC TV",
              "television",
              "funny",
              "talk show",
              "comedy",
              "humor",
              "stand-up",
              "parody",
              "snl seth meyers",
              "host",
              "promo",
              "seth",
              "meyers",
              "weekend update",
              "news satire",
              "satire",
              "Ted Cruz",
              "Hypocrisy",
              "Tucker Carlson",
              "Conspiracy Theory",
              "Classified Docs",
              "A Closer Look",
              "republicans",
              "democrats",
              "acl",
              "politics",
              "politicians",
              "classified documents scandal",
              "former vice president",
              "pence",
              "former president",
              "trump",
              "president",
              "biden",
              "supporters",
              "left wing",
              "right wing",
            ],
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
              title:
                "Ted Cruz’s Hypocrisy and Tucker Carlson’s Conspiracy Theory on Classified Docs: A Closer Look",
              description:
                "Seth takes a closer look at Trump's supporters spreading wild conspiracy theories and claiming Trump had been vindicated after more classified documents were found at the homes of President Biden and former Vice President Mike Pence.\n\nLate Night with Seth Meyers.  Stream now on Peacock: https://bit.ly/3erP2gX\n\nSubscribe to Late Night: http://bit.ly/LateNightSeth\n \nWatch Late Night with Seth Meyers Weeknights 12:35/11:35c on NBC.\n \nGet more Late Night with Seth Meyers: http://www.nbc.com/late-night-with-seth-meyers/\n \nLATE NIGHT ON SOCIAL\nFollow Late Night on Twitter: https://twitter.com/LateNightSeth\nLike Late Night on Facebook: https://www.facebook.com/LateNightSeth\nFollow Late Night Instagram: http://instagram.com/LateNightSeth\nLate Night on Tumblr: http://latenightseth.tumblr.com/\n \nLate Night with Seth Meyers on YouTube features A-list celebrity guests, memorable comedy, and topical monologue jokes.\n \nGET MORE NBC\nLike NBC: http://Facebook.com/NBC\nFollow NBC: http://Twitter.com/NBC\nNBC Tumblr: http://NBCtv.tumblr.com/\nYouTube: http://www.youtube.com/nbc\nNBC Instagram: http://instagram.com/nbc\n \nTed Cruz’s Hypocrisy and Tucker Carlson’s Conspiracy Theory on Classified Docs: A Closer Look - Late Night with Seth Meyers\nhttps://youtu.be/Q8M8bUCWsp8\n\nLate Night with Seth Meyers\nhttp://www.youtube.com/user/latenightseth",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "iVk4D4fQXwwS5279T7k53RI4bBk",
          id: "ASp4KiVqNDQ",
          snippet: {
            publishedAt: "2023-01-26T02:00:03Z",
            channelId: "UCXIJgqnII2ZOINSWNOGFThA",
            title: "Tucker: This is scary",
            description:
              "Fox News host Tucker Carlson analyzes Jeffrey Epstein's death on 'Tucker Carlson Tonight.' #FoxNews #Tucker\n\nSubscribe to Fox News! https://bit.ly/2vaBUvAS\nWatch more Fox News Video: http://video.foxnews.com\nWatch Fox News Channel Live: http://www.foxnewsgo.com/\n\nFOX News Channel (FNC) is a 24-hour all-encompassing news service delivering breaking news as well as political and business news. The number one network in cable, FNC has been the most-watched television news channel for 18 consecutive years. According to a 2020 Brand Keys Consumer Loyalty Engagement Index report, FOX News is the top brand in the country for morning and evening news coverage. A 2019 Suffolk University poll named FOX News as the most trusted source for television news or commentary, while a 2019 Brand Keys Emotion Engagement Analysis survey found that FOX News was the most trusted cable news brand. A 2017 Gallup/Knight Foundation survey also found that among Americans who could name an objective news source, FOX News was the top-cited outlet. Owned by FOX Corporation, FNC is available in nearly 90 million homes and dominates the cable news landscape, routinely notching the top ten programs in the genre.\n\nWatch full episodes of your favorite shows\nThe Five: http://video.foxnews.com/playlist/longform-the-five/\nSpecial Report with Bret Baier: http://video.foxnews.com/playlist/longform-special-report/\nFox News Primetime: https://video.foxnews.com/playlist/on-air-fox-news-primetime/\nTucker Carlson Tonight: http://video.foxnews.com/playlist/longform-tucker-carlson-tonight/\nHannity:  http://video.foxnews.com/playlist/longform-hannity/\nThe Ingraham Angle: http://video.foxnews.com/playlist/longform-the-ingraham-angle/\nFox News @ Night: http://video.foxnews.com/playlist/longform-fox-news-night/\n\nFollow Fox News on Facebook: https://www.facebook.com/FoxNews/\nFollow Fox News on Twitter: https://twitter.com/FoxNews/\nFollow Fox News on Instagram: https://www.instagram.com/foxnews/",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/ASp4KiVqNDQ/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/ASp4KiVqNDQ/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/ASp4KiVqNDQ/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/ASp4KiVqNDQ/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/ASp4KiVqNDQ/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Fox News",
            tags: [
              "carlson",
              "fnc",
              "fox news",
              "fox news channel",
              "fox news media",
              "fox news network",
              "fox news voices",
              "tucker",
              "tucker carlson",
              "tucker carlson monologue",
              "tucker carlson monologue tonight",
              "tucker carlson tonight",
              "tucker monologue",
              "tucker monologue tonight",
              "tucker reacts",
              "tucker tonight",
              "jeffrey epstein island",
              "jeffrey epstein list leaked",
              "jeffrey epstein island explained",
              "jeffrey epstein case",
              "Epstein didn't kill himself",
              "Jeffrey Epstein death",
              "Epstein death",
            ],
            categoryId: "25",
            liveBroadcastContent: "none",
            localized: {
              title: "Tucker: This is scary",
              description:
                "Fox News host Tucker Carlson analyzes Jeffrey Epstein's death on 'Tucker Carlson Tonight.' #FoxNews #Tucker\n\nSubscribe to Fox News! https://bit.ly/2vaBUvAS\nWatch more Fox News Video: http://video.foxnews.com\nWatch Fox News Channel Live: http://www.foxnewsgo.com/\n\nFOX News Channel (FNC) is a 24-hour all-encompassing news service delivering breaking news as well as political and business news. The number one network in cable, FNC has been the most-watched television news channel for 18 consecutive years. According to a 2020 Brand Keys Consumer Loyalty Engagement Index report, FOX News is the top brand in the country for morning and evening news coverage. A 2019 Suffolk University poll named FOX News as the most trusted source for television news or commentary, while a 2019 Brand Keys Emotion Engagement Analysis survey found that FOX News was the most trusted cable news brand. A 2017 Gallup/Knight Foundation survey also found that among Americans who could name an objective news source, FOX News was the top-cited outlet. Owned by FOX Corporation, FNC is available in nearly 90 million homes and dominates the cable news landscape, routinely notching the top ten programs in the genre.\n\nWatch full episodes of your favorite shows\nThe Five: http://video.foxnews.com/playlist/longform-the-five/\nSpecial Report with Bret Baier: http://video.foxnews.com/playlist/longform-special-report/\nFox News Primetime: https://video.foxnews.com/playlist/on-air-fox-news-primetime/\nTucker Carlson Tonight: http://video.foxnews.com/playlist/longform-tucker-carlson-tonight/\nHannity:  http://video.foxnews.com/playlist/longform-hannity/\nThe Ingraham Angle: http://video.foxnews.com/playlist/longform-the-ingraham-angle/\nFox News @ Night: http://video.foxnews.com/playlist/longform-fox-news-night/\n\nFollow Fox News on Facebook: https://www.facebook.com/FoxNews/\nFollow Fox News on Twitter: https://twitter.com/FoxNews/\nFollow Fox News on Instagram: https://www.instagram.com/foxnews/",
            },
          },
        },
        {
          kind: "youtube#video",
          etag: "lOL5w1J0HNFO8y5ds7E-XvXwBBA",
          id: "X60z-yNVz5U",
          snippet: {
            publishedAt: "2023-01-28T04:33:55Z",
            channelId: "UC8p1vwvWtl6T73JiExfWs1g",
            title:
              "Video of Tyre Nichols' violent arrest released by Memphis officials | full coverage",
            description:
              "(Warning: This video may contain violent and disturbing content. Viewer discretion is advised.)\n\nOfficials in Memphis on Friday released four videos from the violent arrest of Tyre Nichols earlier this month. The 29-year-old Black man died three days after the incident, which Nichols’ family and authorities described as a brutal encounter that stemmed from a traffic stop. The five officers involved have been charged with second-degree murder.\n\n#news #tyrenichols #breakingnews \n\nCBS News Streaming Network is the premier 24/7 anchored streaming news service from CBS News and Stations, available free to everyone with access to the Internet. The CBS News Streaming Network is your destination for breaking news, live events and original reporting locally, nationally and around the globe. Launched in November 2014 as CBSN, the CBS News Streaming Network is available live in 91 countries and on 30 digital platforms and apps, as well as on CBSNews.com and Paramount+.\n\nSubscribe to the CBS News YouTube channel: http://youtube.com/cbsnews\nWatch CBS News: http://cbsn.ws/1PlLpZ7c\nDownload the CBS News app: http://cbsn.ws/1Xb1WC8\nFollow CBS News on Instagram: https://www.instagram.com/cbsnews/\nLike CBS News on Facebook: http://facebook.com/cbsnews\nFollow CBS News on Twitter: http://twitter.com/cbsnews\nSubscribe to our newsletters: http://cbsn.ws/1RqHw7T\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/X60z-yNVz5U/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/X60z-yNVz5U/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/X60z-yNVz5U/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/X60z-yNVz5U/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/X60z-yNVz5U/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "CBS News",
            tags: [
              "cbs news",
              "news",
              "live news",
              "livestream",
              "breaking news",
              "tyre nichols",
              "memphis",
              "police",
              "tennessee",
              "bodycam video",
              "video",
              "memphis police",
              "Nichols",
            ],
            categoryId: "25",
            liveBroadcastContent: "none",
            localized: {
              title:
                "Video of Tyre Nichols' violent arrest released by Memphis officials | full coverage",
              description:
                "(Warning: This video may contain violent and disturbing content. Viewer discretion is advised.)\n\nOfficials in Memphis on Friday released four videos from the violent arrest of Tyre Nichols earlier this month. The 29-year-old Black man died three days after the incident, which Nichols’ family and authorities described as a brutal encounter that stemmed from a traffic stop. The five officers involved have been charged with second-degree murder.\n\n#news #tyrenichols #breakingnews \n\nCBS News Streaming Network is the premier 24/7 anchored streaming news service from CBS News and Stations, available free to everyone with access to the Internet. The CBS News Streaming Network is your destination for breaking news, live events and original reporting locally, nationally and around the globe. Launched in November 2014 as CBSN, the CBS News Streaming Network is available live in 91 countries and on 30 digital platforms and apps, as well as on CBSNews.com and Paramount+.\n\nSubscribe to the CBS News YouTube channel: http://youtube.com/cbsnews\nWatch CBS News: http://cbsn.ws/1PlLpZ7c\nDownload the CBS News app: http://cbsn.ws/1Xb1WC8\nFollow CBS News on Instagram: https://www.instagram.com/cbsnews/\nLike CBS News on Facebook: http://facebook.com/cbsnews\nFollow CBS News on Twitter: http://twitter.com/cbsnews\nSubscribe to our newsletters: http://cbsn.ws/1RqHw7T\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "0HWcAQRSd6WWdO9lepfNwqUJCI4",
          id: "JeI8vdF_-tQ",
          snippet: {
            publishedAt: "2023-01-28T00:48:19Z",
            channelId: "UCeY0bbntWzzVIaj2z3QigXg",
            title:
              "First section of Memphis bodycam release shows Tyre Nichols pulled out of car, tasered",
            description:
              "Tyre Nichols is shown on newly released body camera fleeing from Memphis police as they forcibly remove him from his car and use Tasers.\n\n» Subscribe to NBC News: http://nbcnews.to/SubscribeToNBC\n» Watch more NBC video: http://bit.ly/MoreNBCNews\n\nNBC News Digital is a collection of innovative and powerful news brands that deliver compelling, diverse and engaging news stories. NBC News Digital features NBCNews.com, MSNBC.com, TODAY.com, Nightly News, Meet the Press, Dateline, and the existing apps and digital extensions of these respective properties.  We deliver the best in breaking news, live video coverage, original journalism and segments from your favorite NBC News Shows.\n\nConnect with NBC News Online!\nNBC News App: https://smart.link/5d0cd9df61b80\nBreaking News Alerts: https://link.nbcnews.com/join/5cj/breaking-news-signup?cid=sm_npd_nn_yt_bn-clip_190621\nVisit NBCNews.Com: http://nbcnews.to/ReadNBC\nFind NBC News on Facebook: http://nbcnews.to/LikeNBC\nFollow NBC News on Twitter: http://nbcnews.to/FollowNBC\nGet more of NBC News delivered to your inbox: nbcnews.com/newsletters\n\n#NBCNews #TyreNichols #Police",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/JeI8vdF_-tQ/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/JeI8vdF_-tQ/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/JeI8vdF_-tQ/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/JeI8vdF_-tQ/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/JeI8vdF_-tQ/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "NBC News",
            tags: ["NBC News NOW"],
            categoryId: "25",
            liveBroadcastContent: "none",
            localized: {
              title:
                "First section of Memphis bodycam release shows Tyre Nichols pulled out of car, tasered",
              description:
                "Tyre Nichols is shown on newly released body camera fleeing from Memphis police as they forcibly remove him from his car and use Tasers.\n\n» Subscribe to NBC News: http://nbcnews.to/SubscribeToNBC\n» Watch more NBC video: http://bit.ly/MoreNBCNews\n\nNBC News Digital is a collection of innovative and powerful news brands that deliver compelling, diverse and engaging news stories. NBC News Digital features NBCNews.com, MSNBC.com, TODAY.com, Nightly News, Meet the Press, Dateline, and the existing apps and digital extensions of these respective properties.  We deliver the best in breaking news, live video coverage, original journalism and segments from your favorite NBC News Shows.\n\nConnect with NBC News Online!\nNBC News App: https://smart.link/5d0cd9df61b80\nBreaking News Alerts: https://link.nbcnews.com/join/5cj/breaking-news-signup?cid=sm_npd_nn_yt_bn-clip_190621\nVisit NBCNews.Com: http://nbcnews.to/ReadNBC\nFind NBC News on Facebook: http://nbcnews.to/LikeNBC\nFollow NBC News on Twitter: http://nbcnews.to/FollowNBC\nGet more of NBC News delivered to your inbox: nbcnews.com/newsletters\n\n#NBCNews #TyreNichols #Police",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "CTpjqg-rzS_gfbbJrPqNLFBfoZ8",
          id: "KGSdOg36pWI",
          snippet: {
            publishedAt: "2023-01-23T14:00:09Z",
            channelId: "UCqFzWxSCi39LnW1JKFR3efg",
            title:
              "Weekend Update ft. Aubrey Plaza, Amy Poehler and Bowen Yang - SNL",
            description:
              "Weekend Update hosts Colin Jost and Michael Che cover the week's biggest news before speaking with April Ludgate (Aubrey Plaza), Leslie Knope (Amy Poehler) and Rep. George Santos (Bowen Yang).\n\nSaturday Night Live. Stream now on Peacock: https://pck.tv/3uQxh4q\n\nSubscribe to SNL: https://goo.gl/tUsXwM\nStream Current Full Episodes: http://www.nbc.com/saturday-night-live\n\nWATCH PAST SNL SEASONS\nGoogle Play - http://bit.ly/SNLGooglePlay\niTunes - http://bit.ly/SNLiTunes\n\nSNL ON SOCIAL\nSNL Instagram: http://instagram.com/nbcsnl\nSNL Facebook: https://www.facebook.com/snl\nSNL Twitter: https://twitter.com/nbcsnl\nSNL TikTok: https://www.tiktok.com/@nbcsnl\n\nGET MORE NBC\nLike NBC: http://Facebook.com/NBC\nFollow NBC: http://Twitter.com/NBC\nNBC Tumblr: http://NBCtv.tumblr.com/\nYouTube: http://www.youtube.com/nbc\nNBC Instagram: http://instagram.com/nbc\n\n#SNL #AubreyPlaza #SNL48 #SamSmith",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/KGSdOg36pWI/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/KGSdOg36pWI/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/KGSdOg36pWI/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/KGSdOg36pWI/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Saturday Night Live",
            tags: [
              "SNL01212023",
              "snl",
              "saturday night live",
              "snl 48",
              "saturday night live season 48",
              "weekend update",
              "full weekend update",
              "entire weekend update",
              "weekend update uncut",
              "bowen yang",
              "george santos",
              "pawnee",
              "april ludgate",
              "amy poehler",
              "aubrey plaza",
              "parks and recreation",
              "new york",
              "comedy",
              "sketch",
              "funny",
              "hilarious",
              "late night",
              "host",
              "music",
              "guest",
              "laugh",
              "impersonation",
              "actor",
              "improv",
              "parks and rec",
              "april",
              "legion",
              "fx",
              "lenny",
              "Duncanville",
              "Calls",
              "Cinema Toast",
              "Spin Me Round",
              "Emily the Criminal",
              "White Lotus",
            ],
            categoryId: "23",
            liveBroadcastContent: "none",
            localized: {
              title:
                "Weekend Update ft. Aubrey Plaza, Amy Poehler and Bowen Yang - SNL",
              description:
                "Weekend Update hosts Colin Jost and Michael Che cover the week's biggest news before speaking with April Ludgate (Aubrey Plaza), Leslie Knope (Amy Poehler) and Rep. George Santos (Bowen Yang).\n\nSaturday Night Live. Stream now on Peacock: https://pck.tv/3uQxh4q\n\nSubscribe to SNL: https://goo.gl/tUsXwM\nStream Current Full Episodes: http://www.nbc.com/saturday-night-live\n\nWATCH PAST SNL SEASONS\nGoogle Play - http://bit.ly/SNLGooglePlay\niTunes - http://bit.ly/SNLiTunes\n\nSNL ON SOCIAL\nSNL Instagram: http://instagram.com/nbcsnl\nSNL Facebook: https://www.facebook.com/snl\nSNL Twitter: https://twitter.com/nbcsnl\nSNL TikTok: https://www.tiktok.com/@nbcsnl\n\nGET MORE NBC\nLike NBC: http://Facebook.com/NBC\nFollow NBC: http://Twitter.com/NBC\nNBC Tumblr: http://NBCtv.tumblr.com/\nYouTube: http://www.youtube.com/nbc\nNBC Instagram: http://instagram.com/nbc\n\n#SNL #AubreyPlaza #SNL48 #SamSmith",
            },
            defaultAudioLanguage: "en",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.player {
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  gap: 32px;
}
</style>