<template>
  <div class="seasonContainer">
    <v-card class="seasonList">
      <div class="listWrapper">
        <nuxt-link
          :to="`/seasonal/${$route.params.id}/seasons/${list.season_number}?query=${$route.params.id}`"
          v-if="!$route.path.includes('/seasons/')"
        >
          <img
            v-if="list.poster_path && list.poster_path != null"
            :src="imageLink + imgSize + list.poster_path"
            :alt="`${title} poster`"
          />
          <img
            v-else
            src="/images/poster.png"
            :alt="`${title} has no poster image`"
          />
        </nuxt-link>
        <nuxt-link
          :to="`/seasonal/${$route.query.query}/seasons/${list.season_number}?query=${$route.query.query}`"
          v-else
        >
          <img
            v-if="list.poster_path && list.poster_path != null"
            :src="imageLink + imgSize + list.poster_path"
            :alt="`${title} poster`"
          />
          <img
            v-else
            src="/images/poster.png"
            :alt="`${title} has no poster image`"
          />
        </nuxt-link>
        <div>
          <header>
            <nuxt-link
              v-if="!$route.path.includes('/seasons/')"
              :to="`/seasonal/${$route.params.id}/seasons/${list.season_number}?query=${$route.params.id}`"
              >{{ list.name }}</nuxt-link
            >
            <!-- else  -->
            <nuxt-link
              v-else
              :to="`/seasonal/${$route.query.query}/seasons/${list.season_number}?query=${$route.query.query}`"
              >{{ list.name }}</nuxt-link
            >
          </header>
          <p>
            {{
              new Date(list.air_date).toLocaleString("en-us", {
                year: "numeric",
              })
            }}
            | {{ list.episode_count }} Episode<span
              v-if="list.episode_count > 1"
              >s</span
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
    <p v-if="!$route.path.includes('/seasons')">
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
  props: ["list", "title"],
  data() {
    return {
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>