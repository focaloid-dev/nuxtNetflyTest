<template>
  <span :class="{ 'underline-wrapper': true, 'hover-underline': hoverOnly }">
    <!-- <Intersect
      @enter="setActive(true)"
      @leave="setActive(false)"
      v-if="!hoverOnly"
    >
      <div
        :class="`underline-image ${active ? 'active' : ''}`"
        :style="`background-image: url('${lineImg}')`"
      />
    </Intersect> -->
    <div
      v-if="hoverOnly"
      :class="`underline-image`"
      :style="`background-image: url('${lineImg}')`"
    />
    <span class="underline-copy"><slot></slot></span>
  </span>
</template>
<script>
//import Intersect from "vue-intersect";

export default {
  components: {
   // Intersect,
  },
  props: {
    lineImg: {
      type: String,
      default: "/img/underline/Transform.png",
    },
    hoverOnly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setActive(newState) {
      this.active = newState;
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>
<style lang="sass">
.underline-wrapper
  position: relative
  display: inline-block

  .underline-copy
    white-space: nowrap
    position: relative

  .underline-image
    position: absolute
    left: 0
    bottom: -112%
    width: 100%
    height: 100%
    background-size: 100%
    background-repeat: no-repeat
    background-position: top
    transition: mask-position $underlineTransitionTime ease-in-out
    transition-delay: $underlineTransitionDelayInterval
    mask-image: linear-gradient(to right, #FFF, #FFF 50%, transparent 50%, transparent 100%)
    mask-size: 200% 100%
    mask-position: right
    @media (max-width: 767px)
      mask-image: none

    &.active
      mask-position: left
  &.hover-underline
    .underline-image
      transition-delay: 0s
      transition-duration: $underlineHoverTransitionTime
    &:hover  
      mask-position: left
.team-banner
  .underline-image
    bottom: -7px
.mission-section
  .underline-image
    bottom: 13px
    @media (max-width: 959px)
      bottom: 0
.career-wrapper
  h2
    span
      margin: 0 38px 0 auto
      z-index: -1
  @media (max-width: 959px)
    margin-left: 0
    .underline-image
      bottom: 10px
</style>