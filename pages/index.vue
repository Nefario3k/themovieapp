<template>
  <div>
    <section id="heroSection">
      <Carousel :sliderContent="sliderContent" />
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
    try {
      // get now playing
      const nowPlaying = await this.$axios.get(
        `${this.videoTypeOf[0]}/now_playing?api_key=${this.accessKey}&languagae=${this.lang}&page=${this.currentPage}`
      );

      // iteriate through data fields and assign property asap
      nowPlaying.data.results.forEach((movie) => {
        this.videoContent[0].movies.push(movie);
      });

      // get trailers
      let slider = this.videoContent[0].movies.slice(0, 10);
      await this.getTrailers(slider);

      // get popular
      const popular = await this.$axios.get(
        `${this.videoTypeOf[0]}/popular?api_key=${this.accessKey}&languagae=${this.lang}&page=${this.currentPage}`
      );

      // iteriate through data fields and assign property
      popular.data.results.forEach((movie) => {
        this.videoContent[1].movies.push(movie);
      });

      // get Top rated movies
      const top_rated = await this.$axios.get(
        `${this.videoTypeOf[0]}/top_rated?api_key=${this.accessKey}&languagae=${this.lang}&page=${this.currentPage}`
      );

      // iteriate through data fields and assign property
      top_rated.data.results.forEach((movie) => {
        this.videoContent[2].movies.push(movie);
      });

      // get Upcoming movies
      const upcoming = await this.$axios.get(
        `${this.videoTypeOf[0]}/upcoming?api_key=${this.accessKey}&languagae=${this.lang}`
      );

      // iteriate through data fields and assign property
      upcoming.data.results.forEach((movie) => {
        this.videoContent[3].movies.push(movie);
      });

      // get Trending
      const trending = await this.$axios.get(
        `${this.videoTypeOf[1]}/${this.trending_type}/${this.trendingFormat}?api_key=${this.accessKey}`
      );

      // iteriate through data fields and assign property
      trending.data.results.forEach((movie) => {
        this.videoContent[4].movies.push(movie);
      });
      console.log(upcoming);
      // console.log(trending);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async getTrailers(data) {
      try {
        let newData = [];
        let totalInfo = data;
        let indexedItem = [];
        for (var i = 0; i < totalInfo.length; i++) {
          const slob = await this.$axios.get(
            `${this.videoTypeOf[0]}/${totalInfo[i].id}/videos?api_key=${this.accessKey}&languagae=${this.lang}`
          );
          newData.push(slob.data.results);
        }
        newData.forEach((element, index) => {
          element.forEach((videos) => {
            if (videos.type == "Trailer") {
              if (!indexedItem.includes(index)) {
                indexedItem.push(index);
                Object.assign(totalInfo[index], { video_link: videos });
              }
            }
          });
        });
        this.sliderContent = totalInfo;
      } catch (err) {
        console.log(err);
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