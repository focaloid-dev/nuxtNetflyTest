<template>
  <span class="mr-lg-12">
    <UnderlineAnimation :hoverOnly="true" lineImg="/img/underline/Nav.png">
      <router-link
        class="router-link nav-link"
        :to="link"
        v-if="!isExternal(link)"
        :exact="exact"
        >{{ item.text }}</router-link
      >
      <a
        v-else
        class="btnText"
        :href="link"
        :target="isMailto(link) || isTel(link) ? null : '_blank'"
        :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
      >
        {{ item.text }}
        <OutboundLink />
      </a>
    </UnderlineAnimation>
  </span>
</template>

<script>
import UnderlineAnimation from "@theme/components/UnderlineAnimation.vue";
import { isExternal, isMailto, isTel, ensureExt } from "../util";

export default {
  components: {
    UnderlineAnimation,
  },
  props: {
    item: {
      required: true,
    },
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          (rootLink) => rootLink === this.link
        );
      }
      return this.link === "/";
      //   color:#444444 !important;
    },
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
  },
};
</script>

<style lang="stylus">
.v-application .nav-link {
  font-family: $fontFamily;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: $buttonLetterSpacing;
  color: $black;
  display: block;

  @media (min-width: $grid-breakpoints.xl) {
    padding: 0;
    margin-top: 0;
    display: inline;
  }
}
</style>
