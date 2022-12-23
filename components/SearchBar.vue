<template>
  <v-app-bar
    app
    :color="color"
    :elevate-on-scroll="true"
    :elevation="3"
    height="60"
    :clipped="clipped"
    fixed
    class="topNav"
  >
    <div class="topBarNav d-flex align-items-center" style="color: #fff">
      <div class="leftNav">
        <nav>
          <ul>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/movie">Movies</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/seasonal">Tv Shows</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="rightNav">
        <!-- :action="`/search?query=${searchInput}`" -->
        <form
          class="relative"
          :action="`/search?query=${searchInput}&page=1`"
          method="POST"
        >
          <input required type="text" name="" v-model="searchInput" />
          <div @click="search()" class="absolute search_ico">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
              />
            </svg>
          </div>
          <div
            @click="searchInput = ''"
            v-if="searchInput"
            class="absolute cancel_ico"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      color: "var(--secondary-color)",
      scrollPosition: 0,
      currentScroll: 0,
      searchInput: "",
      videoTypeOf: ["search", "multi"],
      accessKey: process.env.API_BASE_KEY,
      lang: "en-US",
      page: 1,
      include_adult: false,
    };
  },
  mounted() {
    if (this.$route.query.page) {
      this.searchInput = this.$route.query.query;
    }
  },
  methods: {
    async search() {
      this.$router.replace({ path: "/search?query=" + this.searchInput });
      let searchParams = [
        this.videoTypeOf[0],
        this.videoTypeOf[1],
        this.accessKey,
        this.lang,
        this.searchInput,
        this.page,
        this.include_adult,
      ];
      await this.$store.dispatch("startSearch", searchParams);
      await this.$getSearchResult();
    },
  },
};
</script>

<style lang="scss" scoped>
.topBarNav {
  justify-content: space-between;
  width: 100%;
  padding: 0 32px;
  .leftNav {
    display: flex;
    align-items: center;
    gap: 43px;
    nav ul {
      display: flex;
      align-items: center;
      gap: 23px;
    }
    nav ul li {
      list-style-type: none;
      a {
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        font-size: 1.4rem;
        border-color: var(--secondary-color);
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
          transition: all 0.2s linear;
          border-bottom: 2px solid var(--primary-color);
        }
        &.nuxt-link-active.nuxt-link-exact-active {
          border-bottom: 2px solid #fff;
        }
      }
    }
  }
  .rightNav {
    form {
      input {
        width: 100%;
        height: 4rem;
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 0 30px 0 40px;
        outline: none;
        color: #fff;
      }
      .search_ico {
        left: 10px;
        top: 50%;
        transform: translateY(-35%);
        cursor: pointer;
        svg {
          width: 20px;
          fill: #fff;
        }
        &:hover svg {
          fill: var(--primary-color);
          transition: fill 0.2s linear;
        }
      }
      .cancel_ico {
        right: 10px;
        top: 50%;
        transform: translateY(-35%);
        cursor: pointer;
        // transition: display 12.6s ease-in-out;
        svg {
          width: 10px;
          fill: #fff;
        }
        &:hover svg {
          fill: var(--primary-color);
          transition: fill 0.2s linear;
        }
      }
    }
  }
}
</style>