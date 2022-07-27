<template>
  <section class="case-study-banner-wrapper">
    <v-container>
      <v-row justify="center">
        <v-col>
          <h2>{{ title }}</h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <v-container :class="`banner-container ${background}-bg`">
            <v-row>
              <v-col class="quote-image-container" cols="12" sm="3" xl="2">
                <img :src="quoteImage" al="" class="quote-image"
              /></v-col>
              <v-col cols="12" sm="9" xl="10">
                <v-row>
                  <v-col class="quote-container" cols="12" lg="7" xl="6">
                    <div class="quote-icon"></div>
                    <div class="quote-body">{{ quoteBody }}</div>
                    <img
                      class="logo-img"
                      :src="quoteLogo"
                      :alt="quoteLogoAlt"
                    />
                    <div class="quote-byline">{{ quoteByline }}</div>
                  </v-col>
                  <v-col class="goals-list" cols="12" lg="5" xl="6">
                    <h3 class="mt-0">{{ bulletHeader }}</h3>
                    <ul class="bullet-items">
                      <li
                        v-for="(bullet, index) in bullets"
                        :key="index"
                        class="bullet-item"
                      >
                        {{ bullet }}
                      </li>
                    </ul>
                    <Button
                      className="btnPrimary mr-2 mb-2"
                      :href="ctaUrl"
                      :label="ctaLabel"
                      :icon="ctaIcon"
                    >
                    </Button>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import Button from "@theme/components/Button";

export default {
  components: {
    Button,
  },
  props: {
    title: String,
    quoteBody: String,
    quoteLogo: String,
    quoteLogoAlt: String,
    quoteByline: String,
    quoteImage: String,
    bulletHeader: String,
    bullets: Array,
    ctaUrl: String,
    ctaIcon: String,
    ctaLabel: String,
    background: {
      type: String,
      default: "yellow",
    },
  },
  methods: {},
};
</script>
<style lang="stylus">
.case-study-banner-wrapper {
  h2 {
    text-align: center;
  }

  .quote-icon {
    position: absolute;
    width: 31px;
    height: 26px;
    top: 45px;
    background-image: url('/img/writing/Quote.png');
    background-size: contain;

    @media (min-width: $grid-breakpoints.xl) {
      top: auto;
      left: 35px;
    }
  }

  .banner-container {
    position: relative;
    border-radius: 20px;
    background-image: url('/img/background/background-smudge.png');
    background-size: cover;
    background-position: bottom right;
    background-repeat: no-repeat;
    overflow: hidden;
    margin-bottom: 15px;

    &.yellow-bg {
      background-color: $yellowBgColor;
    }

    .quote-image-container {
      overflow: hidden;
      position: relative;
      height: 300px;

      @media (min-width: $grid-breakpoints.md) {
        height: 500px;
      }

      @media (min-width: $grid-breakpoints.lg) {
        height: auto;
      }

      .quote-image {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        top: 50%;
        transform: translateY(-45%);

        @media (min-width: $grid-breakpoints.lg) {
          width: auto;
          height: 100%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    .quote-container {
      position: relative;
      padding: 70px 30px 30px;

      @media (min-width: $grid-breakpoints.xl) {
        padding: 70px 0 50px 70px;
      }
    }

    .quote-body {
      font-size: 22px;
      line-height: 30px;
      font-weight: 600;
      margin-bottom: 30px;
    }

    .logo-img {
      height: 28px;
    }

    .quote-byline {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .goals-list {
      padding: 0px 30px 30px;

      @media (min-width: $grid-breakpoints.xl) {
        padding: 70px 70px 50px 40px;
      }
    }

    .bullet-items {
      list-style: none;
      padding-left: 15px;
      margin-bottom: 40px;

      @media (min-width: $grid-breakpoints.xl) {
        margin-bottom: 60px;
      }

      .bullet-item {
        position: relative;
        font-size: 16px;
        line-height: 20px;

        &:before {
          content: '';
          display: block;
          position: absolute;
          top: 10px;
          left: -15px;
          width: 5px;
          height: 5px;
          border-radius: 5px;
          background-color: $blueBgColor;
        }
      }
    }
  }
}</style>