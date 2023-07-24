<template>
  <div>
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      v-if="castData.length"
      class="tabBarContainer"
    >
      <div style="padding-left: 12px" class="tabHeader">
        <header>{{ title }}</header>
        <div class="lineUnder"></div>
      </div>
      <div style="padding-left: 12px" class="tab_wrapper">
        <div class="d-flex justify-content-center">
          <div style="padding-left: 0" class="mt-3 tab__container relative">
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
                v-for="(item, index) in castData.slice(0, 10)"
                :key="index"
                class="listingTab noEffect"
              >
                <!-- person -->
                <template>
                  <ContentPerson :item="item" :noRating="true" />
                </template>
              </div>
              <div v-if="castData.length > 10" class="listingTab">
                <nuxt-link
                  :to="`/${this.castLinkParam}/credit/${this.$route.params.id}`"
                  class="flex_all_center viewMoreContainer"
                >
                  <p>View More</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                        d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                      />
                    </svg>
                  </div>
                </nuxt-link>
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
  props: ["castData", "title", "castLinkParam"],
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