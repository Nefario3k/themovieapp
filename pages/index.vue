<template>
  <div class="nothingLoaded" v-if="!videoContent[0].movies.length">
    <Loading />
  </div>
  <div v-else>
    <section id="heroSection">
      <CarouselHome :sliderContent="sliderContent" title="movie" />
    </section>
    <VideoTabs
      style="overflow: hidden"
      v-for="(item, index) in videoContent"
      :key="index"
      :movies="item.movies"
      :title="item.title"
      :item="index"
      :pagination="item.pagination"
      @paginate="paginate"
      :trendingParams="trendingParams"
      ref="videotab"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderContent: "",
      loading: false,
      videoContent: [
        {
          title: "Now Playing",
          movies: [],
          pagination: {
            page: 1,
            total_pages: 1,
          },
        },
        {
          title: "What's Popular",
          movies: [],
          pagination: {
            page: 1,
            total_pages: 1,
          },
        },
        {
          title: "Top Rated",
          movies: [],
          pagination: {
            page: 1,
            total_pages: 1,
          },
        },
        {
          title: "Upcoming Movies",
          movies: [],
          pagination: {
            page: 1,
            total_pages: 1,
          },
        },
        {
          title: "Trending",
          movies: [],
          pagination: {
            page: 1,
            total_pages: 1,
          },
        },
      ],
      requetParams: {
        media: "movie",
        key: process.env.API_BASE_KEY,
        lang: "en-US",
        page: 1,
      },
      trendingParams: {
        media: "trending",
        key: process.env.API_BASE_KEY,
        format: "week",
        type: "all",
      },
    };
  },
  mounted() {
    this.getNowPlaying();
    this.getPopular();
    this.getTopRated();
    this.getUpcoming();
    this.getTrending(this.trendingParams);
  },
  methods: {
    async getNowPlaying(page) {
      try {
        let requetParams = structuredClone(this.requetParams);
        if (page) {
          this.$refs.videotab[0].changeLoading();
          requetParams.page = this.videoContent[0].pagination.page;
          await this.$store.dispatch("nowPlaying", requetParams);
          this.videoContent[0].movies = this.$getNowPlaying().results;
          this.videoContent[0].pagination.page = this.$getNowPlaying().page;
          this.videoContent[0].pagination.total_pages =
            this.$getNowPlaying().total_pages;
          this.$refs.videotab[0].changeLoading();
        } else {
          // get now playing
          if (!Object.keys(this.$getNowPlaying()).length) {
            await this.$store.dispatch("nowPlaying", requetParams);
            this.videoContent[0].movies = this.$getNowPlaying().results;
            this.videoContent[0].pagination.page = this.$getNowPlaying().page;
            this.videoContent[0].pagination.total_pages =
              this.$getNowPlaying().total_pages;
          } else {
            this.videoContent[0].movies = this.$getNowPlaying().results;
            this.videoContent[0].pagination.page = this.$getNowPlaying().page;
            this.videoContent[0].pagination.total_pages =
              this.$getNowPlaying().total_pages;
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getPopular(page) {
      try {
        let requetParams = structuredClone(this.requetParams);
        if (!page) {
          // get popular
          if (!Object.keys(this.$getPopular()).length) {
            await this.$store.dispatch("popular", requetParams);
            this.videoContent[1].movies = this.$getPopular().results;
            this.videoContent[1].pagination.page = this.$getPopular().page;
            this.videoContent[1].pagination.total_pages =
              this.$getPopular().total_pages;
          } else {
            this.videoContent[1].movies = this.$getPopular().results;
            this.videoContent[1].pagination.page = this.$getPopular().page;
            this.videoContent[1].pagination.total_pages =
              this.$getPopular().total_pages;
          }
        } else {
          this.$refs.videotab[1].changeLoading();
          requetParams.page = this.videoContent[1].pagination.page;
          await this.$store.dispatch("popular", requetParams);
          this.videoContent[1].movies = this.$getPopular().results;
          this.videoContent[1].pagination.page = this.$getPopular().page;
          this.videoContent[1].pagination.total_pages =
            this.$getPopular().total_pages;
          this.$refs.videotab[1].changeLoading();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getTopRated(page) {
      try {
        let requetParams = structuredClone(this.requetParams);
        if (!page) {
          // get popular
          if (!Object.keys(this.$getTopRated()).length) {
            await this.$store.dispatch("topRated", requetParams);
            this.videoContent[2].movies = this.$getTopRated().results;
            this.videoContent[2].pagination.page = this.$getTopRated().page;
            this.videoContent[2].pagination.total_pages =
              this.$getTopRated().total_pages;
          } else {
            this.videoContent[2].movies = this.$getTopRated().results;
            this.videoContent[2].pagination.page = this.$getTopRated().page;
            this.videoContent[2].pagination.total_pages =
              this.$getTopRated().total_pages;
          }
        } else {
          this.$refs.videotab[2].changeLoading();
          requetParams.page = this.videoContent[2].pagination.page;
          await this.$store.dispatch("topRated", requetParams);
          this.videoContent[2].movies = this.$getTopRated().results;
          this.videoContent[2].pagination.page = this.$getTopRated().page;
          this.videoContent[2].pagination.total_pages =
            this.$getTopRated().total_pages;
          this.$refs.videotab[2].changeLoading();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getUpcoming(page) {
      try {
        let requetParams = structuredClone(this.requetParams);
        if (!page) {
          // get popular
          if (!Object.keys(this.$getUpcoming()).length) {
            await this.$store.dispatch("upcoming", requetParams);
            this.videoContent[3].movies = this.$getUpcoming().results;
            this.videoContent[3].pagination.page = this.$getUpcoming().page;
            this.videoContent[3].pagination.total_pages =
              this.$getUpcoming().total_pages;
          } else {
            this.videoContent[3].movies = this.$getUpcoming().results;
            this.videoContent[3].pagination.page = this.$getUpcoming().page;
            this.videoContent[3].pagination.total_pages =
              this.$getUpcoming().total_pages;
          }
        } else {
          this.$refs.videotab[3].changeLoading();
          requetParams.page = this.videoContent[3].pagination.page;
          await this.$store.dispatch("upcoming", requetParams);
          this.videoContent[3].movies = this.$getUpcoming().results;
          this.videoContent[3].pagination.page = this.$getUpcoming().page;
          this.videoContent[3].pagination.total_pages =
            this.$getUpcoming().total_pages;
          this.$refs.videotab[3].changeLoading();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getTrending(trendingParams) {
      try {
        // get Trending
        if (!this.$getTrending().length) {
          await this.$store.dispatch("trending", trendingParams);
          this.videoContent[4].movies = await this.$getTrending();
        } else {
          this.videoContent[4].movies = await this.$getTrending();
        }
      } catch (err) {
        console.log(err);
      }
    },
    paginate(type) {
      switch (type) {
        case 0:
          this.getNowPlaying(true);
          break;
        case 1:
          this.getPopular(true);
          break;
        case 2:
          this.getTopRated(true);
          break;
        case 3:
          this.getUpcoming(true);
          break;

        default:
          break;
      }
    },
  },
  head() {
    return {
      title: "Movie App - Latest Streaming Movies And series info",
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
  // min-height: 100vh;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  //   url("/images/movieHero.jpg");
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: top center;
  margin-top: -60px;
}
</style>