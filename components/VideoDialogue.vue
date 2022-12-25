<template>
  <v-dialog
    v-model="showModal"
    :fullscreen="true"
    origin="center center"
    width="460"
    class="imgViewDilogue"
  >
    <v-card
      class="imgCard"
      style="box-shadow: none; margin: 0; border-radius: 0"
    >
      <v-row style="margin: 0 !important">
        <div class="col-12 relative">
          <div class="img_header">
            <p class="goldText">{{ videoData.name }}</p>
          </div>
          <div class="closeNavBtn">
            <svg
              @click="closeModal()"
              width="35"
              height="35"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="white" />
              <path
                d="M32.75 16.2498L16.25 32.7498"
                stroke="#BF9001"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.25 16.2498L32.75 32.7498"
                stroke="#BF9001"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <v-row class="modal_content col-12">
          <v-container class="img_large_container">
            <iframe
              width="560"
              height="315"
              :src="`https://www.youtube.com/embed/${videoData.key}?rel=0&showinfo=0&autohide=1&modestbranding=1`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-container>
        </v-row>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      videoData: {},
    };
  },
  mounted() {},
  methods: {
    showImgModal(data) {
      this.showModal = true;
      this.videoData = data;
    },
    closeModal() {
      this.showModal = false;
      this.videoData = {};
    },
  },
};
</script>

<style lang="scss" scoped>
.img_header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 21px 13px;
  p {
    padding: 0 30px 5px;
    border-bottom: 2px solid #fff;
    color: #fff;
    font-weight: 700;
    font-size: 1.8rem;
    margin: 0;
  }
}
.closeNavBtn {
  position: absolute;
  display: block;
  top: 15%;
  right: 3%;
  padding: 0;
  cursor: pointer;
  svg {
    path {
      stroke: var(--primary-color);
    }
    &:hover {
      circle {
        fill: var(--primary-color);
        transition: all 0.2s linear;
      }
      path {
        stroke: #fff !important;
        transition: all 0.2s linear;
      }
    }
  }
}
.modal_content {
  padding-top: 0;
  margin: 0;
  margin-top: -20px;
  padding-bottom: 0;
  .img_large_container {
    height: 90vh;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 65%;
    margin: auto;
    opacity: 1;
    transition: all 0.5s linear;
    padding-bottom: 0;
  }
}
iframe {
  width: 100%;
  height: 100%;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: none;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--secondary-color);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
  transition: all 0.5s linear;
}
</style>