<template>
  <div class="page home">
    <div class="hero">
      <SectionVisualCenterHero
        :images="
          !isSmallBreakpoint
            ? ['/img/home-hero/Diagram.png', '/img/home-hero/Clouds.png']
            : [
                '/img/home-hero/Clouds Mobile.png',
                '/img/home-hero/Diagram Mobile.png',
              ]
        "
        :imagesMobile="['/img/home-hero/Clouds Mobile.png']"
        :buttons="[
          {
            url: GlobalConstants.gitlabSignupUrl,
            label: 'Get Started',
          },
        ]"
        :isMobile="isMobile"
      >
        <template v-slot:title>
          <span v-if="isMobile">
            Build secure containers,
            <UnderlineAnimation :lineImg="lineImg"
              >faster</UnderlineAnimation
            >
          </span>
          <span v-else>
            Build secure containers,
            <UnderlineAnimation :lineImg="lineImg"
              >faster</UnderlineAnimation
            >
          </span>
          <div class="subtitles">Secure your software supply chain.</div>

        </template>
      </SectionVisualCenterHero>
    </div>
    <Scan
      title="Container Insights"
    />
    <ScrollFeature :isMobile="isMobile" />
    <Solutions :isMobile="isMobile" />

    <CaseStudyBanner
      title="See how partners succeed with Slim.AI"
      quoteBody="Regardless of the project, we have the same core problem: Get code to production more quickly. Slim.AI allowed our developers to stand up microservices without being experts in containers or pipelines. We can offload a lot of that complexity to Slim and let developers focus on quickly building production-ready services.”"
      quoteLogo="/img/logo/PaymentWorks@2x.png"
      quoteLogoAlt="PaymentWorks"
      quoteByline="Chris Hope | Principal Engineer at PaymentWorks"
      quoteImage="/img/Chris Hope.jpg"
      bulletHeader="Goals"
      :bullets="[
        `Reduce DevOps overhead managing containers and artifacts`,
        `Speed up test pipelines, reducing time to deployment`,
        `Automate “slimmed” workflows in CI/CD`,
      ]"
      :ctaUrl="GlobalConstants.caseStudyUrl"
      ctaIcon="/img/icons/Book.svg"
      ctaLabel="Read the case
    study"
      background="yellow"
    />
    <ReviewCarousel
      title="See who’s talking about Slim"
      :reviews="[
        {
          quoteBody:
            `“ Im always hesitant to add a new tool to my toolset… but SlimAI has all the chances to pass my high barrier. Seems like it can really help me start with the right image faster ”`,
          quoteByName: `<a href='https://twitter.com/iximiuz/status/1476571322943787009' target='_blank'>Ivan Velichko - @iximiuz</a>`,
        },
        {
          quoteBody: `“<a href='https://twitter.com/DockerSlim' target='_blank'>@DockerSlim </a> and <a href='https://slim.ai'>http://slim.ai </a> is super impressive! Dan Papandrea, ThePOPCast”`,
          quoteByName: `<a href='https://twitter.com/danpopnyc/status/1427700585600536577'>@danpopnyc</a>`,
        },
       {
          quoteBody: `“Same image but the size difference just blows my mind! 🤯 <a href='https://twitter.com/DockerSlim' target='_blank'>@DockerSlim</a> is really amazing! 🔥 ⚡”`,
          quoteByName: `<a href='https://twitter.com/yankexe/status/1360305349572521984'>@Yankexe</a>`,
        },
      ]"
    />


    <SignUpCtas />
    <SocialSignup />
    <Footer />
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
import SectionVisualCenterHero from "./SectionVisualCenterHero.vue";
import Footer from "./Footer.vue";
import ScrollFeature from "./ScrollFeature.vue";
import Solutions from "./Solutions.vue";

import CaseStudyBanner from "./CaseStudyBanner.vue";
import ReviewCarousel from "./ReviewCarousel.vue";
import Scan from "./Scan.vue";

import SignUpCtas from "./SignUpCtas.vue";
import SocialSignup from "./SocialSignup.vue";
import UnderlineAnimation from "./UnderlineAnimation.vue";

import GlobalConstants from "../GlobalConstants";

export default {
  components: {
    NavLink,
    SectionVisualCenterHero,
    ScrollFeature,
    Solutions,
    CaseStudyBanner,
    ReviewCarousel,
    Scan,
    SignUpCtas,
    SocialSignup,
    UnderlineAnimation,
    Footer,
  },
  props: {
    isMobile: Boolean,
    isSmallBreakpoint: Boolean,
  },
  mounted() {
    document.title =
      "Build Secure Containers Faster | Reduce Supply Chain Risk | Slim.AI";
  },
  data: () => ({
    GlobalConstants,
    lineImg: "/img/underline/Header_blue.png",
  }),
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
};
</script>

<style scoped lang="stylus">
.wrap {
  overflow-wrap: word-break;
}

.wordwrap {
  overflow: wrap;
}

.hero-cloud-sec1 {
  position: absolute;
  top: 610px;
  left: -50px;
  width: 250px;
  height: auto;
}

.home {
  margin: 0px 0px;
  display: block;
}

.hero {
  text-align: center;
  color: #000;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,0.8491771708683473) 0%, rgba(234,234,234,1) 100%);
  padding: 0 0 0 0;
  min-width: 100vw;
 /* background-image: url('/img/background/background-smudge.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover; */
  min-height: 700px;
}
.subtitles{
  text-align: center;
  font-size: 28px;
  margin-top:20px;
}

@media (max-width: $MQMobile) {
  .titleFont {
    font-size: 30px;
  }
}

@media (max-width: $MQMobileNarrow) {
  .titleFont {
    font-size: 30px;
  }
}

@media (max-width: 985px) {
  .hero-cloud-sec1 {
    display: none;
  }
}

@media (min-width: 985.1px) and (max-width: 1199px) {
  .hero-cloud-sec1 {
    top: 750px;
  }
}

@media (min-width: 1199.1px) {
  .hero-cloud-sec1 {
    top: 740px;
  }
}
</style>
