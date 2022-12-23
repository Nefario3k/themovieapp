<template>
  <v-app dark>
    <DarkBar />
    <v-main app>
      <Nuxt />
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      searchedTitle: "",
    };
  },
};
</script>
