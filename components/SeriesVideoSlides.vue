<template>
  <div>
    <header class="reviewHeader">Media</header>

    <v-card v-if="Object.keys(data).length" class="review_card">
      <v-tabs
        :show-arrows="false"
        v-model="tabs"
        color="var(--primary-color)"
        right
      >
        <v-tab class="allVideoTags" :ripple="false" v-show="data.trailer"
          >Trailers (<span v-if="data.trailer"> {{ data.trailer.length }} </span
          >)</v-tab
        >
        <v-tab class="allVideoTags" :ripple="false" v-show="data.teaser"
          >Teaser (<span v-if="data.teaser"> {{ data.teaser.length }} </span
          >)</v-tab
        >
        <v-tab class="allVideoTags" :ripple="false" v-show="data.clips"
          >Clips (<span v-if="data.clips"> {{ data.clips.length }} </span
          >)</v-tab
        >
        <v-tab class="allVideoTags" :ripple="false" v-show="data.bts"
          >Behind the Scenes (<span v-if="data.bts">
            {{ data.bts.length }} </span
          >)</v-tab
        >
      </v-tabs>
      <!-- trailers  -->
      <div v-if="tabs == 0" class="media_scroller scrollSnap01">
        <div
          @click="$emit('playVideo', video)"
          v-for="(video, index) in data.trailer"
          :key="index"
          class="media_element relative"
        >
          <img
            :src="`https://i3.ytimg.com/vi/${video.key}/maxresdefault.jpg`"
            alt=""
          />
          <div class="play_background absolute">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                id="play"
                d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- teasers  -->
      <div v-if="tabs == 1" class="media_scroller scrollSnap01">
        <div
          @click="$emit('playVideo', video)"
          v-for="(video, index) in data.teaser"
          :key="index"
          class="media_element relative"
        >
          <img
            :src="`https://i3.ytimg.com/vi/${video.key}/maxresdefault.jpg`"
            alt=""
          />
          <div class="play_background absolute">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                id="play"
                d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- clips  -->
      <div v-if="tabs == 2" class="media_scroller scrollSnap01">
        <div
          @click="$emit('playVideo', video)"
          v-for="(video, index) in data.clips"
          :key="index"
          class="media_element relative"
        >
          <img
            :src="`https://i3.ytimg.com/vi/${video.key}/maxresdefault.jpg`"
            alt=""
          />
          <div class="play_background absolute">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                id="play"
                d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div v-if="tabs == 3" class="media_scroller scrollSnap01">
        <div
          @click="$emit('playVideo', video)"
          v-for="(video, index) in data.bts"
          :key="index"
          class="media_element relative"
        >
          <img
            :src="`https://i3.ytimg.com/vi/${video.key}/maxresdefault.jpg`"
            alt=""
          />
          <div class="play_background absolute">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                id="play"
                d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </v-card>
    <div v-else class="flex_all_center noMedia">No available media!</div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      tabs: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.reviewHeader {
  font-size: 2.2rem;
  color: var(--text-color);
  margin-bottom: 10px;
  font-weight: 600;
}
.allVideoTags {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: none;
  color: var(--text-color);
}
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
.theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: var(--text-color);
}

.videoListingTab {
  min-width: 550px !important;
  max-width: 1000px !important;
  height: 350px;
  margin: 15px 0;
  padding: 0;
  overflow: hidden;
  &:first-child {
    border-top-left-radius: 16px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
}
.media_scroller {
  --spacer: 2.4rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 58%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;

  .media_element {
    margin: var(--spacer, 2.4rem) 0 0;
    border-radius: 0;
    background-color: transparent;
    div.play_background {
      width: 67px;
      height: 67px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      &:hover {
        opacity: 0.9;
        transition: opacity 200ms linear;
        svg {
          opacity: 0.7;
          transition: opacity 200ms linear;
        }
      }
      svg {
        fill: #fff;
        width: 40px;
      }
    }
    &:first-child {
      border-top-left-radius: 16px;
      img {
        border-top-left-radius: 16px;
      }
    }
    img {
      inline-size: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      cursor: pointer;
      overflow: hidden;
    }
  }
}

.scrollSnap01 {
  scroll-snap-type: inline mandatory;
  padding-inline: calc(var(--spacer)) !important;
  scroll-padding-inline: var(--spacer, 2.4rem);
  overflow-x: auto;
  overscroll-behavior-inline: contain;
}
.noMedia {
  height: 125px;
  color: var(--text-color);
}
// .media_scroller {
//   display: flex;
//   flex-wrap: wrap;
//   overflow-x: auto;
//   .media_element {
//     width: 750px;
//     height: 350px;
//     img {
//       inline-size: 100%;
//       object-fit: cover;
//       cursor: pointer;
//     }
//     &:first-child {
//       border-top-left-radius: 8px;
//     }
//   }
// }
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  cursor: pointer;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: none;
  // border-radius: 10px;
  // background: rgba(0, 0, 0, 0.7);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--text-color);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
  transition: all 0.5s linear;
}
</style>
