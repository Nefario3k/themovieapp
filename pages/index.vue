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
      :extraMovies="item.extraMovies"
      :title="item.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderContent: "",
      movies: [],
      videoContent: [
        {
          title: "Now Playing",
          movies: [],
          extraMovies: [],
        },
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
          title: "Upcoming Movies",
          movies: [],
          extraMovies: [],
        },
        {
          title: "Trending",
          movies: [],
          extraMovies: [],
        },
      ],
      videoTypeOf: ["movie", "trending"],
      accessKey: process.env.API_BASE_KEY,
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
      lang: "en-US",
      trending_type: "all",
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
      // get now playing
      if (!this.$getNowPlaying().length) {
        await this.$store.dispatch("nowPlaying", requetParams);
        this.videoContent[0].movies = await this.$getNowPlaying();
      } else {
        this.videoContent[0].movies = await this.$getNowPlaying();
      }

      // get popular
      if (!this.$getPopular().length) {
        await this.$store.dispatch("popular", requetParams);
        this.videoContent[1].movies = await this.$getPopular();
      } else {
        this.videoContent[1].movies = await this.$getPopular();
      }

      // get Top rated movies
      if (!this.$getTopRated().length) {
        await this.$store.dispatch("topRated", requetParams);
        this.videoContent[2].movies = await this.$getTopRated();
      } else {
        this.videoContent[2].movies = await this.$getTopRated();
      }

      // get Upcoming movies
      if (!this.$getUpcoming().length) {
        await this.$store.dispatch("upcoming", requetParams);
        this.videoContent[3].movies = await this.$getUpcoming();
      } else {
        this.videoContent[3].movies = await this.$getUpcoming();
      }

      // get Trending
      if (!this.$getTrending().length) {
        await this.$store.dispatch("trending", trendingParams);
        this.videoContent[4].movies = await this.$getTrending();
      } else {
        this.videoContent[4].movies = await this.$getTrending();
      }

      // get others
      if (!this.$getMovieOthers().length) {
        await this.$store.dispatch("nowPlayingOthers", requetParams);
        await this.$store.dispatch("popularOthers", requetParams);
        await this.$store.dispatch("topRatedOthers", requetParams);
        await this.$store.dispatch("upcomingOthers", requetParams);
        await this.$getMovieOthers();
        for (var i = 0; i < this.$getMovieOthers().length; i++) {
          if (this.videoContent[i].title == this.$getMovieOthers()[i].title) {
            this.videoContent[i].extraMovies = this.$getMovieOthers()[i].movies;
          }
        }
      } else {
        await this.$getMovieOthers();
        for (var i = 0; i < this.$getMovieOthers().length; i++) {
          if (this.videoContent[i].title == this.$getMovieOthers()[i].title) {
            this.videoContent[i].extraMovies = this.$getMovieOthers()[i].movies;
          }
        }
      }
      if (this.$getTrendingAll().length < 3) {
        await this.$store.dispatch("trendingMovies", trendingParams);
        await this.$store.dispatch("trendingSeries", trendingParams);
        await this.$store.dispatch("trendingPersons", trendingParams);
        await this.$getTrendingAll();
      } else {
        await this.$getTrendingAll();
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