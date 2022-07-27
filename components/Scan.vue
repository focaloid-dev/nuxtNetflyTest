<template>
  <section class="review-carousel-wrapper" v-if="containers">
    <v-container>
      <v-row v-if="title" justify="center">
        <v-col>
          <h2 class="h2margin">{{ title }}</h2>
          <a href="/containers/" class="btn_blues">FIND MORE</a><br />
        </v-col>
      </v-row>
    </v-container>
    <!-- Note - this carousel's accessbility settings does not seem to comply with axe's chrome extension -->
    <!-- not sure what WCAG level this issue comes from. -->
    <div v-if="containers.length > 0">
      <VueSlickCarousel
        ref="carousel"
        autoplay
        :arrows="true"
        :variableWidth="true"
        :centerMode="true"
        :infinite="true"
        centerPadding="20px"
      >
        <div
          v-for="index in containers"
          :key="index.container_name"
          class="review-slide"
        >
          <a :href="'/containers/' + index.container_name">
            <div
              class="slide-contents"
              :style="{ border: '2px solid  #DCDCDC' }"
            >
              <div class="hs_item">
                <div class="hs_item_top">
                  <div class="icon">
                    <img :src="index.logo_path" class="imgs" />
                  </div>
                  <div class="caption">
                    <div class="head_1">
                      <div class="title_1">{{ index.container_name }}</div>
                      <div class="subtitle_1">{{ index.description }}</div>
                    </div>
                    <div class="info_1">
                      <p>
                        <strong>File Size:</strong>
                        {{ (index.file_size / 1000000).toFixed(2) }} MB
                      </p>
                      <p>
                        <strong>Updated:</strong>
                        {{ formatDate(index.last_updated) }}
                      </p>
                      <div class="ico_txt">
                        <div class="icon">
                          <img src="/img/scan/dockerhub.svg" alt="" />
                        </div>
                        <div class="content">{{ index.registry }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hs_btm">
                  <div class="badge_itm_wrap">
                    <div class="badge_itm">
                      <div class="bi_small">Pulls</div>
                      <div class="bi_value">
                        {{ getPullCount(index.pull_count) }}
                      </div>
                    </div>
                  </div>
                  <div class="badge_itm_wrap">
                    <div class="badge_itm">
                      <div class="bi_small">Layers</div>
                      <div class="bi_value">{{ index.layer_count }}</div>
                    </div>
                  </div>
                  <div class="badge_itm_wrap">
                    <div class="badge_itm">
                      <div class="bi_small">Vulnerabilities</div>
                      <div class="bi_value">
                        {{ index.volunerability_count }}
                      </div>
                    </div>
                  </div>
                  <div class="badge_itm_wrap">
                    <div class="badge_itm">
                      <div class="bi_small">Packages</div>
                      <div class="bi_value">{{ index.package_count }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </VueSlickCarousel>
      <div style="text-align: center">
        <v-btn icon @click="showPrevious"
          ><v-icon>mdi-menu-left</v-icon></v-btn
        >
        <v-btn icon @click="showNext"
          ><v-icon>mdi-menu-right</v-icon></v-btn
        >
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { component } from "vue-inline-svg";
import { fetchContainersJson } from "@theme/card/apiService.js";
//import json from "../sample.json";
import moment from "moment";

export default {
  components: { VueSlickCarousel },
  props: {
    title: String,
  },
  data() {
    return {
      containers: [],
      url: "",
    };
  },
  async mounted() {
    //fetchContainers().then((list) => {
    //this.containers = list;
    //console.log(this.containers)
    //})
    this.containers = await fetchContainersJson();
    this.containers = this.containers.filter((obj) => obj.banner_candidate);
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrevious() {
      this.$refs.carousel.prev();
    },
    formatDate(date) {
      return moment(date).fromNow();
    },
    getPullCount(count) {
      if (count < 1000) {
        return count;
      } else if (count < 1000000) {
        return (count / 1000).toFixed(1) + " K";
      } else if (count < 1000000000) {
        return (count / 1000000).toFixed(1) + " M";
      } else {
        return (count / 1000000000).toFixed(1) + " B";
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.review-carousel-wrapper {
  padding-bottom: 40px;
  font-family: hk_grotesk, sans-serif;

  @media (max-width: 479.999px) {
    height: 750px !important;
  }

  h2, h3 {
    text-align: center;
  }

  .h2margin {
    margin-top: 25px;
  }

  .btn_blues {
    display: block;
    background-color: #1F6BF1;
    color: white;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.6px;
    width: 150px;
    padding: 10px;
    margin: auto;
    border-radius: 4px;

    @media (max-width: 479.999px) {
      width: 50% !important;
      padding: 10px;
    }

    align-items: center;
    text-align: center;
  }

  h3.subtitle {
    line-height: 28px;
    font-weight: 400;
    margin: 15px;

    @media (max-width: 479.999px) {
      display: none !important;
    }
  }

  .slick-dots {
    bottom: -40px;

    li {
      margin: 0;

      button:before {
        opacity: 1;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 0px;
        width: 10px;
        height: 10px;
        border-radius: 20px;
        color: $btnSecondaryHoverColor;
        background-color: $btnSecondaryHoverColor;
      }

      &:hover {
        button:before {
          color: $btnPrimaryBgColor;
          background-color: $btnPrimaryBgColor;
        }
      }

      &.slick-active {
        button:before {
          width: 14px;
          height: 14px;
          color: $btnPrimaryBgColor;
          background-color: $btnPrimaryBgColor;
        }
      }
    }
  }

  .slick-track {
    display: flex;
    align-items: stretch;
  }

  .slick-slide {
    height: inherit;

    & > div {
      height: 100%;
    }
  }

  .slick-slider {
    .slick-next::before {
      color: black;
    }

    .slick-prev::before {
      color: black;
    }
  }

  .review-slide {
    padding: 15px 10px;
    height: 100%;

    @media (max-width: 479.999px) {
      width: 375px !important;
    }

    .slide-contents {
      width: 100%;
      height: 375px;
      text-align: left;
      padding: 10px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.09);
      align-items: center;
      justify-content: center;

      @media (max-width: 479.999px) {
        height: 470px !important;
      }

      @media (max-width: 779.999px) {
        height: 600px;
      }

      .hs_item {
        display: flex;
        flex-direction: column;
        border: 3px solid transparent;
        padding: 10px 23px 12px 23px;
        border-radius: 4px;
      }

      .card_item_top .head .left_t {
        margin-bottom: 16px;
        width: 700px;
      }

      .hs_item_top {
        display: flex;
        margin-bottom: 20px;
      }

      .hs_item_top .icon {
        margin-right: 25px;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: left;
      }

      .hs_item_top .caption {
        color: #616161;
        display: block;
      }

      .hs_item_top .head_1 {
        margin-bottom: 26px;
        color: #616161;
        font-family: hk_grotesk, sans-serif;
      }

      .hs_item_top .title_1 {
        font-size: 35px;
        line-height: 36px;
        font-weight: 500;
        margin-bottom: 4px;
        word-wrap: break-word;
      }

      .hs_item_top .subtitle_1 {
        font-size: 18px;
        font-weight: 400;
        word-wrap: break-word;
        width: 400px;
        padding-top: 10px;
      }

      .hs_item_top .info_1 p {
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        margin: 0;
        margin-bottom: 4px;
        color: #616161;
      }

      .hs_item_top .info_1 p:nth-child(2) {
        margin-bottom: 20px;
      }

      .hs_item_top .info_1 p {
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        margin: 0;
        margin-bottom: 4px;
      }

      .hs_item_top .info_1 p:nth-child(2) {
        margin-bottom: 20px;
      }

      .hs_btm {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: 10px;
      }

      .badge_itm_wrap {
        padding-right: 8px;
        padding-left: 8px;
      }

      .badge_itm {
        width: 118px;
        padding: 2px;
        border-radius: 4px;
        border: 1px solid #dcdcdc;
        text-align: center;
      }

      .badge_itm .bi_small {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 2px;
        color: #616161;
      }

      .badge_itm .bi_value {
        font-size: 28px;
        line-height: 38px;
        color: #434444;
      }

      .ico_txt {
        display: flex;
        align-items: center;
      }

      .ico_txt .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 23px;
        height: 23px;
        margin-right: 6px;
      }

      .ico_txt .content {
        width: calc(100% - 28px);
        font-size: 16px;
        font-weight: 400;
        color: #616161;
        margin-left: 4px;
        text-transform: capitalize;
      }

      .imgs {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @media screen and (max-width: 749.999px) {
        .hs_item {
          width: 320px;
        }

        .badge_itm_wrap {
          margin-bottom: 16px;
        }

        .hs_item_top .icon {
          margin-bottom: 10px;
        }

        .hs_item_top .title_1, .card_item_top {
          font-size: 18px;
          line-height: 32px;
          margin-bottom: 6px;
        }

        .hs_item_top .subtitle_1, .card_item_top .subtitle_1 {
          font-size: 18px;
          line-height: 26px;
          max-width: 250px;
        }

        .card_item .card_item_btm {
          display: none;
          margin-top: 30px;
          padding: 0;
        }

        .card_item_top .icon, .hs_item_top .icon {
          width: 50px;
          height: 50px;
          margin-bottom: 10px;
        }
      }

      @media (max-width: 479.999px) {
        .imgs {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .ico_txt {
          display: none;
        }

        .hs_item_top {
          width: 320px;
          margin: 10px;
        }

        .hs_item {
          padding: 10px !important;
          height: 100%;
          justify-content: center;
          width: 360px;
        }

        .hs_item_top .title_1 {
          font-size: 35px;
          line-height: 30px;
          font-weight: 400;
          margin-bottom: 4px;
          width: 250px !important;
        }

        .hs_item_top .subtitle_1 {
          word-wrap: break-word !important;
          width: 250px !important;
          padding-top: 10px;
          line-height: 20px;
        }

        .hs_btm {
          width: 320px;
          margin: 20px;
        }

        .info_1 p {
          font-size: 18px !important;
          line-height: 26px !important;
        }

        .badge_itm {
          width: 131px;
        }

        .badge_itm .bi_small {
          font-size: 16px;
        }

        .badge_itm_wrap:nth-last-child(-n+2) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
