<template lang="">
  <Intersect @enter="setActive(true)" @leave="setActive(false)">
    <div
      :class="`img-step-animation-container ${useExternalTrigger ? (isActiveExternal ? 'active' : '') : (active ? 'active' : '')}`"
    >
      <template
        v-for="(image, index) in images"
      >
        <img
          :key="index"
          v-if="image === '/img/home-hero/Diagram.png'"
          :class="`img-step`"
          alt=""
          :src="image"
        />
        <img
          v-else
          :key="index"
          :class="`clouds img-step ${extraAnimations[index]}`"
          alt=""
          :src="image"
          :style="`transition-delay: ${index === 0 ? initialDelay : (animationTimer * (index) + initialDelay)}s; animation-delay: ${index === 0 ? initialDelay : (animationTimer * (index) + initialDelay)}s;`"
        />
      </template>
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
    extraAnimations: {
      type: Array,
      default: function () {
        return []; // ex: [null, 'slide-up', 'slide-down']
      },
    },
    isActiveExternal: Boolean,
    useExternalTrigger: Boolean,
  },
  data: () => ({
    active: false,
  }),
  methods: {
    setActive(newState) {
      this.active = newState;
    },
  },
};

</script>
<style lang="stylus">
.img-step-animation-container {
  position: relative;
  width: 100%;
  margin: auto;

  .img-step {
    position: absolute;
    width: 100%;
    left: 0;

    &:first-child {
      position: relative;
    }
  }

  .clouds {
    transition: opacity $transitionTime ease-in-out, transform $transitionTime $slideEasing;
  }

  .slide-up {
    transform: translateY(50px);
  }

  .slide-down {
    transform: translateY(-50px);
  }

  @keyframes expand {
    0% {
      transform: scale(0.9);
    }

    50% {
      transform: scale(1.1);
    }

    60% {
      transform: scale(1);
    }

    70% {
      transform: scale(1.03);
    }

    100% {
      transform: scale(1);
    }
  }

  .expand {
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  }

  &.active {
    .img-step {
      opacity: 1;
    }

    .slide-up, .slide-down {
      transform: translateY(0px);
    }

    .expand {
      animation-name: expand;
    }
  }
}
</style>