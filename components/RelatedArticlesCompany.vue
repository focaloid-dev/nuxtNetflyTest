<template>
    <section class="related-article-company">
          <v-container>
               <div class="ralated-company-wrapper">
                <div class="title-row">
                <h2>Hot Off the Press</h2>
                <router-link to="/blog">
                  <p>See All Articles</p>
                </router-link>

                </div>
                <v-row class="justify-center mb-4">
                <v-col
                    xl="4"
                    md="4"
                    sm="6"
                    cols="12"
                    :key="item.path"
                    v-for="item in posts.slice(0, 3)"
                >
                    <BlogVerticalCard :page="item" />
                </v-col>
                </v-row>
               </div>
            </v-container>
    </section>

</template>
<script>
import BlogVerticalCard from "./BlogVerticalCard.vue";
export default {
  components: { BlogVerticalCard },
  methods:{
      compareByDate(a, b) {
      if (a.frontmatter.date > b.frontmatter.date) {
        return -1;
      }
      if (a.frontmatter.date < b.frontmatter.date) {
        return 1;
      }
      return 0;
    },
    filterBlogPosts(post) {
      const tag = this.selectedTag;
      const matchPath = post.path.indexOf("/blog/") >= 0;
      const notReadMe = post.relativePath !== "blog/README.md";
      const matchTag =
        tag && post.frontmatter.tags
          ? post.frontmatter.tags.indexOf(tag) >= 0
          : true;
      return matchPath && matchTag && notReadMe;
    },
  },
  computed: {
    selectedTag() {
      return this.$route.query.tag || "";
    },
    posts() {
      return this.$site.pages
        .filter(this.filterBlogPosts)
        .sort(this.compareByDate);
    },
  },
};
</script>

<style scoped lang="stylus">
.related-article-company {
    margin-left: auto;
    margin-right: auto;
    font-family: "hk_grotesk";
    @media (max-width: 767px) {
      max-width: 100% !important;
    }
    .ralated-company-wrapper{
      max-width: 1186px;
      margin: 0 auto;
    }
    .title-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 48px 0;
        line-height: 1.2;
         h2 {
             font-size: 44px;
             line-height: 44px;
             color: #000;
             font-weight: 500;
             max-width: 100%;
             margin: 0;
             font-family: "hk_grotesk";
             @media (max-width: 767px) {
               font-size: 36px;
             }
         }
        a {
          p{
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            line-height: 1.2;
            color: #1e7cae;
            border-bottom: 1px solid #1e7cae;
            padding-bottom: 2px;
            flex: 0 0 122px;
            text-align: center;
            margin: 0 0 0 auto;
            cursor: pointer;

            }
        }
        @media (max-width: 767px){
          flex-direction: column;
          justify-content: left;
              align-items: flex-start;
              h2{
                margin-bottom: 11px;
              }
          a{
             margin-right: auto;
            margin-left: 0;
            flex: 0 0;
          }
        }
    }
}
</style>
