<template>
  <div>
    <!-- movies  -->
    <div v-if="searched.media_type == 'movie'" class="mainContainer flex_down">
      <div class="relative imgContainer">
        <v-img
          v-if="
            searched.poster_path != '' &&
            searched.poster_path != null &&
            searched.poster_path
          "
          :src="imageLink + imgSize + searched.poster_path"
          :alt="searched.original_title"
        ></v-img>
        <img v-else src="/images/poster.png" :alt="searched.original_title" />
        <!-- ratings  -->
        <div class="absolute flex_all_center video_ratings">
          {{ refactorRatings(searched.vote_average) }}
        </div>
        <!-- over view  -->
        <div class="absolute overview">
          {{ searched.overview.slice(0, 200) }}
          <span v-if="searched.overview.length > 200">...</span>
          <nuxt-link :to="`/movie/${searched.id}`">Read more</nuxt-link>
        </div>
      </div>
      <div class="listingTag">
        <nuxt-link :to="`/movie/${searched.id}`">
          <h3>{{ searched.original_title }}</h3>
        </nuxt-link>
        <p>
          {{
            new Date(searched.release_date).toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
        </p>
      </div>
    </div>
    <!-- seasons  -->
    <div v-if="searched.media_type == 'tv'" class="mainContainer flex_down">
      <div class="relative imgContainer">
        <v-img
          v-if="searched.poster_path != '' && searched.poster_path != null"
          :src="imageLink + imgSize + searched.poster_path"
          :alt="searched.name"
        ></v-img>
        <img v-else src="/images/poster.png" :alt="searched.name" />
        <!-- ratings  -->
        <div class="absolute flex_all_center video_ratings">
          {{ refactorRatings(searched.vote_average) }}
        </div>
        <!-- over view  -->
        <div class="absolute overview">
          {{ searched.overview.slice(0, 200) }}
          <span v-if="searched.overview.length > 200">...</span>
          <nuxt-link :to="`/seasonal/${searched.id}`">Read more</nuxt-link>
        </div>
      </div>
      <div class="listingTag">
        <nuxt-link :to="`/seasonal/${searched.id}`">
          <h3>{{ searched.name }}</h3>
        </nuxt-link>
        <p>
          {{
            new Date(searched.first_air_date).toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
        </p>
      </div>
    </div>
    <!-- persons  -->
    <div v-if="searched.media_type == 'person'" class="mainContainer flex_down">
      <div class="relative imgContainer trending">
        <v-img
          v-if="searched.profile_path != '' && searched.profile_path != null"
          :src="imageLink + imgSize + searched.profile_path"
          :alt="searched.name"
        ></v-img>
        <img v-else src="/images/poster.png" :alt="searched.name" />
        <!-- ratings  -->
        <div class="absolute flex_all_center video_ratings">
          {{ refactorRatings(searched.popularity) }}
        </div>
      </div>
      <div class="listingTag">
        <nuxt-link :to="`/persons/${searched.id}?query=${searched.name}`">
          <h3>{{ searched.name }}</h3>
        </nuxt-link>
        <p>
          {{ searched.known_for_department }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searched"],
  data() {
    return {
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
    };
  },
  methods: {
    refactorRatings(item) {
      var variable = "";
      variable = Math.ceil(item * 10) / 10;
      return variable;
    },
  },
};
</script>

<style lang="scss" scoped>
.mainContainer {
  text-align: center;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  .imgContainer {
  }
}
</style>