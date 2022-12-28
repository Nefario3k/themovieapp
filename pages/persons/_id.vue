<template>
  <div>
    <v-container v-if="Object.keys(person).length">
      <v-row style="margin: 0">
        <div class="col-12 col-md-3 col-lg-3 col-xl-3">
          <div class="imgContainer trending persons">
            <v-img
            style="border-radius: 16px"
              v-if="person.profile_path && person.profile_path != null"
              :src="imageLink + imgSize + person.profile_path"
              :alt="person.original_title"
            ></v-img>
            <img v-else src="/images/poster.png" :alt="person.name" />
          </div>
        </div>
        <div class="col-12 col-md-9 col-lg-9 col-xl-9">
          <header class="nameTitle">
            {{ person.name }}
          </header>
          <header v-if="person.biography" class="miniTitle">Bio</header>
          <p v-if="person.biography" class="bioContainer">
          <pre 
            style="
              word-break: break-word;
              white-space: pre-wrap;
              text-align: justify
          ">{{ person.biography }}
          </pre>
          </p>
          <header v-if="searchedResult.length" class="miniTitle">Popularly known for</header>
          <VideoTabs title="known for" :movies="searchedResult" />
        </div>
      </v-row>
    </v-container>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
export default {
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
  head() {
    return {
      title: this.person.name + " - Celebrity",
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
header.nameTitle {
  font-weight: 600;
  color: var(--text-color);
  font-size: 3.5rem;
  margin-bottom: 10px;
}
header.miniTitle {
  font-weight: 600;
  color: var(--text-color);
  font-size: 2rem;
  margin-bottom: 10px;
}
p.bioContainer {
  margin-bottom: 0 !important;
  color: var(--text-color);
  font-weight: 400;
  font-size: 1.6rem;
  pre {
    line-height: normal;
  }
}
</style>