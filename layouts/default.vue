<template>
  <v-app dark :class="{ dark: dark }">
    <SearchBar
      v-if="$route.path.includes('/persons') || $route.path.includes('/search')"
      v-on:showModal="showModal"
    />
    <TopBar v-else v-on:showModal="showModal" />
    <MobileNav ref="mobileNavigation" />
    <v-main app>
      <Nuxt />
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <Footer />
    </v-footer> -->
    <Footer style="overflow: hidden" />
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
      dark: false,
    };
  },
  mounted() {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkModeQuery.matches) {
      this.applyDarkMode();
    } else {
      this.applyLightMode();
    }
    darkModeQuery.addEventListener("change", (event) => {
      if (event.matches) {
        this.applyDarkMode();
      } else {
        this.applyLightMode();
      }
    });
  },
  methods: {
    applyDarkMode() {
      this.dark = true;
    },

    applyLightMode() {
      this.dark = false;
    },
    showModal(type) {
      this.$refs.mobileNavigation.showNavBar();
    },
  },
};
</script>
