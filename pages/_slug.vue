<template>
  <v-app id="inspire" class="documents_wrap">
    <v-navigation-drawer
      v-if="shouldShowSidebar"
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
   
      >     <!-- @update:active="updateActive" -->
      </v-treeview>
    </v-navigation-drawer>
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="false" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4 text--black">
        <routerLink :to="'index'">
          <img
            width="160"
            :src="'/img/logo_charcoal_424242.svg'"
            :alt="'Slim.ai'"
            class="ml-md-12 mt-1"
          />
        </routerLink>
      </v-toolbar-title>
      <v-spacer />
      <!-- <SearchBox class="hidden-xs-only"/> -->
      <v-menu v-if="false" bottom left :offset-y="true" color="white">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <NavLinks class="d-flex flex-column" menuMode="true" />
      </v-menu>
      <NavLinks v-if="true" class="d-flex" />
    </v-app-bar>

    <nuxt-content :document="page" />
    
    <!-- Note - please do not use <main> elements in child components -->
    <v-main>
      <v-row no-gutters align="center" justify="center">
        <!-- this is the column where we only want to apply a css class if we are on the blog index page -->
      </v-row>
    </v-main>

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.component("test", {
  components: {},
  asyncData: async ({ $content, params }) => {
    const slug = params.slug || "index";
    let page = null;
    try {
      page = await $content(slug).fetch();
    } catch {}

    return {
      page,
    };
  },
  data: function () {
    return {
      hello: "test",
      sidebarItems: [
        {
          type: "group",
          path: "/",
          title: "Home",
          sidebarDepth: 1,
          children: [],
          collapsable: false,
        },
      ],
    };
  },
  created: function () {
    // this.test()
    console.log(this.$route.params.slug);
  },
  methods: {
    test: function () {
      this.hello = "hi 123";
    },
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
    shouldShowSidebar() {
      const { slug } = this.$route.params;
      return false;
      // return (
      //   !slug == "/" &&
      //   frontmatter.sidebar !== false &&
      //   this.sidebarItems.length
      // );
    },
  },
});
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