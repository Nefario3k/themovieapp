<template>
  <div>
    <section id="heroSection">
      <CarouselMovie title="movie" />
    </section>
    <VideoTabs
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
          title: "Trending Movies",
          movies: [],
        },
        {
          title: "Upcoming Movies",
          movies: [],
        },
        {
          title: "Now Playing",
          movies: [],
        },
        {
          title: "What's Popular",
          movies: [],
        },

        {
          title: "Top Rated",
          movies: [],
        },
      ],
      videoTypeOf: ["movie", "trending"],
      accessKey: process.env.API_BASE_KEY,
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
      lang: "en-US",
      trending_type: "movie",
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
      // get Upcoming movies
      if (!this.$getUpcomingMovies().length) {
        await this.$store.dispatch("upcomingMovies", requetParams);
        this.videoContent[1].movies = await this.$getUpcomingMovies();
      } else {
        this.videoContent[1].movies = await this.$getUpcomingMovies();
      }

      // get Trending
      if (!this.$getTrending().length) {
        await this.$store.dispatch("trending", trendingParams);
        this.videoContent[0].movies = await this.$getTrending();
      } else {
        this.videoContent[0].movies = await this.$getTrending();
      }

      // get now playing
      if (!this.$getNowPlaying().length) {
        await this.$store.dispatch("nowPlaying", requetParams);
        this.videoContent[2].movies = await this.$getNowPlaying();
      } else {
        this.videoContent[2].movies = await this.$getNowPlaying();
      }

      // get popular
      if (!this.$getPopular().length) {
        await this.$store.dispatch("popular", requetParams);
        this.videoContent[3].movies = await this.$getPopular();
      } else {
        this.videoContent[3].movies = await this.$getPopular();
      }

      // get Top rated movies
      if (!this.$getTopRated().length) {
        await this.$store.dispatch("topRated", requetParams);
        this.videoContent[4].movies = await this.$getTopRated();
      } else {
        this.videoContent[4].movies = await this.$getTopRated();
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