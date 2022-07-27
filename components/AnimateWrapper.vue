<template lang="">
  <Intersect @enter="setActive(true)" @leave="setActive(false)">
    <div
      :class="`animation-wrapper ${active ? `active` : ``} ${animationType}`"
    >
      <slot></slot>
    </div>
  </Intersect>
</template>
<script>
import Intersect from "vue-intersect";

export default {
  components: {
    Intersect,
  },
  props: {
    images: Array,
    animationTimer: {
      type: Number,
      default: 0.8,
    },
    initialDelay: {
      type: Number,
      default: 0,
    },
    animationType: {
      type: String,
      default: "fade-up", // ex: [null, 'slide-up', 'fade-up']
    },
    repeat: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    active: false,
  }),
  methods: {
    setActive(newState) {
      if (this.repeat || newState) {
        this.active = newState;
      }
    },
  },
};
</script>
<style lang="stylus">
.animation-wrapper {
  &.slide-up {
    transform: translateY(50px);
  }

  &.fade-up {
    transition: opacity $transitionTime ease-in-out, transform $transitionTime $slideEasing;
    transform: translateY(20px);
    opacity: 0;
  }

  &.active {
    &.slide-up {
      transform: translateY(0px);
    }

    &.fade-up {
      transform: translateY(0px);
      opacity: 1;
    }
  }
}
</style>