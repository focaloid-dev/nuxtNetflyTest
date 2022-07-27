<template>
  <v-container class="blog-container">
    <v-card class="buttons-wrapper elevation-0" v-show="!isMobile">
      <v-tabs centered v-show="seeAllFlag === false">
        <v-tab
          v-for="tab in tabs.slice(0, 6)"
          @click="filterResults(tab)"
          :key="tab"
          class="tab-button"
        >
          {{ tab }}
        </v-tab>
        <a class="see-all-btn" v-on:click="onSeeAll">{{
          seeAllFlag ? "Show Less" : "See More"
        }}</a>
      </v-tabs>
      <v-tabs centered v-show="seeAllFlag === true">
        <v-tab v-for="tab in tabs" :key="tab" class="tab-button" @click="filterResults(tab)" >
          {{ tab }}
        </v-tab>
        <a class="see-all-btn" v-on:click="onSeeAll">{{
          seeAllFlag ? "Show Less" : "See More"
        }}</a>
      </v-tabs>
    </v-card>
    <v-container>
    <v-row v-show="isMobile" class="select-wrapper">
      <v-col cols="12">
        <v-select
          :items="tabs"
          v-model="selectedVal"
          :value="selectedVal"
          class="mobile-select"
          @change="filterResults(selectedVal)"
        ></v-select>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
</template>

<script>
import GlobalConstants from "../GlobalConstants";
export default {
  components: { GlobalConstants },
  props: ["tabs", "filterResults"],
  data() {
    return {
      seeAllFlag: false,
      isMobile: false,
      isTablet: false,
      isSmallBreakpoint: false,
      selectedVal: "ALL",
    };
  },
  methods: {
    onSeeAll() {
      this.seeAllFlag = !this.seeAllFlag;
    },
    onResize() {
      this.isSmallBreakpoint = window.innerWidth < GlobalConstants.mdBreakpoint;
      this.isMobile = window.innerWidth < GlobalConstants.lgBreakpoint;
      this.isTablet = window.innerWidth < GlobalConstants.xlBreakpoint;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
<style>
.buttons-wrapper .v-slide-group__content {
  flex-wrap: wrap !important;
  white-space: pre-wrap !important;
  transform: none !important;
  position: static !important;
  width: 100% !important;
  max-width: 1018px;
  justify-content: space-between;
  margin: 0 auto;
}
.buttons-wrapper .v-tabs-bar {
  height: auto;
}
.buttons-wrapper {
  padding: 38px 0 0;
  font-family: "hk_grotesk";
}
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #000000;
}
.buttons-wrapper .tab-button {
  background-color: rgba(229, 230, 237, 0.4);
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 700;
  color: #000000;
  min-width: 145px;
  margin-right: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  height: fit-content;
  padding: 10px 15px;
  margin: 0 10px 15px 0 !important;
}

.buttons-wrapper .tab-button.v-tab--active {
  background-color: #ffffff;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.14);
}
.buttons-wrapper .v-tabs-slider-wrapper {
  height: 100% !important;
  overflow: hidden;
  z-index: 1;
  position: static !important;
  display: none;
}
.buttons-wrapper .v-tabs-slider-wrapper .v-tabs-slider {
  background-color: #ffffff;
}
.buttons-wrapper .see-all-btn {
  border-bottom: 1px solid #1f6bf1;
  padding: 10px 0;
  font-size: 13px;
  line-height: 16px;
  font-weight: 700;
  height: fit-content;
  color: #1f6bf1;
  text-transform: uppercase;
}
.buttons-wrapper .v-tabs-bar__content a {
  margin-right: unset !important;
}
.mobile-select .v-select__slot {
  padding: 9px 42px;
  border-radius: 25px;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
}

.mobile-select .v-input__slot:before,
.mobile-select .v-input__slot:after {
  display: none;
}

.mobile-select .v-select__slot .v-select__selections {
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  letter-spacing: 1.5px;
}
.select-wrapper .mobile-select {
  margin-top: 50px;
  padding: 0;
}
.v-menu__content {
  border-radius: 0 0 20px 20px;
}

.v-menu__content .v-list-item__content {
  border-bottom: 1px solid #e5e6ed;
  margin: 0 34px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  letter-spacing: 1.5px;
  text-transform: capitalize;
}
</style>
