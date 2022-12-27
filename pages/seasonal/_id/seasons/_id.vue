<template>
  <div>
    <!-- Loading -->
    <Loading v-if="!movie || !season" />
    <div v-else>
      <section id="heroSection" style="overflow: hidden" class="relative">
        <div class="absolute" style="height: 100%">
          <v-img
            v-if="movie.backdrop_path"
            :alt="movie.name"
            :gradient="`rgba(31.5, 31.5, 31.5, 0.5), rgba(31.5, 31.5, 31.5, 0.84)`"
            :src="imageLink + imgSize + movie.backdrop_path"
            style="width: 100vw; height: 100%"
          ></v-img>
          <div v-else class="noImage"></div>
        </div>
        <v-container class="containedHero relative">
          <v-row class="contentRow">
            <div class="col-3 poster flex_all_center">
              <img
                v-if="season.poster_path && season.poster_path != null"
                :src="imageLink + imgSize + season.poster_path"
                :alt="movie.name"
              />
              <img v-else src="/images/poster.png" :alt="movie.name" />
            </div>
            <v-row
              class="
                col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9
                content_container
                seasons
              "
            >
              <div class="hero_content" style="gap: 0 !important">
                <div class="content_columns content_ratings">
                  <nuxt-link
                    :to="
                      '/seasonal/' +
                      $route.query.query +
                      '/seasons?query=' +
                      $route.query.query
                    "
                    class="ratings_wrapper"
                    style="opacity: 0.5; text-decoration: none"
                  >
                    <span class="bold">←Back to season list</span>
                  </nuxt-link>
                </div>
                <!-- header  -->
                <div class="content_columns content_header">
                  <header class="content_title">
                    {{ movie.name }} ({{ season.name }})
                  </header>
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
                  v-if="season.overview"
                  style="margin-bottom: 25px"
                  class="content_columns content_ratings"
                >
                  <div class="ratings_wrapper">
                    <span class="bold">Overview: </span>
                    <br />
                    <span>{{ season.overview }}</span>
                  </div>
                </div>
              </div>
            </v-row>
          </v-row>
        </v-container>
      </section>
      <section id="bodyContent" tyle="overflow: hidden">
        <v-container>
          <SeasonsEpisodeList
            v-for="(item, index) in season.episodes"
            :key="index"
            :itemNumber="index"
            :title="movie.name"
            :list="item"
          />
        </v-container>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: "",
      season: "",
      accessKey: process.env.API_BASE_KEY,
      lang: "en-US",
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
    };
  },
  async mounted() {
    // get single video data
    const data = await this.$axios.get(
      `tv/${this.$route.query.query}?api_key=${this.accessKey}&languagae=${this.lang}`
    );

    const seriesData = await this.$axios.get(
      `tv/${this.$route.query.query}/season/${this.$route.params.id}?api_key=${this.accessKey}&languagae=${this.lang}`
    );
    const result = await data;
    this.movie = result.data;
    this.season = seriesData.data;
  },
};
</script>

<style lang="scss" scoped>
#heroSection {
  min-height: 30vh;
  overflow-x: hidden;
  margin-bottom: 25px;
  .containedHero {
    display: flex;
    align-items: center;
    height: 100%;
    .contentRow {
      margin-top: 0;
      .content_container {
        align-items: center;
        margin-top: 0;
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