<template>
  <div class="flex_down">
    <div class="relative imgContainer" :class="{ trending: !item.overview }">
      <nuxt-link :to="`/movie/${item.id}`">
        <v-img
          lazy-src="/images/broken-image.png"
          v-if="item.poster_path && item.poster_path != null"
          :src="imageLink + imgSize + item.poster_path"
          :alt="item.original_title"
        ></v-img>
        <v-img
          v-else
          src="/images/poster.png"
          :alt="item.original_title"
        ></v-img>
      </nuxt-link>
      <!-- ratings  -->
      <div class="absolute flex_all_center video_ratings">
        {{ $refactorRatings(item.vote_average) }}
      </div>
      <!-- over view  -->
      <div v-if="item.overview" class="absolute overview">
        {{ item.overview.slice(0, 200) }}
        <span v-if="item.overview.length > 200">...</span>
        <nuxt-link :to="`/movie/${item.id}`">Read more</nuxt-link>
      </div>
    </div>
    <div class="listingTag">
      <nuxt-link :to="`/movie/${item.id}`">
        <h3>{{ item.original_title }}</h3>
      </nuxt-link>
      <p>
        {{
          new Date(item.release_date).toLocaleString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        }}
      </p>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
    };
  },
};
</script>