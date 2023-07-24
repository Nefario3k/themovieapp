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
        <div class="d-flex justify-content-center">
          <div v-show="!loading" class="mt-3 tab__container relative">
            <button
              @click="scrollLeftNav"
              :class="{ visibleButton: !showLeftButton }"
              class="testimonal__prev"
            >
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 12L2 6.5L7 1"
                  stroke="#000831"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <button
              @click="scrollRightNav"
              :class="{ visibleButton: !showRightButton }"
              class="testimonal__next"
            >
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6.5L1 12"
                  stroke="#000831"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <div
              @scroll="updateButtonVisibility"
              @mousedown="handleMouseDown"
              ref="scrollContainer"
              :class="{ isDragging: isDragging }"
              class="tab__content scrollSnap01"
            >
              <div
                v-for="(item, index) in movies"
                :key="index"
                class="listingTab personTab"
              >
                <ContentTv :item="item" />
              </div>
            </div>
          </div>
        </div>
        <LoadingTwo v-if="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import tabControl from "~/mixins/tab";
export default {
  mixins: [tabControl],
  props: ["movies", "title", "pagination", "item", "trendingParams"],
  data() {
    return {
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