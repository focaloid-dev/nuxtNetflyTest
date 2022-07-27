<template>
  <section class="review-carousel-wrapper">
    <v-container>
      <v-row v-if="title" justify="center">
        <v-col>
          <h2>{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <!-- Note - this carousel's accessbility settings does not seem to comply with axe's chrome extension -->
    <!-- not sure what WCAG level this issue comes from. -->
    <VueSlickCarousel
      autoplay
      :arrows="false"
      :dots="true"
      :variableWidth="true"
      :centerMode="true"
      centerPadding="20px"
    >
      <div v-for="(review, index) in reviews" :key="index" class="review-slide">
        <div class="slide-content">
          <div class="hs_item">
            <div class="review-quote-body">
              <img :src="review.img" class="imgs" />
            </div>
            <div v-if="review.name" class="review-quote-name">
              {{ review.name }}
            </div>
            <div v-if="review.Designation" class="review-quote-designation">
              {{ review.Designation }}
            </div>
            <div class="review-quote-body" v-html="review.quoteBody"></div>

          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  props: {
    title: String,
    reviews: {
      type: Array,
      validator: (prop) =>
        prop.every((e) =>
          e.quoteBody !== undefined
            ? typeof e.quoteBody === "string"
            : true && e.quoteName !== undefined
            ? typeof e.quoteName === "string"
            : true
        ),
    },
  },
  methods: {},
};
</script>
<style lang="stylus">
.review-carousel-wrapper {
  padding-bottom: 40px;

  h2 {
    text-align: center;
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

  .review-slide {
    padding: 5px 5px;
    height: 100%;

    @media (max-width: 479.999px) {
      width: 375px !important;
      padding: 0px;
    }

    .slide-content {
      width: calc(100vw - 40px);
      height: 500px;
      text-align: left;
      padding: 50px 20px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.09);
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      .hs_item {
        padding: 0px;
        font-family: 'hk_grotesk';
      }

      @media (min-width: $grid-breakpoints.md) {
        width: 50vw;
        padding: 50px 80px;
      }

      .review-quote-body {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 10px;
        max-width: 100%;
      }

      .imgs {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .review-quote-byposition, .review-quote-source {
        font-weight: 200;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}

.review-quote-name {
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  margin-bottom: 10px;
  letter-spacing: 0;
}

.review-quote-designation {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
  letter-spacing: 0;
  color: #4CAF50;
  width: 70%;
}

.mission-slider {
  padding: 65px 0 0px;
  font-family: 'hk_grotesk';

  h2 {
    margin: 0;
    font-size: 44px;
    line-height: 1;
    margin-bottom: 11px;
    font-weight: 500;

    @media (max-width: 767px) {
      font-size: 32px;
    }
  }

  .review-carousel-wrapper {
    .review-slide {
      .slide-content {
        padding: 5px 15px 5px;
        max-width: 470px;

        @media (max-width: 768px) {
          padding: 0px;
          width: 375px;
           align-items: center;
           justify-content: center;
        }

        .review-quote-body {
          margin-bottom: 30px;
          margin-top: 20px;

        }

        .review-quote-byname {
          line-height: 1.5;
          margin-bottom: 0;
          font-weight: 500;
          font-size: 23px;
        }

        .review-quote-source {
          margin-top: 10px;
        }
      }
    }

    .slick-dots {
      display: flex !important;
      justify-content: center;
      align-items: center;
      bottom: -31px;

      li {
        margin-right: 10px;
        border-radius: 50%;
        overflow: hidden;
        width: 10px;
        height: 10px;
        opacity: 0.2;
        background-color: #1E7CAE;

        &:last-child {
          margin-right: 0;
        }
      }

      .slick-active {
        width: 14px;
        height: 14px;
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 749.999px) {
  .hs_item {
    width: 330px;
  }
}
</style>
