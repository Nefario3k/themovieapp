<template>
  <div>
    <div class="tabBarContainer">
      <div class="tabHeader similar">
        <div class="titleWrapper_cont">
          <header>{{ title }}</header>
          <div class="lineUnder"></div>
        </div>
      </div>
      <div class="tab_wrapper">
        <v-tabs
          hide-slider
          color="transparent"
          center-active
          :dark="false"
          :height="`100%`"
        >
          <v-tab
            :ripple="false"
            v-for="(item, index) in movies"
            :key="index"
            class="listingTab similar"
            style="width: 250px; padding-left: 0"
          >
            <div class="flex_down">
              <div
                class="relative imgContainer"
                :class="{ trending: !item.overview }"
              >
                <img
                  v-if="item.poster_path && item.poster_path != null"
                  :src="imageLink + imgSize + item.poster_path"
                  :alt="item.original_title"
                />
                <img
                  v-else
                  src="/images/poster.png"
                  :alt="item.original_title"
                />
                <!-- ratings  -->
                <div class="absolute flex_all_center video_ratings">
                  {{ refactorRatings(item.vote_average) }}
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
          </v-tab>
        </v-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies", "title"],
  data() {
    return {
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
      page: 1,
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
</style>