<template>
  <nav
    v-if="userLinks.length || repoLink"
    :class="[{ 'nav-links menu': true, 'menu-mode': menuMode }, mobileNavBar()]"
  >
    <!-- user links -->
    <div v-for="item in userLinks" :key="item.link" text>
      <NavLink :item="item" />
    </div>

    <!-- repo link -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link black--text"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ repoLabel }}
      <OutboundLink />
    </a>
   <div  class="git-btn-header">
   <a href="https://github.com/docker-slim" target="_blank">
   Github 
   <img :src="starSvg"/>
   </a>
   <a href="https://github.com/docker-slim/docker-slim/stargazers" target="_blank" class="Github_count">{{stargazerCount}}</a>
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
import Button from "@theme/components/Button.vue";
import NavLink from "@theme/components/NavLink.vue";
import GithubButton from "vue-github-button";
import StarSvg from "../uploads/Star.svg"
import GlobalConstants from "../GlobalConstants";

export default {

  components: { Button, NavLink, GithubButton,  },
  props: ["menuMode"],
  data: () => ({
    GlobalConstants,
    stargazerCount: 0,
    starSvg:StarSvg,

  }),
  mounted() {
    this.getStargazer()
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
    async getStargazer(){
      const res = await fetch('https://api.github.com/repos/docker-slim/docker-slim');
      const responce = await res.json();
      this.stargazerCount = responce.stargazers_count;
    }
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
      return (this.nav || []).map((link) => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        });
      });
    },

    repoLink() {
      const { repo } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      }
    },

    repoLabel() {
      if (!this.repoLink) return;
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel;
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0];
      const platforms = ["GitHub", "GitLab", "Bitbucket"];
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        if (new RegExp(platform, "i").test(repoHost)) {
          return platform;
        }
      }

      return "Source";
    },
  },
};
</script>

<style scoped lang="stylus">
nav {
  align-items: center;

  .button-wrapper {
    margin-bottom: 0;

    a {
      margin-bottom: 0;
    }
  }
}

nav a {
  font-family: 'hk_grotesk' !important;
}

.mobileNav {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
}

.mobileNavBar {
  padding: 30px;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.mobileGetEarlyAccess {
  margin-right: 8px;
}

</style>
