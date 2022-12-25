<template>
  <div>
    <!-- Loading -->
    <Loading v-if="!movie" />
    <div v-else>
      <section id="heroSection" class="relative">
        <div class="absolute" style="height: 100%">
          <v-img
            v-if="movie.backdrop_path"
            :alt="movie.original_title"
            :gradient="`rgba(31.5, 31.5, 31.5, 0.5), rgba(31.5, 31.5, 31.5, 0.84)`"
            :src="imageLink + imgSize + movie.backdrop_path"
            style="width: 100vw; height: 100%"
          ></v-img>
          <div v-else class="noImage"></div>
        </div>
        <v-container class="containedHero relative">
          <v-row class="contentRow">
            <div class="col-4 poster">
              <img
                v-if="movie.poster_path && movie.poster_path != null"
                :src="imageLink + imgSize + movie.poster_path"
                :alt="movie.original_title"
              />
              <img
                v-else
                src="/images/poster.png"
                :alt="movie.original_title"
              />
            </div>
            <v-row
              class="
                col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8
                content_container
              "
            >
              <div class="hero_content">
                <!-- header  -->
                <div class="content_columns content_header">
                  <header class="content_title">
                    {{ movie.original_title }}
                  </header>
                </div>
                <!-- ratings  -->
                <div class="content_columns content_ratings">
                  <div class="ratings_wrapper">
                    <span class="bold">Ratings: </span>

                    <v-progress-circular
                      :color="movie.color"
                      :width="4"
                      :size="50"
                      :rotate="-90"
                      :value="movie.vote_average"
                      ><span class="rating_percent"
                        >{{ movie.vote_average }}<sup>%</sup></span
                      ></v-progress-circular
                    >
                  </div>
                </div>
                <!-- tagline  -->
                <div
                  v-if="movie.tagline"
                  class="content_columns content_ratings"
                >
                  <div
                    class="ratings_wrapper"
                    style="opacity: 0.5; font-style: italic"
                  >
                    <span class="bold">{{ movie.tagline }} </span>
                  </div>
                </div>
                <!-- overview  -->
                <div
                  v-if="movie.overview"
                  class="content_columns content_ratings"
                >
                  <div class="ratings_wrapper">
                    <span class="bold">Overview: </span>
                    <br />
                    <span>{{ movie.overview }}</span>
                  </div>
                </div>
                <!-- action btn  -->
                <div>
                  <v-btn
                    v-if="movie.video_link"
                    @click="showModal(movie.video_link)"
                    class="Btn"
                  >
                    <span>Play Trailer</span>
                  </v-btn>
                </div>
                <!-- directors  -->
                <v-row class="directorRows">
                  <div
                    v-for="(item, index) in vipCrew.slice(0, 6)"
                    :key="index"
                    class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                  >
                    <div class="content_columns content_ratings">
                      <div class="ratings_wrapper">
                        <span class="bold">{{ item.name }}</span>
                        <br />
                        <span>{{ item.job }}</span>
                      </div>
                    </div>
                  </div>
                </v-row>
              </div>
            </v-row>
          </v-row>
        </v-container>
      </section>
      <section id="bodyContent">
        <v-row class="contentrow">
          <div class="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 leftPath">
            <CastTabs
              :castData="castData.cast"
              :title="castData.title"
              :castLinkParam="videoTypeOf[0]"
            />
            <v-container>
              <Reviews />
              <SeriesVideoSlides
                v-if="gotTired != ''"
                :data="gotTired"
                v-on:playVideo="showModal"
              />
            </v-container>
          </div>
          <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 righPath">
            wdwdwd
          </div>
        </v-row>
      </section>
      <VideoDialogue ref="videoModal" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: "",
      vipCrew: [],
      videoTypeOf: ["movie", "trending"],
      accessKey: process.env.API_BASE_KEY,
      lang: "en-US",
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
      castData: {
        title: "Meet The Cast",
        cast: [],
      },
      allVids: {},
      gotTired: "",
    };
  },
  async mounted() {
    let requestParams = {
      media: this.videoTypeOf[0],
      id: this.$route.params.id,
      key: this.accessKey,
      lang: this.lang,
      page: 1,
    };
    // get single video data
    const data = await this.$axios.get(
      `${this.videoTypeOf[0]}/${this.$route.params.id}?api_key=${this.accessKey}&languagae=${this.lang}`
    );
    await this.$store.dispatch("reviews", requestParams);
    await this.$getReviews();

    // set video data
    const result = await data;
    await this.$store.dispatch("allVideos", requestParams);
    await this.$getAllVideos();
    // set video url data
    const vR = await await this.$getAllVideos();
    // iteriate through data and get the first trailer
    let indexedItem = [];
    vR.forEach((videos, index) => {
      if (videos.type == "Trailer") {
        if (!indexedItem.includes(index)) {
          indexedItem.push(index);
          Object.assign(result.data, { video_link: videos });
        }
      }
    });

    //   reset vote average due to it coming back from the api as a long numerical decimal
    result.data.vote_average = Math.ceil(result.data.vote_average * 10);
    if (result.data.vote_average >= 75) {
      Object.assign(result.data, { color: "#43bd84" });
    } else if (
      result.data.vote_average >= 55 &&
      result.data.vote_average <= 74
    ) {
      Object.assign(result.data, { color: "#e6e36b" });
    } else {
      Object.assign(result.data, { color: "#bf1e22" });
    }
    this.movie = result.data;
    // get cast
    const cast = await this.$axios.get(
      `${this.videoTypeOf[0]}/${result.data.id}/credits?api_key=${this.accessKey}&languagae=${this.lang}`
    );

    // get writers, directors and character dev
    let directors = [];
    let characters = [];
    let writers = [];
    cast.data.crew.forEach((element) => {
      if (element.job == "Director") {
        directors.push(element);
      } else if (
        element.department == "Writing" &&
        element.job == "Characters"
      ) {
        characters.push(element);
      } else if (
        element.department == "Writing" &&
        element.job != "Characters"
      ) {
        writers.push(element);
      }
    });
    if (directors.length) {
      directors.forEach((element) => {
        this.vipCrew.push(element);
      });
    }
    if (characters.length) {
      characters.forEach((element) => {
        this.vipCrew.push(element);
      });
    }
    if (writers.length) {
      writers.forEach((element) => {
        this.vipCrew.push(element);
      });
    }
    this.castData.cast = cast.data.cast;
    // arrange videos
    let allTrailer = [];
    let allTeaser = [];
    let allClips = [];
    let allBts = [];
    this.$getAllVideos().forEach((element) => {
      switch (element.type) {
        case "Trailer":
          allTrailer.push(element);
          break;
        case "Behind the Scenes":
          allBts.push(element);
          break;
        case "Clip":
          allClips.push(element);
          break;
        case "Teaser":
          allTeaser.push(element);
          break;
        default:
          break;
      }
    });
    if (allTrailer.length) {
      Object.assign(this.allVids, { trailer: allTrailer });
    }
    if (allTeaser.length) {
      Object.assign(this.allVids, { teaser: allTeaser });
    }
    if (allClips.length) {
      Object.assign(this.allVids, { clips: allClips });
    }
    if (allBts.length) {
      Object.assign(this.allVids, { bts: allBts });
    }
    this.gotTired = this.allVids;
    console.log(this.gotTired);
  },
  methods: {
    showModal(data) {
      this.$refs.videoModal.showImgModal(data);
    },
  },
};
</script>

<style lang="scss" scoped>
#heroSection {
  min-height: 110vh;
  overflow: hidden;
  .containedHero {
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
}
</style>