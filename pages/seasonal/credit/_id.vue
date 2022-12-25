<template>
  <div>
    <Loading v-if="!data" />
    <v-container v-else>
      <v-row style="margin-top: 25px">
        <div class="col-12">
          <h3 class="back" onclick="history.back()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              /></svg
            ><span>Go back</span>
          </h3>
        </div>
        <!-- cast  -->
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mainCol cast">
          <h3>
            Cast (<span>{{ cast.length }}</span
            >)
          </h3>
          <div v-for="(item, index) in cast" :key="index" class="cc_content">
            <nuxt-link
              v-if="item.profile_path"
              :to="`/persons/${item.id}?query=${item.original_name}`"
              class="profileImg"
              :style="`background-image: url(${
                imageLink + imgSize + item.profile_path
              })`"
            >
            </nuxt-link>
            <nuxt-link
              v-else
              :to="`/persons/${item.id}?query=${item.original_name}`"
              class="profileImg small"
              style="
                background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg);
              "
            >
            </nuxt-link>
            <div class="flex_down">
              <p>
                <nuxt-link
                  :to="`/persons/${item.id}?query=${item.original_name}`"
                >
                  {{ item.original_name }}
                </nuxt-link>
              </p>
              <span>{{ item.character }}</span>
            </div>
          </div>
        </div>
        <!-- crew  -->
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mainCol crew">
          <h3>
            Crew (<span>{{ crew.length }}</span
            >)
          </h3>
          <div class="crewContainer" v-for="name in crewWork" :key="name">
            <p class="crewTitle">
              {{ name }}
            </p>
            <div v-for="(item, index) in crew" :key="index">
              <div v-if="item.known_for_department == name" class="cc_content">
                <nuxt-link
                  v-if="item.profile_path"
                  :to="`/persons/${item.id}?query=${item.original_name}`"
                  class="profileImg"
                  :style="`background-image: url(${
                    imageLink + imgSize + item.profile_path
                  })`"
                >
                </nuxt-link>
                <nuxt-link
                  v-else
                  :to="`/persons/${item.id}?query=${item.original_name}`"
                  class="profileImg small"
                  style="
                    background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg);
                  "
                >
                </nuxt-link>
                <div class="flex_down">
                  <p>
                    <nuxt-link
                      :to="`/persons/${item.id}?query=${item.original_name}`"
                    >
                      {{ item.original_name }}
                    </nuxt-link>
                  </p>
                  <span>{{ item.job }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "search",
  data() {
    return {
      data: [],
      cast: [],
      crew: [],
      crewWork: [],
      accessKey: process.env.API_BASE_KEY,
      lang: "en-US",
      imageLink: process.env.API_BASE_IMAGE,
      imgSize: "original/",
    };
  },
  async mounted() {
    try {
      // get cast
      const cast = await this.$axios.get(
        `tv/${this.$route.params.id}/credits?api_key=${this.accessKey}&languagae=${this.lang}`
      );
      this.data = cast.data;
      this.cast = this.data.cast;
      this.crew = this.data.crew;
      this.crewWork = [];
      this.crew.forEach((element) => {
        if (!this.crewWork.includes(element.known_for_department)) {
          this.crewWork.push(element.known_for_department);
        }
      });
      this.crewWork = this.crewWork.sort();
    } catch (err) {
      console.log(err.message);
    }
  },
};
</script>

<style lang="scss" scoped>
.mainCol {
  h3 {
    margin-bottom: 15px;
    font-weight: 600;
    color: var(--secondary-color);
    span {
      opacity: 0.5;
    }
  }
  .cc_content {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    a {
      text-decoration: none;
      color: var(--secondary-color);
      &.profileImg {
        border-radius: 8px;
        overflow: hidden;
        height: 120px;
        width: 120px;
        background-position: top center;
        background-size: cover;
        background-color: var(--secondary-color);
        &.small {
          background-size: 75%;
          background-position: center;
        }
        img {
          width: 100%;
          height: 100%;
          //   object-position: top center;
          object-fit: cover;
          border-radius: 8px;
        }
        &:hover {
          img {
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
          }
        }
      }
    }
    p {
      margin: 0;
      font-weight: 600;
      font-size: 1.8rem;
      &:hover a {
        color: var(--primary-color);
        transition: color 0.3s linear;
      }
    }
    span {
      font-size: 1.4rem;
      color: var(--secondary-color);
    }
    .flex_down {
      p {
        margin: 0;
      }
    }
  }
  p.crewTitle {
    font-size: 2rem;
    color: var(--secondary-color);
    font-weight: 600;
  }
}
</style>