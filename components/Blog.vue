<template>
  <div>
    <Banner title="The Slim.AI Blog" backgroundColor="#8DCAEC" />
    <TabButtons
      :tabs="unique"
      :filterResults="filterResults"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
    />
    <blogCarousal
      class="post"
      :posts="featuredData"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="800"
      v-show="!showText"
    />
    <v-container class="wrapper-container">
      <v-row v-if="selectedTag" no-gutters class="blogtitleFont mt-8">
        <router-link to=".">
          <h1># {{ selectedTag }}</h1>
        </router-link>
      </v-row>
      <div class="posts">
        <v-row>
          <v-col
            xl="3"
            md="4"
            sm="6"
            cols="12"
            :key="page.path"
            v-for="page in blogData"
          >
            <v-hover>
              <template v-slot:default="{ hover }">
                <BlogVerticalCard
                  class="post"
                  :page="page"
                  :hover="hover"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </template>
            </v-hover>
          </v-col>
        </v-row>
        <div
          class="dev-ops"
          data-aos="fade-down"
          data-aos-duration="950"
          data-aos-delay="100"
          v-show="!showText"
        >
          <span>Challenging the DevOps Status Quo</span>
          <img :src="image" />
        </div>
        <div
          class="reThinking"
          data-aos="fade-down"
          data-aos-duration="950"
          data-aos-delay="100"
          v-show="!showText"
        >
          <span>Rethinking the Dev Lifecycle</span>
          <img :src="image2" />
        </div>
        <div
          class="our-readers"
          data-aos="fade-up-right"
          data-aos-duration="950"
          data-aos-delay="100"
          v-show="!showText"
        >
          <img :src="image3" />
          <span>Have an idea for a topic? Let us know.</span>
        </div>
      </div>

      <span id="mc_signup"></span>
    </v-container>

    <SignUpCtas/>
    <div class="home">
      <SocialSignup/>
    </div>
    <Footer pageName="blog" />
  </div>
</template>

<script>
import Subscribe from "./Subscribe.vue";
import SocialSignup from "./SocialSignup.vue";
import SignUpCtas from "./SignUpCtas.vue";
import Footer from "./Footer.vue";
import BlogVerticalCard from "./BlogVerticalCard.vue";
import Banner from "./Banner";
import TabButtons from "./TabButtons";
import blogCarousal from "./Carousal";
import arrowBlue from "../uploads/arrow-blue.png";
import arrowGreen from "../uploads/arrow-green.png";
import arrowup from "../uploads/arrow-up.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {
    BlogVerticalCard,
    Subscribe,
    Footer,
    Banner,
    TabButtons,
    blogCarousal,
    SocialSignup,
    SignUpCtas,
  },
  data() {
    return {
      tagsData: [],
      unique: [],
      blogData: this.posts,
      featuredData: [],
      image: arrowBlue,
      image2: arrowGreen,
      image3: arrowup,
      showText: false,
    };
  },
  mounted() {
    AOS.init();
    this.$site.pages.filter((page) => {
      if (page.frontmatter.tags && page.frontmatter.tags !== undefined) {
        page.frontmatter.tags.map((tag) => this.tagsData.push(tag));
      }
    });
    this.tagsData.unshift("ALL");
    this.unique = [...new Set(this.tagsData)];
    this.blogData = this.posts;
    this.featuredData = this.posts.filter(
      (post) => post.frontmatter.isFeatured === "true"
    );
    document.title = "Articles | Slim.AI";
  },
  methods: {
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
      const author = this.selectedAuthor
      const matchAuthor =
        author ? post.frontmatter.authorname === author : true
      return matchPath && matchTag && notReadMe && matchAuthor;
    },
    filterResults(name) {
      if (name === "ALL") {
        this.blogData = this.posts;
        this.showText = false;
      } else {
        this.blogData = this.posts.filter((post) =>
          post.frontmatter.tags.includes(name)
        );
        this.showText = true

      }
    },
  },
  computed: {
    selectedTag() {
      return this.$route.query.tag || "";
    },
    selectedAuthor() {
      return this.$route.query.author || "";
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
max-card-width = 370px;
card-gutter = 20px;

h1 {
  font-family: 'AvantGardeGothicITCW01Bd', sans-serif;
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  color: #03a87c;
  transition: all 0.2s ease;

  &::after {
    content: '\00D7';
    margin-left: 10px;
    transition: all 0.2s ease;
    opacity: 0;
  }
}

h1:hover {
  color: rgba(0, 0, 0, 0.8);

  &::after {
    opacity: 0.5;
  }
}

.post {
  height: 100%;
}

.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.posts {
  margin-bottom: 100px;
}

article {
  display: block;
  flex: 0 0 100%;
  width: 100%;
  max-width: max-card-width;
  padding: 0 (card-gutter / 2);
  margin-bottom: card-gutter;

  @media (min-width: 768px) {
    flex-basis: 50%;
    width: 50%;
  }

  @media (min-width: 1100px) {
    flex-basis: 33.333333%;
    width: 33.333333%;
  }

  @media (min-width: 1600px) {
    flex-basis: 25%;
    width: 25%;
  }

  > a {
    display: block;
    height: 100%;
  }
}

@media (max-width: $MQMobile) {
  .blogtitleFont {
    font-size: 24px;
  }
}

@media (max-width: $MQMobileNarrow) {
  .blogtitleFont {
    font-size: 24px;
  }
}

.blog-container {
  margin-left: auto;
  margin-right: auto;
  max-width: max-card-width - card-gutter;

  @media (min-width: 768px) {
    max-width: max-card-width * 2 - card-gutter;
  }

  @media (min-width: 1100px) {
    max-width: max-card-width * 3 - card-gutter;
  }

  @media (min-width: 1600px) {
    max-width: max-card-width * 4 - card-gutter;
  }
}

.dev-ops {
  width: 164px;
  position: absolute;
  top: 186px;
  left: -190px;
  font-size: 26px;
  line-height: 28px;
  text-transform: uppercase;
  text-align: right;
  word-break: break-word;
  color: #0096E9;
  font-family: 'Max Sans';
  font-weight: 700;
}

.dev-ops img {
  width: 28px;
}

.reThinking {
  width: 153px;
  position: absolute;
 top: 590px;
  right: -190px;
  font-size: 26px;
  line-height: 28px;
  text-transform: uppercase;
  text-align: left;
  word-break: break-word;
  color: #4CAF50;
  font-family: 'Max Sans';
  font-weight: 700;
}

.reThinking img {
  width: 28px;
}

.our-readers {
  width: 144px;
  position: absolute;
  top: 1300px;
  left: -190px;
  font-size: 26px;
  line-height: 28px;
  text-transform: uppercase;
  text-align: right;
  word-break: break-word;
  color: #FFC107;
  font-family: 'Max Sans';
  font-weight: 700;
}

.our-readers img {
  width: 28px;
  display: block;
  margin-left: auto;
}
.wrapper-container{
  position: relative;
}

</style>
