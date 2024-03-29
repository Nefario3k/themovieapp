<template>
  <div v-if="$route.query?.query" id="search">
    <v-container>
      <v-row style="margin: 0 0 25px 0">
        <div class="col-12">
          <header class="header">
            You searched for :
            <span style="font-style: italic; font-weight: 600">{{
              this.$route.query.query
            }}</span>
          </header>
        </div>
        <div
          class="col-12"
          v-if="loader"
          style="height: calc(100vh - 270px); overflow: hidden"
        >
          <LoadingTwo />
        </div>
        <template v-if="searchedResult.length && !loader">
          <div
            v-for="(item, index) in searchedResult"
            :key="index"
            class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
          >
            <SingleBlock :searched="item" />
          </div>
        </template>
      </v-row>
      <div
        v-if="!searchedResult.length && !loader"
        class="nocontent flex_all_center"
      >
        <span>Nothing matches your search!!</span>
      </div>
      <div
        v-if="$getSearchCount() > 1 && searchedResult.length"
        class="pagination_container"
      >
        <v-pagination
          @input="pageController()"
          :color="`var(--primary-color)`"
          v-model="page"
          :total-visible="6"
          :length="$getSearchCount()"
        ></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchedValue: "",
      videoTypeOf: ["search", "multi"],
      accessKey: process.env.API_BASE_KEY,
      lang: "en-US",
      page: 1,
      include_adult: false,
      searchedResult: [],
      loader: true,
    };
  },
  mounted() {
    if (!this.$route.query?.query) {
      this.$router.push({
        path: "/",
        replace: true,
      });
      return;
    } else {
      this.search();
    }
  },
  updated() {
    if (this.searchedValue !== this.$route.query.query) {
      this.search();
    }
  },
  methods: {
    pageController() {
      this.search(true);
      this.$router.push({
        path: `/search?query=${this.searchedValue}&page=${this.page}`,
        replace: true,
      });
    },
    async search(pagination) {
      try {
        this.loader = true;
        this.searchedResult = [];
        this.searchedValue = structuredClone(this.$route.query.query);
        if (pagination) {
          var page = this.page;
        } else {
          var page = this.$route.query.page;
          this.page = Number(page);
        }
        let searchParams = [
          this.videoTypeOf[0],
          this.videoTypeOf[1],
          this.accessKey,
          this.lang,
          this.searchedValue,
          page,
          this.include_adult,
        ];
        await this.$store.dispatch("startSearch", searchParams);
        this.searchedResult = await this.$getSearchResult();
        this.loader = false;
        await this.$getSearchCount();
      } catch (err) {
        console.log(err);
      }
    },
  },
  head() {
    return {
      title: this.$route?.query?.query + " - search",
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
.nocontent {
  color: var(--text-color);
  font-weight: 600;
  height: 300px;
  span {
    opacity: 0.5;
    font-style: italic;
  }
}
.header {
  color: var(--text-color);
  font-size: 2rem;
}
</style>