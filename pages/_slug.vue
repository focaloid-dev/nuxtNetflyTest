<!-- <template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
        <p>{{ page.date }}</p>

  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  }
};
</script> -->
<template>
  <v-app id="inspire" class="documents_wrap">
    <v-navigation-drawer
      v-if="shouldShowSidebar"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-treeview
        item-key="path"
        item-text="title"
        :items="sidebarItems"
        dense
        open-all
        hoverable
        open-on-click
        activatable
        @update:active="updateActive"
      >
      </v-treeview>
    </v-navigation-drawer>

    <!-- <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      :color="$page.frontmatter.company ? '#DCEEFA' : '#F3FAFD'"
      elevate-on-scroll
      elevation="3"
      id="banner"
      height="84px"
    >
      <span class="bannerText">
        <span class="font-weight-bold"> Limited seats available: </span>
        Join our Early Access program and start exploring containers today.
        <a
          class="font-weight-bold"
          href="https://portal.slim.dev/login?invitecode=invite.1ua3zgxhhokfmDbtOLJH8jD6ooR"
          target="_blank"
          >Try it now.</a
        >
      </span>
    </v-app-bar> -->
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      :color="'#FFFFFF'"
      elevate-on-scroll
      id="navBar"
      class="pr-sm-12 pt-4"
      extended
      extension-height="30"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="shouldShowSidebar"
      />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4 text--black">



    <nuxt-content :document="page"/>



      </v-toolbar-title>
      <v-spacer />
      <!-- <SearchBox class="hidden-xs-only"/> -->
      <v-menu v-if="isTablet" bottom left :offset-y="true" color="white">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <NavLinks class="d-flex flex-column" menuMode="true" />
      </v-menu>
      <NavLinks v-if="!isTablet" class="d-flex" />
    </v-app-bar>
    <!-- Note - please do not use <main> elements in child components -->
    <v-main>
      <v-row no-gutters align="center" justify="center">
        <!-- this is the column where we only want to apply a css class if we are on the blog index page -->
        <v-col :class="getMainColClass()" cols="12" sm="12" md="12">
          <Home
            v-if="$page.frontmatter.home"
            :isMobile="isMobile"
            :isSmallBreakpoint="isSmallBreakpoint"
          />
          <Company v-else-if="$page.frontmatter.company" />
          <Ciso v-else-if="$page.frontmatter.solutions" />
          <Contact v-else-if="$page.frontmatter.contact" />

          <Card v-else-if="$page.frontmatter.containers" />

          <EarlyAccessSignup v-else-if="$page.frontmatter.earlyAccessSignup" />
          <Blog v-else-if="$page.frontmatter.blog" />
          <Page v-else :sidebar-items="sidebarItems">
            <template #top>
              <slot name="page-top" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Home from "@theme/components/Home.vue";
import SearchBox from "@theme/components/SearchBox.vue";
import NavLinks from "@theme/components/NavLinks.vue";
import Page from "@theme/components/Page.vue";
import { resolveSidebarItems } from "../util";
import Company from "@theme/components/Company.vue";
import Card from "@theme/components/Card.vue";
import Ciso from "@theme/components/Ciso.vue";
import Contact from "@theme/components/Contactus.vue";

import EarlyAccessSignup from "@theme/components/EarlyAccessSignup.vue";
import Blog from "@theme/components/Blog.vue";
import GlobalConstants from "../GlobalConstants";
export default {
  props: {
    source: String,
  },
  components: {
    Home,
    Company,
    Card,
    Ciso,
    Contact,
    EarlyAccessSignup,
    Page,
    NavLinks,
    SearchBox,
    Blog,
    GlobalConstants,
  },

  data: () => ({
    dialog: false,
    drawer: null,
    isSmallBreakpoint: false,
    isMobile: false,
    isTablet: false,
  }),

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },
    sidebarItems() {
      const items = resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );

      return items;
    },
  },

  methods: {
    getMainColClass() {
      if (
        // this.$route.fullPath === "/blog/" ||
        this.$route.fullPath === "/terms-of-use.html" ||
        this.$route.fullPath === "/privacy-policy.html" ||
        this.$route.fullPath === "/release-notes.html"
      ) {
        return "mtCol";
      }
    },
    updateActive(active) {
      if (active[0] == undefined) return;
      const path = active[0].replace(".html", "");

      this.$router.push(path);
    },
    onResize() {
      this.isSmallBreakpoint = window.innerWidth < GlobalConstants.mdBreakpoint;
      this.isMobile = window.innerWidth < GlobalConstants.lgBreakpoint;
      this.isTablet = window.innerWidth < GlobalConstants.xlBreakpoint;
    },
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>


<style lang="stylus">
#banner {
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  background-color: #FFDA7E !important;
  font-family: 'Montserrat';
}

.v-application .elevation-3 {
  box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.09) !important;
}

.mtCol {
  margin-top: 64px;
}

@media (max-width: $MQMobile) {
  .bannerText {
    padding-top: 10px;
  }
}
</style>
<style src="prismjs/themes/prism-okaidia.css"></style>