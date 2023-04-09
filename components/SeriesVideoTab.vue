<template>
  <div>
    <div v-if="movies.length" class="tabBarContainer">
      <div class="tabHeader">
        <div class="titleWrapper_cont">
          <header>{{ title }}</header>
          <div class="lineUnder"></div>
        </div>
        <div v-if="title != 'Trending'" class="pagination_container_videos">
          <v-pagination
            @input="$emit('paginate', item)"
            :color="`var(--primary-color)`"
            v-model="pagination.page"
            :length="pagination.total_pages > 15 ? 15 : pagination.total_pages"
            :total-visible="5"
            :aria-current="pagination.page"
          ></v-pagination>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="500" class="tab_wrapper">
        <v-tabs
          v-if="!loading"
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
            class="listingTab personTab"
            style="width: 250px; padding-left: 0"
          >
            <div class="flex_down">
              <div
                class="relative imgContainer"
                :class="{ trending: !item.overview }"
              >
                <nuxt-link :to="`/seasonal/${item.id}`">
                  <img
                    v-if="item.poster_path != '' && item.poster_path != null"
                    :src="imageLink + imgSize + item.poster_path"
                    :alt="item.name"
                  />
                  <img v-else src="/images/poster.png" :alt="item.name" />
                </nuxt-link>
                <!-- ratings  -->
                <div class="absolute flex_all_center video_ratings">
                  {{ refactorRatings(item.vote_average) }}
                </div>
                <!-- over view  -->
                <div v-if="item.overview" class="absolute overview">
                  {{ item.overview.slice(0, 200) }}
                  <span v-if="item.overview.length > 200">...</span>
                  <nuxt-link :to="`/seasonal/${item.id}`">Read more</nuxt-link>
                </div>
              </div>
              <div class="listingTag">
                <nuxt-link :to="`/seasonal/${item.id}`">
                  <h3>{{ item.name }}</h3>
                </nuxt-link>
                <p>
                  {{
                    new Date(item.first_air_date).toLocaleString("en-us", {
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
        <LoadingTwo v-else />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies", "title", "pagination", "item", "trendingParams"],
  data() {
    return {
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
      page: 1,
      loading: false,
    };
  },
  methods: {
    refactorRatings(item) {
      var variable = "";
      variable = Math.ceil(item * 10) / 10;
      return variable;
    },
    changeLoading() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>