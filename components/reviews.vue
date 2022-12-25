<template>
  <div>
    <header class="reviewHeader">Reviews</header>
    <div v-if="$getReviews().length">
    <v-card v-for="(item, index) in $getReviews().slice(0, 7)" :key="index" class="review_card">
      <v-list>
          <v-list-item class="reviewList">
            <v-list-item-avatar class="avatars">
              <!-- no image  -->
              <div
                v-if="
                  !item.author_details.avatar_path ||
                  item.author_details.avatar_path == null
                "
                class="flex_all_center colored"
              >
                {{item.author.slice(0, 1).toUpperCase()}}
              </div>

              <!-- no external url  -->
              <v-img
              :contain="true"
                v-if="
                !check(item.author_details.avatar_path) && 
                  item.author_details.avatar_path
                "
                :src="imageLink + imgSize + item.author_details.avatar_path"
              ></v-img>

              <!-- external url  -->
              <v-img
                :contain="true"
                v-if="
                 check(item.author_details.avatar_path) &&
                  item.author_details.avatar_path
                "
                :src="item.author_details.avatar_path.slice(1)"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <div class="titledReview">
                <v-list-item-title v-if="item.url">
                  <a :href="item.url" target="_blank">{{ item.author }}</a> review
                </v-list-item-title>
                <v-list-item-title v-else>
                 {{ item.author }} review
                </v-list-item-title>
              </div>
              <v-list-item-subtitle>
                Review created by 
                <a v-if="item.url" :href="item.url" target="_blank">
                    <strong >
                        {{ item.author }}
                    </strong>
                </a>
                <strong v-else >{{ item.author }}</strong>
                 on
                {{
                  new Date(item.created_at).toLocaleString("en-us", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                }}
              </v-list-item-subtitle>
              <v-divider class="divider"></v-divider>
              <blockquote class="content">
                <p :class="{show: showedReview.includes(index)}">
                    <pre
                    v-if="!showedReview.includes(index)"
                    style="
                        word-break: break-word;
                        white-space: pre-wrap;
                    ">{{ item.content.slice(0, 601) }}<span @click="showFullReview(index)" class="showMore" v-if="item.content.length > 601">... <span>Read more</span></span>
                    </pre>
                    <pre
                    v-else
                    style="
                        word-break: break-word;
                        white-space: pre-wrap;
                    ">{{ item.content }}<br/><span @click="showLessReview(index)" class="showMore"><span>Show less</span></span>
                    </pre>
                </p>
              </blockquote>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-card>
    </div>
     <div v-else class="flex_all_center noMedia">Not yet reviewed!</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    imageLink: process.env.API_BASE_IMAGE,
    imgSize: "original/",
    showedReview: [],
  }),
  methods: {
    check(element) {
      if (element != null) {
        return element.includes("http");
      }
    },
    showFullReview(index) {
      this.showedReview.push(index);
    },
    showLessReview(index) {
      this.showedReview.splice(this.showedReview.indexOf(index), 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.reviewHeader {
  font-size: 2.2rem;
  color: var(--text-color);
  margin-bottom: 10px;
  font-weight: 600;
}
.review_card {
  margin-bottom: 25px;
  .reviewList {
    align-items: flex-start !important;
    .avatars {
      height: 70px !important;
      width: 70px !important;
    }
    .titledReview {
      display: flex;
      .v-list-item__title {
        font-size: 2rem;
        font-weight: 600;
        color: var(--text-color);
        a {
          text-decoration: none;
          color: var(--text-color);
          &:hover {
            color: var(--primary-color);
            transition: color 0.3s linear;
          }
        }
      }
    }
    .v-list-item__subtitle {
      font-size: 1.3rem;
      a {
        text-decoration: none;
        color: inherit;
        &:hover {
          color: var(--primary-color);
          transition: color 0.3s linear;
        }
      }
    }
    .colored {
      background: var(--text-color);
      color: #fff;
      font-weight: 600;
      width: 100%;
      height: 100%;
    }
    .content {
      transition: all 4s linear;
      p {
        font-size: 1.4rem;
        font-weight: 400;
        color: var(--text-color);
        line-height: 20px;
        min-height: 3.5rem;
        margin: 0;
        width: 95%;
        text-align: justify;
        &.show {
          transition: height 0.3s linear;
        }
        .showMore {
          cursor: pointer;
          span {
            font-weight: 500;
          }
          &:hover {
            span {
              color: var(--primary-color);
              text-decoration: underline var(--primary-color);
              transition: color 0.3s linear;
            }
          }
        }
      }
    }
    .divider {
      margin-top: 5px;
      margin-bottom: 15px;
    }
  }
}
.noMedia {
  height: 125px;
  color: var(--text-color);
}
</style>