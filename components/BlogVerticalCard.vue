<template>
  <v-card class="post-card ">
    <router-link :to="page.path" class="blog-img">
      <img
        class="blog-image"
        :src="
          page.frontmatter.bannerimage
            ? page.frontmatter.bannerimage
            : 'default-banner.jpg'
        "
        :alt="page.frontmatter.title"
      />
    </router-link>

    <!-- <div v-if="imageurl === undefined">
      <div v-if="!page.frontmatter.videourl.endsWith('.mp4')" class="iframecard-container ma-12">
        <iframe
          v-if="page.frontmatter.videourl"
          :src="$withBase(page.frontmatter.videourl)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div v-if="page.frontmatter.videourl.endsWith('.mp4')"  class="video-container">
        <video class="video" controls>
          <source :src="$withBase(page.frontmatter.videourl)" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div> -->

    <div class="content">
      <div
        class="keywords"
        v-if="page.frontmatter.tags && page.frontmatter.tags.length >= 0"
      >
        <router-link
          v-for="tag in page.frontmatter.tags"
          :key="tag"
          :to="{ path: computePath, query: { tag: tag } }"
          class="tag"
          >{{ tag }}</router-link
        >
      </div>
      <span class="blog-date" v-if="datestamp">{{ datestamp }}</span>
      <div class="blog-header-summary-container">
        <router-link :to="page.path">
          <h2 class="blog-title">{{ page.frontmatter.title }}</h2>
        </router-link>

        <p v-if="page.frontmatter.summary" class="summary mt-4">
          {{ page.frontmatter.summary }}
        </p>
      </div>
    </div>
  </v-card>
</template>

<script>
const dateFormatter = new Intl.DateTimeFormat("en-us", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default {
  
  props: ["page", "hover"],
 
  computed: {
    computePath() {
      if (this.$route.path.includes('blog')) {
        return './'
      } else {
        return '/blog/'
      }
    },
    datestamp() {
      try {
        const dt = new Date(this.page.frontmatter.date.substring(0, 10) + "T12:00:00Z");
        return dateFormatter.format(dt);
      } catch (err) {
        return this.page.frontmatter.date.substring(0, 10);
      }
    },
  },
};
</script>


<style scoped>
.post-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14) !important;
  -webkit-box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14) !important;
  -moz-box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14) !important;
  transition: 0.3s all ease;
  top: 0;
}
.post-card:hover {
  position: relative;
  transform: translateY(-7px) !important;
  transition-duration: 0.3s !important;
  box-shadow: 4px 5px 14px 0px rgba(0,0,0,0.21) !important;
-webkit-box-shadow: 4px 5px 14px 0px rgba(0,0,0,0.21);
-moz-box-shadow: 4px 5px 14px 0px rgba(0,0,0,0.21);
}
.post-card .blog-img {
  min-height: 225px;
  max-height: 225px;
  width: 100%;
}
.blog-image {
  object-fit: cover;
  object-position: center;
  width: 100% !important;
  height: 225px;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.iframecard-container iframe {
  border: 0;
  height: 250;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.video-container {
  
  width: 100%;
  padding-top: 56.25%;
  height: 0px;
  position: relative;
}

.video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.portrait {
  max-width: 100px;
}
.chipswrapper {
  max-height: 45px;
  min-height: 45px;
  overflow: hidden;
}
h2 {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.26;
  transition: all 0.2s;
  word-break: normal;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.8);
}

.post-card:hover .blogtitle {
  color: #03a87c;
}
.summary {
  font-size: 18px;
  line-height: 1.2rem;
  color: #000000;
  margin-bottom: 0;
}
.content {
  padding: 37px 30px 25px;
  flex-grow: 1;
  position: relative;
  font-family: "hk_grotesk";
}

.keywords {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 13px;
  border-bottom: 1px solid #e5e6ed;
  margin-bottom: 16px;
  min-height: 44px;
}

.tag {
  color: #1e7cae;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  font-family: "hk_grotesk";
  text-transform: uppercase;
  letter-spacing: 0.7px;
  text-decoration: none;
}
.tag:hover {
  text-decoration: none;
}
.blog-date {
  font-size: 12px;
  line-height: 22px;
  font-weight: 300;
  color: #000000;
  display: block;
  margin-bottom: 15px;
}
.keywords > .tag:not(:last-child)::after {
  content: "/";
    margin-right: 5px;
    margin-left: 5px;
}

.footer {
  padding: 0 20px 20px;
}

h2 {
  font-size: 28px;
  font-weight: 500;
  line-height: 34px;
  transition: all 0.2s;
  color: #000000;
  margin-bottom: 3px;
}
h2.blog-title {
  /* min-height: 172px; */
}
.blog-header-summary-container{
  min-height: 200px;
}
/* h2:hover {
  color: #03a87c;
} */
</style>
