<template>
  <div>
    <div v-if="title != 'Trending' && title != 'known for'">
      <div v-if="movies.length" class="tabBarContainer">
        <div class="tabHeader">
          <div class="titleWrapper_cont">
            <header>{{ title }}</header>
            <div class="lineUnder"></div>
          </div>
          <div
            v-if="title !== 'Trending Movies'"
            class="pagination_container_videos"
          >
            <v-pagination
              @input="$emit('paginate', item)"
              :color="`var(--primary-color)`"
              v-model="pagination.page"
              :length="
                pagination.total_pages > 15 ? 15 : pagination.total_pages
              "
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
                  <ContentMovie :item="item" />
                </div>
              </div>
            </div>
          </div>
          <LoadingTwo v-if="loading" />
        </div>
      </div>
    </div>
    <div v-if="title == 'Trending'">
      <div v-if="movies.length" class="tabBarContainer">
        <!-- header  -->
        <div class="tabHeader">
          <div class="titleWrapper_cont">
            <header>{{ title }}</header>
            <div class="lineUnder"></div>
          </div>
          <div
            v-if="!$route.path.includes('/movie')"
            class=""
            style="margin-right: 12px"
          >
            <v-menu :nudge-bottom="5" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="Btns capital" v-bind="attrs" v-on="on">
                  <span style="text-transform: capitalize">{{
                    currentTrend
                  }}</span>
                  <svg
                    height="20"
                    viewBox="0 0 1792 1792"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                    />
                  </svg>
                </v-btn>
              </template>
              <v-list class="py-0">
                <v-list-item
                  class="itemsListing capital"
                  :class="{ active: item.title == currentTrend }"
                  @click="changeTrend(item)"
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title class="itemsList">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="500" class="tab_wrapper">
          <!-- all  -->
          <template v-if="currentTrend == items[0].title">
            <div class="d-flex justify-content-center">
              <div class="mt-3 tab__container relative">
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
                    <!-- movies  -->
                    <template v-if="item.media_type == 'movie'">
                      <ContentMovie :item="item" />
                    </template>
                    <!-- tv  -->
                    <template v-else-if="item.media_type == 'tv'">
                      <ContentTv :item="item" />
                    </template>
                    <!-- person -->
                    <template v-else>
                      <ContentPerson :item="item" />
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <!-- others  -->
          <template v-else>
            <div
              v-if="$getTrendingAll()[currentTrendView]"
              class="d-flex justify-content-center"
            >
              <div class="mt-3 tab__container relative">
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
                    v-for="(item, index) in $getTrendingAll()[currentTrendView]"
                    :key="index"
                    class="listingTab personTab"
                  >
                    <!-- movies  -->
                    <template v-if="item.media_type == 'movie'">
                      <ContentMovie :item="item" />
                    </template>
                    <!-- tv  -->
                    <template v-else-if="item.media_type == 'tv'">
                      <ContentTv :item="item" />
                    </template>
                    <!-- person -->
                    <template v-else>
                      <ContentPerson :item="item" />
                    </template>
                  </div>
                </div>
              </div>
            </div>
            <LoadingTwo v-else />
          </template>
        </div>
      </div>
    </div>
    <div v-if="title == 'known for'">
      <div v-if="movies.length" class="tabBarContainer">
        <div data-aos="fade-up" data-aos-duration="500" class="tab_wrapper">
          <div class="d-flex">
            <div style="padding: 0" class="mt-3 tab__container relative">
              <div
                @scroll="updateButtonVisibility"
                @mousedown="handleMouseDown"
                ref="scrollContainer"
                :class="{ isDragging: isDragging }"
                class="tab__content scrollSnap01"
              >
                <div
                  v-for="(item, index) in movies[0].known_for"
                  :key="index"
                  class="listingTab noEffect"
                >
                  <!-- movies  -->
                  <template v-if="item.media_type == 'movie'">
                    <ContentMovie :item="item" />
                  </template>
                  <!-- tv  -->
                  <template v-else-if="item.media_type == 'tv'">
                    <ContentTv :item="item" />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      currentTrend: "all",
      currentTrendView: null,
      loading: false,
      items: [
        { title: "all", type: null },
        { title: "movies", type: "movie" },
        { title: "tv shows", type: "tv" },
        { title: "persons", type: "persons" },
      ],
    };
  },
  methods: {
    refactorRatings(item) {
      var variable = "";
      variable = Math.ceil(item * 10) / 10;
      return variable;
    },
    async changeTrend(type) {
      this.currentTrend = type.title;
      this.currentTrendView = type.type;

      if (!this.$getTrendingAll()[this.currentTrendView]) {
        switch (this.currentTrendView) {
          case "movie":
            await this.$store.dispatch("trendingMovies", this.trendingParams);
            break;
          case "tv":
            await this.$store.dispatch("trendingSeries", this.trendingParams);
            break;
          case "persons":
            await this.$store.dispatch("trendingPersons", this.trendingParams);
            break;

          default:
            break;
        }
      }
    },
    changeLoading() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>