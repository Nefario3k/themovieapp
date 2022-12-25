<template>
  <div>
    <v-container>
      <v-row>
        <div class="col-12 col-md-3 col-lg-3 col-xl-3">
          <div class="imgContainer trending">
            <v-img
              v-if="person.profile_path && person.profile_path != null"
              :src="imageLink + imgSize + person.profile_path"
              :alt="person.original_title"
            ></v-img>
            <img v-else src="/images/poster.png" :alt="person.name" />
          </div>
        </div>
        <div class="col-12 col-md-9 col-lg-9 col-xl-9">
          <header style="color: #222" class="nameTitle">
            {{ person.name }}
          </header>
          <header class="miniTitle">Bio</header>
          <p style="color: #222" class="bioContainer">
          <pre 
            style="
              word-break: break-word;
              white-space: pre-wrap;
              text-align: justify
          ">{{ person.biography }}
          </pre>
          </p>
          <header class="miniTitle">Popularly known for</header>
          <VideoTabs title="known for" :movies="searchedResult" />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "search",
  data() {
    return {
      imageLink: process.env.API_BASE_IMAGE,
      person: [],
      searchedResult: [],
      imgSize: "original/",
      searchedValue: "",
      videoTypeOf: ["search", "person"],
      accessKey: process.env.API_BASE_KEY,
      lang: "en-US",
      include_adult: false,
    };
  },
  async mounted() {
    this.searchedValue = this.$route.query.query;
    const page = 1;
    let personSearch = [
      this.videoTypeOf[1],
      this.$route.params.id,
      this.accessKey,
      this.lang,
    ];
    let knownFor = [
      this.videoTypeOf[0],
      this.videoTypeOf[1],
      this.accessKey,
      this.lang,
      this.searchedValue,
      page,
      this.include_adult,
    ];
    await this.$store.dispatch("personSearch", personSearch);
    await this.$store.dispatch("startSearch", knownFor);
    this.person = await this.$getPersonSearch();
    await this.$getSearchResult();
    this.$getSearchResult().forEach((element) => {
      if (element.name == this.$route.query.query) {
        this.searchedResult.push(element);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>