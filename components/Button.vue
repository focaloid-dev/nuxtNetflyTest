<template>
  <div class="button-wrapper">
    <a :class="`${className}`" :href="href" :target="target">
      <img v-if="icon" class="icon" :src="icon" alt="" /><span>{{
        label
      }}</span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
    target: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "btnPrimary",
    },
  },
};
</script>
<style lang="stylus">
.button-wrapper {
  display: inline-block;
  margin-bottom: 10px;

  @media (min-width: $grid-breakpoints.md) {
    display: inline-block;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    span {
      vertical-align: middle;
      text-align: center;
    }

    .icon {
      max-height: 30px;
      margin-right: 10px;
      justify-self: left;
    }
  }
}
</style>