<template>
  <div class="flex_down">
    <div class="relative imgContainer" :class="{ trending: !item.overview }">
      <nuxt-link :to="`/persons/${item.id}`">
        <v-img
          lazy-src="/images/broken-image.png"
          v-if="item.profile_path && item.profile_path != null"
          :src="imageLink + imgSize + item.profile_path"
          :alt="item.original_name"
        ></v-img>
        <v-img
          v-else
          src="/images/poster.png"
          :alt="item.original_name"
        ></v-img>
      </nuxt-link>
      <!-- ratings  -->
      <div v-if="!noRating" class="absolute flex_all_center video_ratings">
        {{ $refactorRatings(item.popularity) }}
      </div>
    </div>
    <div class="listingTag">
      <nuxt-link :to="`/persons/${item.id}?query=${item.original_name}`">
        <h3>{{ item.original_name }}</h3>
      </nuxt-link>
      <p>
        {{ item.known_for_department }}
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
    noRating: {
      type: Boolean,
      default: false,
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