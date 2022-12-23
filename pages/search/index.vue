<template>
  <div>
    <v-container>
      <v-row style="margin-bottom: 25px">
        <div class="col-12">
          <header>
            You searched for:
            <span style="font-style: italic; font-weight: 600">{{
              searchedValue
            }}</span>
          </header>
        </div>
        <div
          v-for="(item, index) in searchedResult"
          :key="index"
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
        >
          <SingleBlock :searched="item" />
        </div>
      </v-row>
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
  layout: "search",
  props: ["searchedTitle"],
  data() {
    return {
      searchedValue: "",
      videoTypeOf: ["search", "multi"],
      accessKey: process.env.API_BASE_KEY,
      lang: "en-US",
      page: 1,
      include_adult: false,
      searchedResult: [],
    };
  },
  async mounted() {
    this.searchedValue = this.$route.query.query;
    const page = this.$route.query.page;
    this.page = Number(page);
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
    await this.$getSearchCount();
  },
  methods: {
    async pageController() {
      let searchParams = [
        this.videoTypeOf[0],
        this.videoTypeOf[1],
        this.accessKey,
        this.lang,
        this.searchedValue,
        this.page,
        this.include_adult,
      ];
      this.searchedResult = [];
      await this.$store.dispatch("startSearch", searchParams);
      this.searchedResult = await this.$getSearchResult();

      this.$router.push({
        path: "/search?query=" + this.searchedValue + "&page=" + this.page,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>