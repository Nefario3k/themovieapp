<template>
  <div class="nothingLoaded" v-if="!videoContent[0].movies.length">
    <Loading />
  </div>
  <div v-else>
    <section id="heroSection">
      <CarouselSeasonal title="seasonal" />
    </section>
    <SeriesVideoTab
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
      videoContent: [
        {
          title: "Top Rated",
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
          title: "On The Air",
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
        media: "tv",
        key: process.env.API_BASE_KEY,
        lang: "en-US",
        page: 1,
      },
      trendingParams: {
        media: "trending",
        key: process.env.API_BASE_KEY,
        format: "week",
        type: "tv",
      },
    };
  },
  mounted() {
    this.getTopRatedSeries();
    this.getPopularSeries();
    this.getOnAirSeries();
    this.getTrending();
  },
  methods: {
    async getTopRatedSeries(page) {
      try {
        let requetParams = structuredClone(this.requetParams);
        if (!page) {
          if (!Object.keys(this.$getTopRatedSeries()).length) {
            await this.$store.dispatch("topRatedSeries", requetParams);
            this.videoContent[0].movies = this.$getTopRatedSeries().results;
            this.videoContent[0].pagination.page =
              this.$getTopRatedSeries().page;
            this.videoContent[0].pagination.total_pages =
              this.$getTopRatedSeries().total_pages;
          } else {
            this.videoContent[0].movies = this.$getTopRatedSeries().results;
            this.videoContent[0].pagination.page =
              this.$getTopRatedSeries().page;
            this.videoContent[0].pagination.total_pages =
              this.$getTopRatedSeries().total_pages;
          }
        } else {
          this.$refs.videotab[0].changeLoading();
          requetParams.page = this.videoContent[0].pagination.page;
          await this.$store.dispatch("topRatedSeries", requetParams);
          this.videoContent[0].movies = this.$getTopRatedSeries().results;
          this.videoContent[0].pagination.page = this.$getTopRatedSeries().page;
          this.videoContent[0].pagination.total_pages =
            this.$getTopRatedSeries().total_pages;
          this.$refs.videotab[0].changeLoading();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getPopularSeries(page) {
      try {
        let requetParams = structuredClone(this.requetParams);
        if (!page) {
          if (!Object.keys(this.$getPopularSeries()).length) {
            await this.$store.dispatch("popularSeries", requetParams);
            this.videoContent[1].movies = this.$getPopularSeries().results;
            this.videoContent[1].pagination.page =
              this.$getPopularSeries().page;
            this.videoContent[1].pagination.total_pages =
              this.$getPopularSeries().total_pages;
          } else {
            this.videoContent[1].movies = this.$getPopularSeries().results;
            this.videoContent[1].pagination.page =
              this.$getPopularSeries().page;
            this.videoContent[1].pagination.total_pages =
              this.$getPopularSeries().total_pages;
          }
        } else {
          this.$refs.videotab[1].changeLoading();
          requetParams.page = this.videoContent[1].pagination.page;
          await this.$store.dispatch("popularSeries", requetParams);
          this.videoContent[1].movies = this.$getPopularSeries().results;
          this.videoContent[1].pagination.page = this.$getPopularSeries().page;
          this.videoContent[1].pagination.total_pages =
            this.$getPopularSeries().total_pages;
          this.$refs.videotab[1].changeLoading();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getOnAirSeries(page) {
      try {
        let requetParams = structuredClone(this.requetParams);
        if (!page) {
          if (!Object.keys(this.$getOnTheAir()).length) {
            await this.$store.dispatch("onTheAir", requetParams);
            this.videoContent[2].movies = this.$getOnTheAir().results;
            this.videoContent[2].pagination.page = this.$getOnTheAir().page;
            this.videoContent[2].pagination.total_pages =
              this.$getOnTheAir().total_pages;
          } else {
            this.videoContent[2].movies = this.$getOnTheAir().results;
            this.videoContent[2].pagination.page = this.$getOnTheAir().page;
            this.videoContent[2].pagination.total_pages =
              this.$getOnTheAir().total_pages;
          }
        } else {
          this.$refs.videotab[2].changeLoading();
          requetParams.page = this.videoContent[2].pagination.page;
          await this.$store.dispatch("onTheAir", requetParams);
          this.videoContent[2].movies = this.$getOnTheAir().results;
          this.videoContent[2].pagination.page = this.$getOnTheAir().page;
          this.videoContent[2].pagination.total_pages =
            this.$getOnTheAir().total_pages;
          this.$refs.videotab[2].changeLoading();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getTrending() {
      try {
        if (!this.$getTrendingSeries().length) {
          await this.$store.dispatch("trendingSeries", this.trendingParams);
          this.videoContent[3].movies = this.$getTrendingSeries();
        } else {
          this.videoContent[3].movies = this.$getTrendingSeries();
        }
      } catch (err) {
        console.log(err);
      }
    },
    paginate(type) {
      switch (type) {
        case 0:
          this.getTopRatedSeries(true);
          break;
        case 1:
          this.getPopularSeries(true);
          break;
        case 2:
          this.getOnAirSeries(true);
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