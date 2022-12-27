<template>
  <div>
    <section id="heroSection">
      <CarouselSeasonal title="seasonal" />
    </section>
    <SeriesVideoTab
      style="overflow: hidden"
      v-for="(item, index) in videoContent"
      :key="index"
      :movies="item.movies"
      :extraMovies="item.extraMovies"
      :title="item.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoContent: [
        {
          title: "What's Popular",
          movies: [],
          extraMovies: [],
        },
        {
          title: "Top Rated",
          movies: [],
          extraMovies: [],
        },
        {
          title: "On The Air",
          movies: [],
          extraMovies: [],
        },
        {
          title: "Trending",
          movies: [],
          extraMovies: [],
        },
      ],
      videoTypeOf: ["tv", "trending"],
      accessKey: process.env.API_BASE_KEY,
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
      lang: "en-US",
      trending_type: "tv",
      trendingFormat: "week",
      currentPage: 1,
    };
  },
  async mounted() {
    let requetParams = {
      media: this.videoTypeOf[0],
      key: this.accessKey,
      lang: this.lang,
      page: this.currentPage,
    };
    let trendingParams = {
      media: this.videoTypeOf[1],
      type: this.trending_type,
      format: this.trendingFormat,
      key: this.accessKey,
    };
    try {
      // get Top rated
      if (!this.$getTopRatedSeries().length) {
        await this.$store.dispatch("topRatedSeries", requetParams);
        this.videoContent[1].movies = await this.$getTopRatedSeries();
      } else {
        this.videoContent[1].movies = await this.$getTopRatedSeries();
      }

      // get popular
      if (!this.$getPopularSeries().length) {
        await this.$store.dispatch("popularSeries", requetParams);
        this.videoContent[0].movies = await this.$getPopularSeries();
      } else {
        this.videoContent[0].movies = await this.$getPopularSeries();
      }

      // get on the air
      if (!this.$getOnTheAir().length) {
        await this.$store.dispatch("onTheAir", requetParams);
        this.videoContent[2].movies = await this.$getOnTheAir();
      } else {
        this.videoContent[2].movies = await this.$getOnTheAir();
      }

      // get Trending
      if (!this.$getTrendingSeries().length) {
        await this.$store.dispatch("trendingSeries", trendingParams);
        this.videoContent[3].movies = await this.$getTrendingSeries();
      } else {
        this.videoContent[3].movies = await this.$getTrendingSeries();
      }

      // get others
      if (!this.$getSeriesOthers().length) {
        await this.$store.dispatch("popularOtherSeries", requetParams);

        await this.$store.dispatch("topRatedOtherSeries", requetParams);

        await this.$store.dispatch("onTheAirOthers", requetParams);

        await this.$getSeriesOthers();

        for (var i = 0; i < this.$getSeriesOthers().length; i++) {
          if (this.videoContent[i].title == this.$getSeriesOthers()[i].title) {
            this.videoContent[i].extraMovies =
              this.$getSeriesOthers()[i].movies;
          }
        }
      } else {
        await this.$getSeriesOthers();
        for (var i = 0; i < this.$getSeriesOthers().length; i++) {
          if (this.videoContent[i].title == this.$getSeriesOthers()[i].title) {
            this.videoContent[i].extraMovies =
              this.$getSeriesOthers()[i].movies;
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
  methods: {},
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