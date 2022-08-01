<template>
  <nav
   
  >
    <!-- user links -->
    <div v-for="item in userLinks" :key="item" text>
      <NavLink :item="item" />
    </div>

    <!-- repo link -->
  
    <div class="git-btn-header">
      <a href="https://github.com/docker-slim" target="_blank">
        Github
        <img :src="starSvg" />
      </a>
      <a
        href="https://github.com/docker-slim/docker-slim/stargazers"
        target="_blank"
        class="Github_count"
        >{{ stargazerCount }}</a
      >
    </div>

    <div :class="[mobileNav()]">
      <Button
        className="btnPrimary mr-xl-4"
        :href="GlobalConstants.genericSignupUrl"
        label="Get Started"
      />
      <!-- <Button
        className="btnPrimary mr-lg-4"
        href="https://portal.slim.dev/login?invitecode=invite.1ua3zgxhhokfmDbtOLJH8jD6ooR"
        label="Get Started"
      /> -->
    </div>
  </nav>
</template>

<script>
import { resolveNavLinkItem } from "../util";
import Button from "../components/Button.vue";
import NavLink from "../components/NavLink.vue";
//import GithubButton from "vue-github-button";
// import StarSvg from "../uploads/Star.svg"
import GlobalConstants from "../GlobalConstants";
import StarSvg from "../uploads/Star.svg";

export default {
  components: { Button, NavLink, 
  //GithubButton 
  },
  props: ["menuMode"],
  data: () => ({
    GlobalConstants,
    stargazerCount: 0,
    starSvg: StarSvg,
  }),
  mounted() {
    this.getStargazer();
  },
  methods: {
    mobileNav() {
      if (this.menuMode) {
        return "mobileNav";
      }
    },
    mobileNavBar() {
      if (this.menuMode) {
        return "mobileNavBar";
      }
    },
    async getStargazer() {
      const res = await fetch(
        "https://api.github.com/repos/docker-slim/docker-slim"
      );
      const responce = await res.json();
      const prettyPrintStargazers =
        Math.abs(responce.stargazers_count) > 999
          ? Math.sign(responce.stargazers_count) *
              (Math.abs(responce.stargazers_count) / 1000).toFixed(1) +
            "K"
          : Math.sign(responce.stargazers_count) *
            Math.abs(responce.stargazers_count);
      this.stargazerCount = prettyPrintStargazers;
    },
  },

  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },

    nav() {
      const { locales } = this.$site;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;
        const routes = this.$router.options.routes;
        const themeLocales = this.$site.themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || "Languages",
          items: Object.keys(locales).map((path) => {
            const locale = locales[path];
            const text =
              (themeLocales[path] && themeLocales[path].label) || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some((route) => route.path === link)) {
                link = path;
              }
            }
            return { text, link };
          }),
        };
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },

    userLinks() {
      return ['Home', 'Solutions', 'Contact', 'Docs']
    },


  },
};
</script>

<style scoped lang="sass">
nav
  align-items: center

  .button-wrapper
    margin-bottom: 0

    a
      margin-bottom: 0

nav a
  font-family: 'hk_grotesk' !important

.mobileNav
  display: flex
  flex-flow: column
  justify-content: space-around
  align-items: center

  &Bar
    padding: 30px
    justify-content: space-between
    align-items: center

  & > *
    margin-bottom: 15px

    &:last-child
      margin-bottom: 0

.mobileGetEarlyAccess
  margin-right: 8px
</style>
