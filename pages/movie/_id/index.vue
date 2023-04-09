<template>
  <div>
    <!-- Loading -->
    <Loading v-show="!movie.hasOwnProperty('adult')" />
    <div v-show="movie.hasOwnProperty('adult')">
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
            <div class="col-3 poster flex_all_center">
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
              class="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 content_container"
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
                <!-- Release date  -->
                <div
                  v-if="movie.release_date"
                  class="content_columns content_ratings"
                >
                  <div class="ratings_wrapper">
                    <span class="bold">Released: </span>
                    <span>{{
                      new Date(movie.release_date).toLocaleString("en-us", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    }}</span>
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
                    class="col-4"
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
              castLinkParam="movie"
            />
            <v-container>
              <Reviews />
              <VideoSlides
                v-if="gotTired != ''"
                :data="gotTired"
                v-on:playVideo="showModal"
              />
            </v-container>
          </div>
          <div
            style="overflow: hidden"
            class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 righPath"
          >
            <div
              data-aos="fade-up-left"
              data-aos-duration="500"
              class="stats_for_nerds"
            >
              <header class="reviewHeader" style="margin-bottom: 0">
                Stats For Nerds
              </header>
              <!-- links  -->
              <div v-if="movie.status">
                <p class="statTitle">Links</p>
                <div
                  style="display: inline-block"
                  v-for="(link, index) in tvLinks"
                  :key="index"
                >
                  <v-tooltip
                    v-if="link.link != null"
                    top
                    :nudge-top="10"
                    color="var(--svg-color)"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <a
                        v-bind="attrs"
                        v-on="on"
                        style="margin-right: 10px"
                        :href="`https://${link.title}.com/${link.link}`"
                        target="_blank"
                      >
                        <!-- facebook -->
                        <svg
                          class="moviePageSVg"
                          v-if="link.title == 'facebook'"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          />
                        </svg>

                        <!-- twitter -->
                        <svg
                          class="moviePageSVg"
                          v-if="link.title == 'twitter'"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>

                        <!-- instagram  -->
                        <svg
                          class="moviePageSVg"
                          v-if="link.title == 'instagram'"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          />
                        </svg>

                        <!-- freebase  -->
                        <svg
                          class="moviePageSVg"
                          v-if="link.title == 'freebase'"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M303.7 96.2c11.1-11.1 115.5-77 139.2-53.2 23.7 23.7-42.1 128.1-53.2 139.2-11.1 11.1-39.4.9-63.1-22.9-23.8-23.7-34.1-52-22.9-63.1zM109.9 68.1C73.6 47.5 22 24.6 5.6 41.1c-16.6 16.6 7.1 69.4 27.9 105.7 18.5-32.2 44.8-59.3 76.4-78.7zM406.7 174c3.3 11.3 2.7 20.7-2.7 26.1-20.3 20.3-87.5-27-109.3-70.1-18-32.3-11.1-53.4 14.9-48.7 5.7-3.6 12.3-7.6 19.6-11.6-29.8-15.5-63.6-24.3-99.5-24.3-119.1 0-215.6 96.5-215.6 215.6 0 119 96.5 215.6 215.6 215.6S445.3 380.1 445.3 261c0-38.4-10.1-74.5-27.7-105.8-3.9 7-7.6 13.3-10.9 18.8z"
                          />
                        </svg>
                      </a>
                    </template>
                    <span style="text-transform: capitalize"
                      >Visit {{ link.title }}</span
                    >
                  </v-tooltip>
                </div>
                <v-tooltip :nudge-top="10" top color="var(--svg-color)">
                  <template v-slot:activator="{ on, attrs }">
                    <a
                      v-bind="attrs"
                      v-on="on"
                      style="margin-right: 10px"
                      :href="movie.homepage"
                      target="_blank"
                    >
                      <svg
                        class="moviePageSVg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                          d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                        />
                      </svg>
                    </a>
                  </template>
                  <span>Visit homepage</span>
                </v-tooltip>
              </div>
              <!-- budget  -->
              <div v-if="movie.budget">
                <p class="statTitle">Budget</p>
                <span class="statSub" style="color: var(--primary-color)">
                  {{ formatter(movie.budget) }}</span
                >
              </div>
              <!-- revenue  -->
              <div v-if="movie.revenue">
                <p class="statTitle">Revenue</p>
                <span class="statSub" style="color: var(--primary-color)">
                  {{ formatter(movie.revenue) }}</span
                >
              </div>
              <!-- runtime  -->
              <div v-if="movie.runtime">
                <p class="statTitle">Average Runtime</p>
                <span v-if="movie.runtime > 60" class="statSub">
                  <span
                    >{{ CheckRuntime(movie.runtime).hr }}hr
                    {{ CheckRuntime(movie.runtime).min }}m</span
                  >
                </span>
                <span v-else class="statSub"> {{ movie.runtime }}m </span>
              </div>
              <!-- status  -->
              <div v-if="movie.status">
                <p class="statTitle">Status</p>
                <span class="statSub" style="color: var(--primary-color)">
                  {{ movie.status }}</span
                >
              </div>
              <!-- lang  -->
              <div v-if="movie.original_language">
                <p class="statTitle">Original Language</p>
                <span class="statSub">
                  {{ language(movie.original_language) }}</span
                >
              </div>
              <!-- genre  -->
              <div v-if="movie?.genres?.length">
                <p class="statTitle">Genre</p>
                <v-chip
                  v-for="(item, index) in movie.genres"
                  :key="index"
                  draggable
                  style="margin-right: 10px; margin-top: 10px"
                  color="cyan"
                  label
                  text-color="white"
                >
                  {{ item.name }}
                </v-chip>
              </div>
              <!-- production  -->
              <div v-if="movie?.production_companies?.length">
                <p
                  v-if="movie.production_companies[0].logo_path"
                  class="statTitle"
                >
                  Production
                </p>
                <v-row class="productionrow">
                  <div
                    v-for="(item, index) in movie.production_companies"
                    :key="index"
                    class="col-6"
                  >
                    <div v-if="item.logo_path && item.logo_path != null">
                      <div class="production">
                        <img
                          :title="item.name"
                          v-if="item.logo_path && item.logo_path != null"
                          :src="imageLink + imgSize + item.logo_path"
                          :alt="item.name"
                        />
                      </div>
                    </div>
                  </div>
                </v-row>
              </div>
            </div>
          </div>
        </v-row>
        <RecommendMovies
          data-aos="fade-up"
          data-aos-duration="500"
          style="overflow: hidden"
          v-if="recommended.length"
          :movies="recommended"
          title="Recommended"
        />
        <SimilarMovies
          data-aos="fade-up"
          data-aos-duration="500"
          style="overflow: hidden"
          v-show="similarMovies.data.length"
          :movies="similarMovies.data"
          :pagination="similarMovies.pagination"
          @paginate="getSimilarMovies"
          title="Similar Series"
          ref="similarTab"
        />
      </section>
      <VideoDialogue ref="videoModal" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {},
      vipCrew: [],
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
      castData: {
        title: "Meet The Cast",
        cast: [],
      },
      allVids: {},
      gotTired: "",
      similarMovies: {
        data: [],
        pagination: {
          page: 1,
          total_pages: 1,
        },
      },
      recommended: [],
      tvLinks: [],
      requestParams: {
        media: "movie",
        id: this.$route.params.id,
        key: process.env.API_BASE_KEY,
        lang: "en-US",
        page: 1,
      },
    };
  },
  async mounted() {
    // get reviews
    this.$store.dispatch("reviews", this.requestParams);
    // get trailer
    this.getAllMovieVideo();
    // get video external links
    this.getExternalLinks();
    // get recommended
    this.getRecommended();
    // get similar videos
    this.getSimilarMovies();
    // await single video data
    await this.getMovieData();
    // get cast
    this.getCast();
  },
  methods: {
    showModal(data) {
      this.$refs.videoModal.showImgModal(data);
    },
    CheckRuntime(num) {
      var value = num;
      var hr = 0;
      for (var i = 60; i < value; hr++) {
        value = value - i;
      }
      return {
        hr: hr,
        min: value,
      };
    },
    formatter(price) {
      let format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return format.format(price);
    },
    language(lang) {
      const languageNames = new Intl.DisplayNames(["en"], {
        type: "language",
      });
      return languageNames.of(lang);
    },
    async getMovieData() {
      try {
        await this.$axios
          .get(
            `${this.requestParams.media}/${this.requestParams.id}?api_key=${this.requestParams.key}&languagae=${this.requestParams.lang}`
          )
          .then((res) => {
            Object.assign(this.movie, res.data);
            //   reset vote average due to it coming back from the api as a long numerical decimal
            this.movie.vote_average = Math.ceil(this.movie.vote_average * 10);
            if (this.movie.vote_average >= 75) {
              Object.assign(this.movie, { color: "#43bd84" });
            } else if (
              this.movie.vote_average >= 55 &&
              this.movie.vote_average <= 74
            ) {
              Object.assign(this.movie, { color: "#e6e36b" });
            } else {
              Object.assign(this.movie, { color: "#bf1e22" });
            }
          });
      } catch (err) {
        console.log(err);
      }
    },
    async getAllMovieVideo() {
      try {
        await this.$store.dispatch("allVideos", this.requestParams);
        // set video url data
        // iteriate through data and get the first trailer
        let indexedItem = [];
        let allTrailer = [];
        let allTeaser = [];
        let allClips = [];
        let allBts = [];
        this.$getAllVideos().forEach((videos, index) => {
          if (videos.type == "Trailer") {
            if (!indexedItem.includes(index)) {
              indexedItem.push(index);
              Object.assign(this.movie, { video_link: videos });
            }
          }
          switch (videos.type) {
            case "Trailer":
              allTrailer.push(videos);
              break;
            case "Behind the Scenes":
              allBts.push(videos);
              break;
            case "Clip":
              allClips.push(videos);
              break;
            case "Teaser":
              allTeaser.push(videos);
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
      } catch (err) {
        console.log(err);
      }
    },
    async getExternalLinks() {
      try {
        await this.$axios
          .get(
            `${this.requestParams.media}/${this.requestParams.id}/external_ids?api_key=${this.requestParams.key}&languagae=${this.requestParams.lang}`
          )
          .then((res) => {
            let socials = [
              {
                title: "facebook",
                link: res.data.facebook_id,
              },
              {
                title: "twitter",
                link: res.data.twitter_id,
              },
              {
                title: "instagram",
                link: res.data.instagram_id,
              },
            ];
            this.tvLinks = socials;
          });
      } catch (err) {
        console.log(err);
      }
    },
    async getCast() {
      try {
        await this.$axios
          .get(
            `${this.requestParams.media}/${this.movie.id}/credits?api_key=${this.requestParams.key}&languagae=${this.requestParams.lang}`
          )
          .then((res) => {
            // get creators and character dev
            let directors = [];
            let characters = [];
            let writers = [];
            res.data.crew.forEach((element) => {
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
            this.castData.cast = res.data.cast;
          });
      } catch (err) {
        console.log(err);
      }
    },
    async getRecommended() {
      try {
        await this.$axios
          .get(
            `${this.requestParams.media}/${this.requestParams.id}/recommendations?api_key=${this.requestParams.key}&languagae=${this.requestParams.lang}&page=1`
          )
          .then((res) => {
            this.recommended = res.data.results;
          });
      } catch (err) {
        console.log(err);
      }
    },
    async getSimilarMovies(type) {
      try {
        if (type) {
          this.requestParams.page = this.similarMovies.pagination.page;
          this.$refs.similarTab.changeLoadingTrue();
        }
        await this.$axios
          .get(
            `${this.requestParams.media}/${this.requestParams.id}/similar?api_key=${this.requestParams.key}&languagae=${this.requestParams.lang}&page=${this.requestParams.page}`
          )
          .then((res) => {
            this.similarMovies.data = res.data.results;
            this.similarMovies.pagination = {
              page: res.data.page,
              total_pages: res.data.total_pages,
            };
            this.$refs.similarTab.changeLoadingFalse();
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
  head() {
    return {
      title:
        this.movie.original_title +
        " - Latest Streaming Movies And series info",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Get all the latest streaming movies and series in theaters and online",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "movies, streaming, stream, tv series",
        },
      ],
    };
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
    height: 100vh;
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
.reviewHeader {
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 25px;
  font-weight: 600;
}
</style>