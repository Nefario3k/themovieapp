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
                  <nuxt-link :to="`/movie/${item.id}`">
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
                  </nuxt-link>
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
              <!-- <v-img
                    :src="imageLink + imgSize + item.poster_path"
                    :alt="item.original_title"
                    :contain="true"
                    style=""
                  ></v-img> -->
            </v-tab>
          </v-tabs>
          <LoadingTwo v-else />
        </div>
      </div>
    </div>
    <div v-if="title == 'Trending'">
      <div v-if="movies.length" class="tabBarContainer">
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
                class="listingTab personTab"
                style="width: 250px; padding-left: 0"
              >
                <!-- movies  -->
                <div v-if="item.media_type == 'movie'" class="flex_down">
                  <div
                    class="relative imgContainer"
                    :class="{ trending: !item.overview }"
                  >
                    <nuxt-link :to="`/movie/${item.id}`">
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
                    </nuxt-link>
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
                <!-- series  -->
                <div v-if="item.media_type == 'tv'" class="flex_down">
                  <div
                    class="relative imgContainer"
                    :class="{ trending: !item.overview }"
                  >
                    <nuxt-link :to="`/seasonal/${item.id}`">
                      <img
                        v-if="
                          item.poster_path == '' || item.poster_path == null
                        "
                        src="/images/poster.png"
                        :alt="item.name"
                      />
                      <img
                        v-else
                        :src="imageLink + imgSize + item.poster_path"
                        :alt="item.name"
                      />
                    </nuxt-link>
                    <!-- ratings  -->
                    <div class="absolute flex_all_center video_ratings">
                      {{ refactorRatings(item.vote_average) }}
                    </div>
                    <!-- over view  -->
                    <div v-if="item.overview" class="absolute overview">
                      {{ item.overview.slice(0, 200) }}
                      <span v-if="item.overview.length > 200">...</span>
                      <nuxt-link :to="`/seasonal/${item.id}`"
                        >Read more</nuxt-link
                      >
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
                <!-- persons  -->
                <div v-if="item.media_type == 'person'" class="flex_down">
                  <div class="relative imgContainer trending">
                    <nuxt-link :to="`/persons/${item.id}`">
                      <img
                        v-if="
                          item.profile_path == '' || item.profile_path == null
                        "
                        src="/images/poster.png"
                        :alt="item.original_name"
                      />
                      <img
                        v-else
                        :src="imageLink + imgSize + item.profile_path"
                        :alt="item.original_name"
                      />
                    </nuxt-link>
                    <!-- ratings  -->
                    <div class="absolute flex_all_center video_ratings">
                      {{ refactorRatings(item.popularity) }}
                    </div>
                  </div>
                  <div class="listingTag">
                    <nuxt-link
                      :to="`/persons/${item.id}?query=${item.original_name}`"
                    >
                      <h3>{{ item.original_name }}</h3>
                    </nuxt-link>
                    <p>
                      {{ item.known_for_department }}
                    </p>
                  </div>
                </div>
              </v-tab>
            </v-tabs>
          </template>
          <!-- others  -->
          <template v-else>
            <v-tabs
              v-if="$getTrendingAll()[currentTrendView]"
              hide-slider
              color="transparent"
              center-active
              :dark="false"
              :height="`100%`"
            >
              <v-tab
                :ripple="false"
                v-for="(item, index) in $getTrendingAll()[currentTrendView]"
                :key="index"
                class="listingTab personTab"
                style="width: 250px; padding-left: 0"
              >
                <!-- movies  -->
                <div
                  v-if="
                    item?.media_type == 'movie' &&
                    $getTrendingAll()[currentTrendView]
                  "
                  class="flex_down"
                >
                  <div
                    class="relative imgContainer"
                    :class="{ trending: !item.overview }"
                  >
                    <nuxt-link :to="`/movie/${item.id}`">
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
                    </nuxt-link>
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
                <!-- series  -->
                <div
                  v-if="
                    item?.media_type == 'tv' &&
                    $getTrendingAll()[currentTrendView]
                  "
                  class="flex_down"
                >
                  <div
                    class="relative imgContainer"
                    :class="{ trending: !item.overview }"
                  >
                    <nuxt-link :to="`/seasonal/${item.id}`">
                      <img
                        v-if="
                          item.poster_path == '' || item.poster_path == null
                        "
                        src="/images/poster.png"
                        :alt="item.name"
                      />
                      <img
                        v-else
                        :src="imageLink + imgSize + item.poster_path"
                        :alt="item.name"
                      />
                    </nuxt-link>
                    <!-- ratings  -->
                    <div class="absolute flex_all_center video_ratings">
                      {{ refactorRatings(item.vote_average) }}
                    </div>
                    <!-- over view  -->
                    <div v-if="item.overview" class="absolute overview">
                      {{ item.overview.slice(0, 200) }}
                      <span v-if="item.overview.length > 200">...</span>
                      <nuxt-link :to="`/seasonal/${item.id}`"
                        >Read more</nuxt-link
                      >
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
                <!-- persons  -->
                <div
                  v-if="
                    item?.media_type == 'person' &&
                    $getTrendingAll()[currentTrendView]
                  "
                  class="flex_down"
                >
                  <div class="relative imgContainer trending">
                    <nuxt-link :to="`/persons/${item.id}`">
                      <img
                        v-if="
                          item.profile_path == '' || item.profile_path == null
                        "
                        src="/images/poster.png"
                        :alt="item.original_name"
                      />
                      <img
                        v-else
                        :src="imageLink + imgSize + item.profile_path"
                        :alt="item.original_name"
                      />
                    </nuxt-link>
                    <!-- ratings  -->
                    <div class="absolute flex_all_center video_ratings">
                      {{ refactorRatings(item.popularity) }}
                    </div>
                  </div>
                  <div class="listingTag">
                    <nuxt-link
                      :to="`/persons/${item.id}?query=${item.original_name}`"
                    >
                      <h3>{{ item.original_name }}</h3>
                    </nuxt-link>
                    <p>
                      {{ item.known_for_department }}
                    </p>
                  </div>
                </div>
              </v-tab>
            </v-tabs>
            <LoadingTwo v-else />
          </template>
        </div>
      </div>
    </div>
    <div v-if="title == 'known for'">
      <div v-if="movies.length" class="tabBarContainer">
        <div data-aos="fade-up" data-aos-duration="500" class="tab_wrapper">
          <v-tabs
            hide-slider
            color="transparent"
            center-active
            :dark="false"
            :height="`100%`"
          >
            <v-tab
              :ripple="false"
              v-for="(item, index) in movies[0].known_for"
              :key="index"
              class="listingTab"
              style="width: 250px; padding-left: 0"
            >
              <!-- movies  -->
              <div v-if="item.media_type == 'movie'" class="flex_down">
                <div class="relative imgContainer trending">
                  <nuxt-link :to="`/movie/${item.id}`">
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
                  </nuxt-link>
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
              <!-- series  -->
              <div v-if="item.media_type == 'tv'" class="flex_down">
                <div class="relative imgContainer trending">
                  <nuxt-link :to="`/seasonal/${item.id}`">
                    <img
                      v-if="item.poster_path == '' || item.poster_path == null"
                      src="/images/poster.png"
                      :alt="item.name"
                    />
                    <img
                      v-else
                      :src="imageLink + imgSize + item.poster_path"
                      :alt="item.name"
                    />
                  </nuxt-link>
                  <!-- ratings  -->
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
        </div>
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