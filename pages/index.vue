<template>
  <div>
    <section id="heroSection">
      <CarouselHome :sliderContent="sliderContent" title="movie" />
      <!-- <v-container class="container-fluid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o5F8MOz_IDw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-container> -->
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
      sliderContent: "",
      movies: [],
      videoContent: [
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
        {
          title: "Upcoming Movies",
          movies: [],
        },
        {
          title: "Trending",
          movies: [],
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