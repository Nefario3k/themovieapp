<template>
  <div>
    <section id="heroSection">
      <Carousel :sliderContent="sliderContent" />
      <v-container class="container-fluid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o5F8MOz_IDw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderContent: "",
      movies: [],
      accessKey: process.env.API_BASE_KEY,
      lang: "en-US",
      currentPage: 1,
    };
  },
  async mounted() {
    try {
      const data = await this.$axios.get(
        `now_playing?api_key=${this.accessKey}&languagae=${this.lang}&page=${this.currentPage}`
      );
      const results = data;
      results.data.results.forEach((movie) => {
        this.movies.push(movie);
      });
      let slider = this.movies.slice(0, 10);
      // this.sliderContent = this.movies.slice(0, 10);
      await this.getTrailers(slider);
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
            `${totalInfo[i].id}/videos?api_key=${this.accessKey}&languagae=${this.lang}`
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