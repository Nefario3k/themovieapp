<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      color="var(--nav-color)"
      temporary
      right
    >
      <div class="closeNavBtn">
        <svg
          @click="drawer = false"
          width="35"
          height="35"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="var(--svg-color)" />
          <path
            d="M32.75 16.2498L16.25 32.7498"
            stroke="#fff"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.25 16.2498L32.75 32.7498"
            stroke="#fff"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <nuxt-link to="/">
            <v-list-item class="navList">
              <v-list-item-title class="navListItem">Home</v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/movie">
            <v-list-item class="navList">
              <v-list-item-title class="navListItem">Movies</v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/seasonal">
            <v-list-item class="navList">
              <v-list-item-title class="navListItem"
                >Tv Shows</v-list-item-title
              >
            </v-list-item>
          </nuxt-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    showNavBar() {
      this.drawer = true;
    },
    showModal(type) {
      this.drawer = false;
      this.$emit("showMobileModal", type);
    },
  },
};
</script>

<style scoped>
.closeNavBtn {
  display: flex;
  padding: 21px 21px 13px;
  justify-content: flex-end;
  cursor: pointer;
}

.closeNavBtn svg:hover path {
  stroke: var(--text-color) !important;
}

.navList {
  color: var(--text-color);
}

.navList .navListItem {
  color: var(--text-color) !important;
  font-size: 1.6rem !important;
  font-weight: 400 !important;
  line-height: normal !important;
}

.navList .navListItem:hover {
  color: var(--primary-color) !important;
}

a:has(.navList) {
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
}

a.nuxt-link-exact-active.nuxt-link-active:has(.navList) .navList .navListItem,
a:has(.navList):hover .navList .navListItem {
  color: var(--primary-color) !important;
}

a.nuxt-link-exact-active.nuxt-link-active:has(.navList) .navList svg path,
.navList:hover svg path {
  /* fill: var(--primary-color); */
  stroke: var(--primary-color);
}
</style>