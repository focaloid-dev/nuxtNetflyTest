<template>
  <section :class="{ section: true, backColorBlue: backgroundBlue }">
    <v-row
      :align="verticalAlign || 'center'"
      class="secRow justify-center"
      no-gutters
    >
      <v-col cols="12" md="10" :class="textColClass || 'justify-end'">
        <div v-if="headline !== undefined" class="columnHeadline colorGreyed">
          &#60;{{ headline }}&#62;
        </div>
        <h1
          v-if="this.$slots.title"
          id="section-title"
          class="text-center ml-0 mb-16 pl-0 columnTitle"
        >
          <slot name="title"></slot>
        </h1>
        <p v-if="subtitle !== undefined" class="text-center subTitleFont mb-5">
          {{ subtitle }}
        </p>
        <v-row class="justify-center" no-gutters>
          <!-- <AnimateWrapper> -->
            <Button
              v-for="(button, index) in buttons"
              :key="index"
              className="btnSecondary hero-btn mr-2"
              :href="button.url"
              :icon="button.icon"
              :label="button.label"
            >
            </Button>
          <!-- </AnimateWrapper> -->
        </v-row>
      </v-col>
      <v-col cols="12" :class="[imageColClass || 'pr-md-5', 'image-wrapper']">
        <!-- Mark entrypoint for image work. -->
        <HeaderImageOverlayAnim
          :images="images"
          :initialDelay="0.1"
          :extraAnimations="['expand', 'expand']"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Intersect from "vue-intersect";
import Button from "@theme/components/Button";
import HeaderImageOverlayAnim from "@theme/components/HeaderImageOverlayAnim";
import AnimateWrapper from "@theme/components/AnimateWrapper";

export default {
  components: {
    Intersect,
    Button,
    HeaderImageOverlayAnim,
    AnimateWrapper,
  },
  props: [
    "textColClass",
    "imageColClass",
    "verticalAlign",
    "backgroundBlue",
    "title",
    "subtitle",
    "headline",
    "images",
    "alt",
    "videoUrl",
    "buttons",
  ],
  data: () => ({
    animationTimer: 0.8,
    active: false,
  }),
  methods: {
    setActive(newState) {
      this.active = newState;
    },
  },
};
</script>

<style scoped lang="stylus">
.textcolwidth {
  max-width: 100vw;
}

.section {
  max-width: 100vw;
  margin: 0px;
  display: block;

  @media (min-width: $grid-breakpoints.md) {
    padding-bottom: 90px;
  }
}

.leftcol {
  max-width: 40vw;
}

.secRow {
  text-align: center;

  .subtitle {
    max-width: 35rem;
    font-size: 1.6rem;
    line-height: 1.3;
    color: lighten($textColor, 40%);
  }

  .headerfont {
    font-size: 48px;
    font-weight: 900;
  }
}

.image-wrapper {
  max-width: 950px;
}

.button-wrapper {
  width: 280px;
  margin-bottom: 0;
  a {
    margin-bottom: 0;
  }

  @media (min-width: $grid-breakpoints.lg) {
    width: auto;
  }
  @media (max-width: $MQMobile) {
    margin-bottom: 64px;
  }
}

</style>
