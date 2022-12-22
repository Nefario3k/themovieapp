<template>
  <div>
    <div v-if="castData.length" class="tabBarContainer">
      <div class="tabHeader">
        <header>{{ title }}</header>
        <div class="lineUnder"></div>
      </div>
      <div class="tab_wrapper">
        <v-tabs
          color="transparent"
          center-active
          :dark="false"
          :height="`100%`"
        >
          <v-tab
            :ripple="false"
            v-for="(item, index) in castData"
            :key="index"
            class="listingTab"
            style="width: 250px; padding-left: 0"
          >
            <!-- persons  -->
            <div class="flex_down">
              <div class="relative imgContainer trending">
                <img
                  v-if="item.profile_path == '' || item.profile_path == null"
                  src="/images/poster.png"
                  :alt="item.original_name"
                />
                <img
                  v-else
                  :src="imageLink + imgSize + item.profile_path"
                  :alt="item.original_name"
                />
                <!-- ratings  -->
                <!-- <div class="absolute flex_all_center video_ratings">
                  {{ refactorRatings(item.popularity) }}
                </div> -->
              </div>
              <div class="listingTag">
                <nuxt-link :to="`/celeb/${item.id}`">
                  <h3>{{ item.original_name }}</h3>
                </nuxt-link>
                <p>
                  {{ item.character }}
                </p>
              </div>
            </div>
          </v-tab>
          <v-tab :ripple="false" class="listingTab" style="padding-left: 0">
            <p>View More +</p></v-tab
          >
        </v-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["castData", "title"],
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
</style>