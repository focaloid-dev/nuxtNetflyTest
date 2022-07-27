<template>
  <div aria-labelledby="main-title">
    <section class="team-banner">
      <div class="container">
        <div class="d-flex team-wrapper">
          <div class="d-flex flex-column col-xs-12 col-md-12">
            <h4>DEV OPS FOR DEVELOPERS</h4>
            <h2 class="text-center">
              We give developers the power to build better cloud-native
              applications with less friction, complexity, and waste.
            </h2>
            <BannerLine
              :hoverOnly="false"
              lineImg="/img/underline/blueline.png"
            />
          </div>
        </div>
      </div>
    </section>
    <SectionVisualRight
      headline="Our Mission"
      title="We're redefining how DevOps is done."
      imageUrl="/img/mission.png"
      subtitle="Imagine a future where you are able to build and run your cloud-native apps without getting a Ph.D in infrastructure. We're building that future, and we've only just begun. "
    />

    <div class="mission-slider">
      <ReviewCarousel
        title="Team Slim Talks Company Culture"
        :reviews="[
          {
            quoteBody:
              '“I enjoy designing, developing, and delivering technical solutions that open up the container ecosystem for engineers of all levels.”',
            Designation: '~Developer',
            board: 'Headphone Aficionado',
          },
          {
            quoteBody:
              '“At Slim, I am encouraged to grow as an individual, which then contributes to the growth of the company. Knowing that the team values my happiness is incredible.”',
            Designation: '~Product Designer',
            board: 'Digital Nomad',
          },
          {
            quoteBody:
              '“Great tech, great people, great leadership. What more could you ask for?”',
            Designation: '~Developer',
            board: 'Competitive Salsa Dancer',
          },
          {
            quoteBody:
              '“Slim allowed me to engage in real business situations and critical projects. I have grown more confident with my contributions by working with leaders and mentors who encourage me to learn and excel.”',
            Designation: '~Growth Intern',
            board: 'Future Boat Captain',
          },
          {
            quoteBody:
              '“I enjoy working at Slim because we are solving interesting container-related challenges as we aim to ease friction points as companies adopt cloud native technologies.”',
            Designation: '~Developer',
            board: 'Owner of Ninja Cat',
          },
          {
            quoteBody:
              '“Kyle is the chillest boss I’ve ever had.”',
            Designation: '~Developer',
            board: 'Super Gopher Avatar',
          },
        ]"
      />
    </div>

    <Founders />
    <FeaturedAdvisors />
    <Investors />
    <RelatedArticlesCompany class="mt-8"/>

    <Content class="theme-default-content custom" />

    <span id="mc_signup"></span>
  <SignUpCtas/>
    <div class="blog-post-container">
        <SocialSignup />
      </div>
    <Footer/>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
import SectionVisualRight from "./SectionVisualRight.vue";
import SectionVisualLeft from "./SectionVisualLeft.vue";
import Founders from "./Founders.vue";
import Investors from "./Investors.vue";
import Career from "./Career.vue";
import Subscribe from "./Subscribe.vue";
import Footer from "./Footer.vue";
import BannerLine from "./UnderlineAnimation.vue";
import ReviewCarousel from "./ReviewCarousel.vue";
import FeaturedAdvisors from "./FeaturedAdvisors.vue";
import RelatedArticlesCompany from "./RelatedArticlesCompany.vue";
import SocialSignup from "./SocialSignup.vue";
import SignUpCtas from "./SignUpCtas.vue";


export default {
  components: {
    NavLink,
    Founders,
    Investors,
    Career,
    Subscribe,
    Footer,
    SectionVisualLeft,
    SectionVisualRight,
    BannerLine,
    ReviewCarousel,
    FeaturedAdvisors,
    RelatedArticlesCompany,
    SocialSignup,
    SignUpCtas
  },
  mounted() {
    document.title = "Our Team | Slim.AI";
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
  // background-color:#8AC9ED;
};
</script>

<style lang="stylus" scoped>
.team-banner{
        background-color: #FED984;
        font-family: "hk_grotesk";
        padding: 130px 0 118px;
        @media (max-width: 767px){
        padding: 80px 0px;
        }
        .team-wrapper{
          max-width: 1015px;
          margin: 0 auto;
          position: relative;
          h4{
            font-size: 28px;
            font-weight: 700;
            line-height 1.2;
            text-align: center;
            color: #1E7CAE;
            margin: 0;
            font-family: "Max Sans";
          }
          h2 {
            font-size: 56px;
            font-weight: 500;
            line-height 1;
            margin: 25px 0 0;
            @media (max-width: 767px){
              font-size: 44px;
            }
          }
          span{
                height: 29px;
                display: block;
                width: 92%;
                position: relative;
                margin: 0 auto;

          }

        }

}
.mission-slider{
  max-width: 1440px;
  margin: 0 auto;
}

@media (max-width: $MQMobile) {
  .titleFont {
    font-size:30px;
  }
}

@media (max-width: $MQMobileNarrow) {
  .titleFont {
    font-size:30px;
  }
}
</style>
