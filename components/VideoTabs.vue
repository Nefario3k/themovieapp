<template>
  <div>
    <div v-if="title != 'Trending' && title != 'known for'">
      <div v-if="movies.length" class="tabBarContainer">
        <div class="tabHeader">
          <div class="titleWrapper_cont">
            <header>{{ title }}</header>
            <div class="lineUnder"></div>
          </div>
          <div v-if="extraMovies.length" class="pagination_container_videos">
            <v-pagination
              :color="`var(--primary-color)`"
              v-model="page"
              :length="3"
            ></v-pagination>
          </div>
        </div>
        <div class="tab_wrapper">
          <v-tabs
            v-if="page == 1"
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
              <!-- <v-img
                    :src="imageLink + imgSize + item.poster_path"
                    :alt="item.original_title"
                    :contain="true"
                    style=""
                  ></v-img> -->
            </v-tab>
          </v-tabs>
          <v-tabs
            v-if="page > 1"
            hide-slider
            color="transparent"
            center-active
            :dark="false"
            :height="`100%`"
          >
            <v-tab
              :ripple="false"
              v-for="(item, index) in extraMovies[page - 2]"
              :key="index"
              class="listingTab personTab"
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
              <!-- <v-img
                    :src="imageLink + imgSize + item.poster_path"
                    :alt="item.original_title"
                    :contain="true"
                    style=""
                  ></v-img> -->
            </v-tab>
          </v-tabs>
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
            v-if="$getTrendingAll().length && !$route.path.includes('/movie')"
            class=""
            style="margin-right: 12px"
          >
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="Btns" v-bind="attrs" v-on="on">
                  <span>{{ currentTrend }}</span>
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
              <v-list>
                <v-list-item
                  class="itemsListing"
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
        <div class="tab_wrapper">
          <!-- all  -->
          <v-tabs
            v-if="currentTrend == items[0].title"
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
              <!-- series  -->
              <div v-if="item.media_type == 'tv'" class="flex_down">
                <div
                  class="relative imgContainer"
                  :class="{ trending: !item.overview }"
                >
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
          <!-- others  -->
          <v-tabs
            v-else
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
              <div v-if="item.media_type == 'movie'" class="flex_down">
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
              <!-- series  -->
              <div v-if="item.media_type == 'tv'" class="flex_down">
                <div
                  class="relative imgContainer"
                  :class="{ trending: !item.overview }"
                >
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
              <!-- <v-img
                    :src="imageLink + imgSize + item.poster_path"
                    :alt="item.original_title"
                    :contain="true"
                    style=""
                  ></v-img> -->
            </v-tab>
          </v-tabs>
        </div>
      </div>
    </div>
    <div v-if="title == 'known for'">
      <div v-if="movies.length" class="tabBarContainer">
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
              v-for="(item, index) in movies[0].known_for"
              :key="index"
              class="listingTab"
              style="width: 250px; padding-left: 0"
            >
              <!-- movies  -->
              <div v-if="item.media_type == 'movie'" class="flex_down">
                <div class="relative imgContainer trending">
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
  props: ["movies", "title", "extraMovies"],
  data() {
    return {
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
      page: 1,
      currentTrend: "All",
      currentTrendView: null,
      items: [
        { title: "All", type: null },
        { title: "Movies", type: 0 },
        { title: "Tv shows", type: 1 },
        { title: "Persons", type: 2 },
      ],
    };
  },
  methods: {
    refactorRatings(item) {
      var variable = "";
      variable = Math.ceil(item * 10) / 10;
      return variable;
    },
    changeTrend(type) {
      this.currentTrend = type.title;
      this.currentTrendView = type.type;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>