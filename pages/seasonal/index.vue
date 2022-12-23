<template>
  <div>
    <section id="heroSection">
      <CarouselSeasonal title="seasonal" />
    </section>
    <SeriesVideoTab
      v-for="(item, index) in videoContent"
      :key="index"
      :movies="item.movies"
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
        },
        {
          title: "Top Rated",
          movies: [],
        },
        {
          title: "On The Air",
          movies: [],
        },
        {
          title: "Trending",
          movies: [],
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