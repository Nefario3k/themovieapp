<template>
  <div class="seasonContainer">
    <v-card class="seasonList">
      <div class="listWrapper">
        <img
          v-if="list.still_path && list.still_path != null"
          :src="imageLink + imgSize + list.still_path"
          :alt="`${title} poster`"
        />
        <img
          v-else
          src="/images/poster.png"
          :alt="`${title} has no poster image`"
        />
        <div>
          <header>
            <span>{{ itemNumber + 1 }}.</span> {{ list.name }}
          </header>
          <p>
            {{
              new Date(list.air_date).toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
            |
            <span v-if="list.runtime"
              ><span v-if="list.runtime > 60"
                >1hr {{ list.runtime - 60 }}m</span
              >
              <span v-else>{{ list.runtime }}m </span></span
            >
          </p>
          <span v-if="list.overview">{{ list.overview }}</span>
          <span v-else
            >{{ list.name }} of {{ title }} aired on
            {{
              new Date(list.air_date).toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}.</span
          >
        </div>
      </div>
    </v-card>
    <p v-if="!$route.path.includes('/seasons/')">
      <nuxt-link
        :to="`/seasonal/${$route.params.id}/seasons?query=${$route.params.id}`"
        >View all seasons</nuxt-link
      >
    </p>
    <v-divider v-if="!$route.path.includes('/seasons/')"></v-divider>
  </div>
</template>

<script>
export default {
  props: ["list", "title", "itemNumber"],
  data() {
    return {
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
    };
  },
};
</script>

<style lang="scss" scoped>
.seasonList {
  .listWrapper {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 350px;
      height: 195px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    header {
      span {
        font-size: 1.4rem;
        font-weight: 600;
        margin-right: 12px;
      }
    }
  }
}
</style>