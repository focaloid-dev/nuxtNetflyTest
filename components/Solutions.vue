<template>
  <section class="scroll-feature-wrapper">
    <v-container>
      <h2 style="text-align: center; padding-top: 50px">Slim Solutions</h2>
      <div class="solution-wrapper">
        <v-row>
          <v-col cols="12" md="6" lg="6" class="left-content">
            <intersect
              @enter="setActiveContent(3)"
              :threshhold="[0, 0.2]"
              :rootMargin="'-50% 0px'"
            >
              <div class="left-content-block">
                <div class="eyebrow">
                  <!-- Question - is there a `Scale` image available from Narwhal Digital?-->
                  <!-- As of 25Jan22 -> No. -->
                </div>
                <h2>
                  More velocity, <br />
                  <UnderlineAnimation lineImg="/img/underline/Streamline.png"
                    >less risk</UnderlineAnimation
                  >.
                </h2>
                <p>
                  Optimize containers for continuous development, testing, and
                  visibility. Reduce your attack surface. Ship less risky
                  container-based apps to the cloud more frequently.
                </p>
                <Button label="FIND OUT HOW" href="/solutions" />
                <br />

                <div
                  v-if="isMobile"
                  :class="['fade-block', activeContent === 3 ? 'active' : '']"
                >
                  <ImageOverlayAnim
                    :images="[
                      '/img/scan/disco.png',

                      '/img/graphic/Roadmap.png',
                      '/img/scan/solutions.png',
                    ]"
                    :extraAnimations="[null, 'slide-up']"
                    :useExternalTrigger="true"
                    :isActiveExternal="activeContent === 3"
                  />
                </div>
              </div>
            </intersect>
          </v-col>
          <v-col v-if="!isMobile" cols="6" class="right-content">
            <div class="right-content-block-wrapper">
              <div :class="['fade-block', activeContent === 3 ? 'active' : '']">
                <ImageOverlayAnim
                  :images="[
                    '/img/scan/disco.png',

                    '/img/graphic/Roadmap.png',
                    '/img/scan/solutions.png',
                  ]"
                  :extraAnimations="[null, 'slide-up']"
                  :useExternalTrigger="true"
                  :isActiveExternal="activeContent === 3"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>



<script>
import Intersect from "vue-intersect";
import Button from "@theme/components/Button";
import UnderlineAnimation from "@theme/components/UnderlineAnimation.vue";
import ImageOverlayAnim from "@theme/components/ImageOverlayAnim";

import GlobalConstants from "../GlobalConstants";

export default {
  components: { Intersect, Button, UnderlineAnimation, ImageOverlayAnim },
  props: {
    isMobile: Boolean,
  },
  methods: {
    setActiveContent(contentNum) {
      this.activeContent = contentNum;
    },
  },
  data() {
    return {
      activeContent: 3,
      GlobalConstants,
    };
  },
};
</script>

<style scoped lang="stylus">
.scroll-feature-wrapper {
  margin: 48px 0 10px;

  .solution-wrapper {
    border: 1px solid #dcdcdc;
    padding: 50px;
    border-radius: 25px;

    @media (max-width: 1199.999px) {
      padding: 50px 50px;
    }

    @media (max-width: 999.999px) {
      padding: 50px 50px 200px 50px;
    }

    @media (max-width: 799.999px) {
      padding: 50px 50px 130px 50px;
    }

    @media (max-width: 499.99px) {
      padding: 10px 10px 75px 10px;
    }
  }

  @media (min-width: 1904px) {
    padding-bottom: 220px;
  }

  @media (min-width: $grid-breakpoints.lg) {
    margin: 120px 0 10px 10px;
  }

  .left-content {
    padding: 20px;

    .left-content-block {
      padding: 40px 0 0;

      @media (min-width: $grid-breakpoints.lg) {
        padding: 160px 0;

        &:first-child {
          padding-top: 0;
        }

        &:last-child {
          padding-bottom: 0;
        }
      }
    }
  }

  .right-content {
    .right-content-block-wrapper {
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      flex-grow: 1;
      flex-basis: 300px;
      align-self: start;
      margin-left: 70px;

      @media (min-width: $grid-breakpoints.lg) {
        top: calc(50vh - 180px);
        bottom: calc(50vh - 180px);
        margin-top: -60px;
        margin-bottom: 100px;
        height: 400px;
      }

      @media (min-width: $grid-breakpoints.xl) {
        top: calc(50vh - 240px);
        margin-top: -60px;
        margin-bottom: 100px;
        height: 400px;
      }

      @media (min-width: 1904px) {
        top: calc(50vh - 400px);
      }
    }
  }

  h2 {
    margin: 0 0 25px;
  }

  p {
    margin-bottom: 20px;
    text-align: justify;
  }

  .eyebrow {
    margin-bottom: 5px;

    img {
      height: 18px;
    }
  }

  .fade-block {
    position: relative;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;

    @media (min-width: $grid-breakpoints.lg) {
      position: absolute;
      top: 0px;
      bottom: 0px;
      margin-top: 0px;
      height: 400px;
    }

    &:last-child {
      margin-bottom: 0;

      @media (min-width: 1904px) {
        height: 55vh;

        .img-step-animation-container {
          height: 100%;
        }
      }
    }

    &.active {
      opacity: 1;
    }

    .main-image, .top-image, .bottom-image {
      max-width: 100%;
    }

    .top-image, .bottom-image {
      position: absolute;
    }

    .top-image {
      top: 0;
      right: 0;
    }

    .bottom-image {
      bottom: 0;
      left: 0;
    }
  }
}
</style>
