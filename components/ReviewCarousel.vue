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
          <div class="review-quote-body" v-html="review.quoteBody"></div>
          <div v-if="review.quoteByName" class="review-quote-byname" v-html="review.quoteByName">
            {{ review.quoteByName }}
          </div>
          <div v-if="review.quoteByPosition" class="review-quote-byposition">
            {{ review.quoteByPosition }}
          </div>
          <div v-if="review.quoteSource" class="review-quote-source">
            {{ review.quoteSource }}
          </div>
          <div v-if="review.Designation" class="review-quote-byname">
            {{ review.Designation }}
          </div>
          <div v-if="review.board" class="review-quote-source">
            {{ review.board }}
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
        prop.every(
          (e) => (
            e.quoteBody !== undefined ? typeof e.quoteBody === "string" : true &&
            e.quoteName !== undefined ? typeof e.quoteName === "string" : true
          )
        ),
    },
  },
  methods: {},
};
</script>
<style lang="stylus" scoped>
.review-carousel-wrapper {
  padding-bottom: 40px;
   @media (max-width: 479.999px){
      height: 650px !important;
    }
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
    padding: 15px 10px;
    height: 100%;

    .slide-content {
      width: calc(100vw - 40px);
      height: 225px;
      text-align: center;
      padding: 50px 20px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.09);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 24px ;


        
       @media (max-width: 479.999px){
        align-items: center;
        justify-content: center;
        height: 295px ;    }

       
      @media (min-width: $grid-breakpoints.md) {
        width: 50vw;
        padding: 50px 80px;
         align-items: center;
        justify-content: center;
        height: 275px !important;

      }
      
        

      .review-quote-body {
        font-weight: 400 !important;
        font-size: 24px !important;
        line-height: 34px !important;
        margin-bottom: 10px !important;
        @media (max-width: 799.999px){
                  font-size: 16px !important;
                  width:400px;
 
         }
      }

      .review-quote-byname {
        font-weight: 700;
        font-size: 18px;
        line-height: 34px;
        margin-bottom: 10px;
        letter-spacing: 0;
      }

      .review-quote-byposition, .review-quote-source {
        font-weight: 200;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}


.mission-slider{
  padding: 65px 0 0px;
  font-family: "hk_grotesk";
  h2{
    margin: 0;
    font-size: 44px;
    line-height: 1;
    margin-bottom: 11px;
    font-weight: 500;
    @media (max-width: 767px){
      font-size: 32px;
    }
  }
    .review-carousel-wrapper {
            .review-slide{
                  .slide-content{
                    padding: 44px 80px 40px;
                    max-width: 669px;
                    @media (max-width: 768px){
                    padding: 25px 40px;

                    }
                    .review-quote-body{
                      margin-bottom: 30px;
                    }
                  .review-quote-byname{
                    line-height: 1.5;
                    margin-bottom: 0;
                    font-weight: 500;
                    font-size: 23px;
                  }
                   .review-quote-source{
                    margin-top: 10px;
                  }
            }
        }
        .slick-dots{
          display: flex !important;
          justify-content: center;
          align-items: center;
          bottom: -31px;
            li{
                margin-right: 10px;
                border-radius: 50%;
                overflow: hidden;
                width: 10px;
                height: 10px;
                opacity: 0.2;
                background-color: #1E7CAE;
                &:last-child{
                  margin-right: 0;
                }
            }
            .slick-active{
              width: 14px;
                height: 14px;
                opacity: 1;
            }
          }
    }
}
</style>
