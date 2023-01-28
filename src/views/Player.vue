<template>
  <div class="player">
    <VideoPlayer :video="video" />
    <VideoMobileVideoThumbnail v-if="isMobile" :videos="videoRecommended" /> 
    <VideoRecommended v-else :videos="videoRecommended" />
  </div>
</template>

<script>
import VideoMobileVideoThumbnail from "@/components/VideoMobileVideoThumbnail.vue";
import VideoPlayer from '@/components/VideoPlayer.vue'
import VideoRecommended from '@/components/VideoRecommended.vue'
export default {
  name: "Player",
  components: {VideoPlayer, VideoRecommended, VideoMobileVideoThumbnail},
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
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
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
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 1280px) {
    max-width: 100%;
    margin: 0;
  }
}
</style>