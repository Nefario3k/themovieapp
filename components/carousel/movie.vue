<template>
  <div>
    <!-- movies  -->
    <v-carousel
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      :interval="6000"
      cycle="cycle"
      :show-arrows-on-hover="true"
      v-if="title != 'seasonal'"
    >
      <v-carousel-item
        v-for="(item, index) in $getMovieTrailers()"
        :key="index"
        :gradient="`rgba(31.5, 31.5, 31.5, 0.5), rgba(31.5, 31.5, 31.5, 0.84)`"
        :src="imageLink + imgSize + item.backdrop_path"
      >
        <v-container class="contentInfoWrapper">
          <v-row class="contentRow">
            <div class="col-3 poster flex_all_center">
              <img
                v-if="item.poster_path && item.poster_path != null"
                :src="imageLink + imgSize + item.poster_path"
                :alt="item.original_title"
              />
              <img v-else src="/images/poster.png" :alt="item.original_title" />
            </div>
            <v-row
              class="
                col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9
                content_container
              "
            >
              <div class="hero_content">
                <div class="content_columns content_header">
                  <header class="content_title">
                    {{ item.original_title }}
                  </header>
                </div>
                <div class="content_columns content_ratings">
                  <div class="ratings_wrapper">
                    <span class="bold">Ratings: </span>

                    <v-progress-circular
                      :color="item.color"
                      :width="4"
                      :size="50"
                      :rotate="-90"
                      :value="item.vote_average * 10"
                      ><span class="rating_percent"
                        >{{ item.vote_average * 10 }}<sup>%</sup></span
                      ></v-progress-circular
                    >
                  </div>
                </div>
                <div
                  v-if="item.overview"
                  class="content_columns content_ratings"
                >
                  <div class="ratings_wrapper">
                    <span class="bold">Overview: </span>
                    <br />
                    <span>{{ item.overview.slice(0, 250) }}</span
                    ><span v-if="item.overview.length > 250"
                      >...
                      <nuxt-link
                        :to="`/movie/${item.id}`"
                        style="text-decoration: none; color: #fff"
                        >Read more</nuxt-link
                      ></span
                    >
                  </div>
                </div>
                <div>
                  <nuxt-link
                    :to="`/movie/${item.id}`"
                    style="text-decoration: none"
                  >
                    <v-btn class="Btn">
                      <span>View Info</span>
                    </v-btn>
                  </nuxt-link>
                  <v-btn
                    v-if="item.video_link"
                    @click="showModal(item.video_link)"
                    class="Btn trailer"
                  >
                    <span>Play Trailer</span>
                  </v-btn>
                </div>
              </div>
            </v-row>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <VideoDialogue ref="videoModal" />
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      content: "",
      cycle: true,
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
    };
  },
  methods: {
    showModal(data) {
      this.$refs.videoModal.showImgModal(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.contentInfoWrapper {
  display: flex;
  align-items: center;
  height: 100%;
  .contentRow {
    .content_container {
      align-items: center;
      .hero_content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .content_columns {
          padding-top: 0;
          header.content_title {
            font-size: 5.5rem;
            text-shadow: #222;
            font-weight: 600;
            color: #fff;
            // width: 90%;
            line-height: normal;
          }
          .ratings_wrapper {
            span {
              color: #fff;
              font-size: 1.6rem;
              &.bold {
                font-weight: 600;
                font-size: 1.9rem;
                // border-bottom: 2px solid red;
              }
              &.rating_percent {
                font-weight: 600;
                font-size: 1.6rem;
                position: relative;
                top: 1px;
              }
            }
          }
        }
        .Btn {
          background-color: var(--btn-bg-color);
          width: 120px;
          height: 35px;
          border-radius: 4px;
          &.trailer {
            margin-left: 12px;
          }
          span {
            color: #fff;
            font-size: 1.6rem;
            font-weight: 400;
            text-transform: none;
          }
        }
      }
    }

    .poster {
      img {
        width: 100%;
        object-fit: contain;
        filter: drop-shadow(2px 4px 6px #222);
      }
    }
  }
}
</style>