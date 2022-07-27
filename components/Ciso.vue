<template>

  <div aria-labelledby="main-body">
<section class="full-w-banner home">
    <div class="container">
        <div class="wrap">
            <div class="first-content">
                <h1 class="title">Software Supply Chain Security for Containers</h1>
                <p class="sub-title">Reduce your attack surface.</p>
                <a href="/contact" class="btn font-primary bg-light text-uppercase">Contact us</a>
            </div>
            <div class="sec-content">
                <ul>
                    <li>Understand the software in your containers</li>
                    <li>Automatically optimize your containers for security and rid them of vulnerabilities, unnecessary packages, and waste</li>
                    <li>Only ship what you need. No cruft.</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="service-list">
    <div class="container">
        <div class="wrap">
            <div class="tile">
                <figure class="service-item">
                    <div class="figur-icon">
                        <img class="icon" src="/img/know-your-software.svg" alt="Know your software">
                    </div>
                    <figcaption>
                        <h2 class="title">Know your software</h2>
                        <p>Containers can be a black box. Knowing what's in your images and how they're constucted is critical to securing your software supply chain.</p><p>Lift the veil on container construction and composition. Automatically keep track of the packages, vulnerabilities, and security outlook of every image in your ecosystem.</p>
                    </figcaption>
                </figure>
            </div>
            <div class="tile">
                <figure class="service-item">
                    <div class="figur-icon">
                        <img class="icon" src="/img/remove-vulnerabilities.svg" alt="Remove vulnerabilities">
                    </div>
                    <figcaption>
                        <h2 class="title">Remove vulnerabilities</h2>
                        <p>Optimizing and securing containers manually is challenging and time consuming. Integrate Slim with your CI/CD pipelines and registries to optimize your images, remove vulnerabilities, and reduce supply chain risk.</p><p>Automatically improve the security of your containers and relieve pressure on your developers, so they can focus on delivery.</p>
                    </figcaption>
                </figure>
            </div>
            <div class="tile">
                <figure class="service-item">
                    <div class="figur-icon">
                        <img class="icon" src="/img/ship-only-what-you-need.svg" alt="Ship only what you need">
                    </div>
                    <figcaption>
                        <h2 class="title">Ship only what's needed</h2>
                        <p>Unnecessary code inside containers increases software configuration complexity, container attack surface, and supply chain risk.</p> <p>Remove excess or risky software from containers to ensure that only the code required by your app makes it to production.</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</section>
<section class="how-we-fit">
    <div class="container">
        <div class="wrap">
            <div class="align-center">
                <h2 class="title">More velocity, less risk with Slim</h2>
            </div>
            <div class="how-we-fit-tab-external">
                <ul class="how-we-fit-tab-list">
                     <li v-bind:class="with_slim_ai?'active':''">
                        <span class="link" @click="changeSpanLinkFalse()">Before Slim.AI</span>
                    </li>
                    <li  v-bind:class="!with_slim_ai?'active':''">
                        <span class="link" @click="changeSpanLinkTrue()">After Slim.AI</span>
                    </li>
                </ul>
                <div class="how-we-fit-tab-details">
                    <div class="tab-detail" v-if="with_slim_ai">
                        <div class="img-external">
                            <img class="img-fluid" src="/img/BeforeSlimAI.png" alt="BeforeSlimAI">
                        </div>
                        <div class="detail-external border-red">
                            <p>Today’s software supply chain security requirements make delivering secure containers to production challenging. The high rate of change and lack of visibility in the open source code that we’re all using consistently introduces new vulnerabilities and threats. This results in a high friction development environment, delayed release schedule, large attack surface, and lower value for the end users overall.</p>
                        </div>
                    </div>
                    <div class="tab-detail" v-else>
                        <div class="img-external">
                            <img class="img-fluid" src="/img/AfterSlimAIs.png" alt="AfterSlimAI">
                        </div>
                        <div class="detail-external border-green">
                            <p>With Slim, you deploy and run only trusted, secure containers - faster. Keep track of your software supply chain with unparalleled visibility into the composition of your containers. Continuously optimize your containers, remove vulnerabilities, complexity and waste.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="align-center">
                <a href="" class="btn-2 font-light bg-primary text-uppercase">Download One-Pager</a>
            </div>
        </div>
    </div>
</section>
<section class="testimonial">
    <div class="container">
        <div class="wrap">
            <div class="testimonial-item">
                <figure class="tile">
                    <div class="figure-img">
                        <img class="figure-testimonial" src="/img/testimonial.jpg" alt="testimonial">
                    </div>
                    <figcaption>
                        <h3 class="head">What Developers Are Saying About Slim.AI</h3>
                        <div class="testimonial-details">
                            <img class="quotation-icon" src="/img/quotation.svg" alt="quotation">
                            <p>At Priceline, we’ve already begun by working with innovative startups. Startups like Slim.AI and others are pushing the boundaries of cloud-native and are likely to change the way we do modern software development at scale. Partnering with these new companies is critical for any enterprise technology firm to foster innovation.”</p>
                        </div>
                        <div class="logo-external">
                            <img class="logo" src="/img/priceline.svg" alt="priceline">
                        </div>
                        <span class="more">Marty Brodbeck  |  CTO of Priceline</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</section>
<section class="see-how-it-works">
    <div class="container">
        <div class="wrap">
            <div class="figure" style="background-image: url(/img/see-how-it-works.svg);">
                <div class="figcaption">
                    <h3 class="title">See how it works</h3>
                    <p>Find out how your team can use Slim.AI to create production-ready containers and minimize digital supply chain risk.</p>
                    <a href="/contact" class="btn font-primary bg-light text-uppercase">Contact us</a>
                    
                </div>
            </div>
        </div>
    </div>
</section>

    <Content class="theme-default-content custom" />

    
    <Footer />
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import SectionVisualRight from "@theme/components/SectionVisualRight.vue";
import SectionVisualLeft from "@theme//components/SectionVisualLeft.vue";
import Founders from "@theme/components/Founders.vue";
import Investors from "@theme/components/Investors.vue";
import Career from "@theme/components/Career.vue";
import Subscribe from "@theme/components/Subscribe.vue";
import Footer from "@theme/components/Footer.vue";
import BannerLine from "@theme/components/UnderlineAnimation.vue";
import ReviewCisoCarousel from "@theme/components/ReviewCisoCarousel.vue";
import FeaturedAdvisors from "@theme/components/FeaturedAdvisors.vue";
import RelatedArticlesCompany from "@theme/components/RelatedArticlesCompany.vue";
import SocialSignup from "@theme/components/SocialSignup.vue";
import SignUpCtas from "@theme/components/SignUpCtas.vue";
import UnderlineAnimation from "@theme/components/UnderlineAnimation.vue";

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
    ReviewCisoCarousel,
    FeaturedAdvisors,
    RelatedArticlesCompany,
    UnderlineAnimation,
    SocialSignup,
    SignUpCtas,
  },
  mounted() {
    document.title = "Solutions | Slim.AI";
  },
  data: () => ({
    content: "Meet up with the Slim.AI team at one of our nationwide events.",
    with_slim_ai: true
  }),
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    
     
  },
   methods: {
    changeSpanLinkFalse() {
        this.with_slim_ai = true;
    },
    changeSpanLinkTrue() {
        this.with_slim_ai = false;
    },
   }
  // background-color:#8AC9ED;
};
</script>

<style lang="stylus" scoped>

* {margin: 0;padding: 0;outline: none;-webkit-box-sizing: border-box;box-sizing: border-box;}
*,:after,:before {-webkit-box-sizing: border-box;box-sizing: border-box;}
.img-fluid{max-width: 100%;width: 100%;}
img{vertical-align: top;}
html {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;line-height: 1;font-size: 16px;}
.main-body {font: 200 16px/130% 'hk_grotesk';width: 100%;max-width: 100%;padding: 0;margin: 0;}
ul, ol{margin: 0;padding: 0;list-style: none;}
h1.title{font: bold 40px/130% 'hk_grotesk' !important; color: #fff;}
p{font: 400 14px/20px 'hk_grotesk'; color: #fff;}
a{text-decoration: none;}
.text-uppercase{text-transform: uppercase;}
.align-center{text-align: center;}
.font-primary{color: #1F6BF1;}
.bg-light{background: #fff;}
.font-light{color: #fff;}
.bg-primary{background:  #1F6BF1;}
.btn{font: 510 13px/32px 'hk_grotesk';padding: 8px 20px;border-radius: 4px;display: inline-block;}
.btn-2{padding: 8px 17px;border-radius: 4px;display: inline-block;font: bold 14px/32px 'hk_grotesk';}
.btn.white{background: #fff;}
.container{max-width: 1170px;width: 100%;padding: 0 15px; margin: 0 auto;}

.full-w-banner{width: 100%; background-color: #1F6BF1;}
.full-w-banner .title{margin: 0 0 25px;}
.full-w-banner .title, .full-w-banner p{letter-spacing: 1px;}
.full-w-banner.home{padding: 55px 0 55px 0;}
.full-w-banner.home .wrap{display: flex;justify-content: space-between;}
.full-w-banner.home p{color: #fff;font: 400 22px/130% 'hk_grotesk';}
.full-w-banner .first-content {max-width: 476px;}
.full-w-banner .sec-content{max-width: 402px;}
.full-w-banner .sec-content ul{margin: 5px 0 0 0;font: 400 22px/130% 'hk_grotesk';letter-spacing: 1px;color: #fff;list-style: disc;}
.full-w-banner .sec-content ul li{margin: 0 0 15px 0;font: 400 22px/130% 'hk_grotesk'}
.full-w-banner .btn{margin: 25px 0 0 0;}
.service-list{padding: 68px 0 32px 0;}
.service-list .wrap{display: flex;flex-wrap: wrap;margin: 0 -35px;}
.service-list .tile{width: 33.3%;padding: 0 35px;}
.service-list .figur-icon{margin: 0 0 25px 0;}
.service-list .figur-icon .icon{height: 60px;}
.service-list .service-item .title{font: 500 28px/36px 'hk_grotesk' !important; color: #000;margin: 0 0 27px 0;}
.service-list .service-item p{margin: 0 0 10px 0; line-height: 20px; color: #000;}
.service-list .service-item p:last-child{margin: 0;}
.how-we-fit{padding: 32px 0;}
.how-we-fit .title{font: 500 40px/48px 'hk_grotesk'!important;color: #000;text-align: center;}
.how-we-fit-tab-external{margin: 30px 0 37px 0;padding: 33px;border-radius: 10px; -webkit-box-shadow: 0px 0px 3px 2px rgba(229,230,237,1);-moz-box-shadow: 0px 0px 3px 2px rgba(229,230,237,1);box-shadow: 0px 0px 3px 2px rgba(229,230,237,1);}
ul.how-we-fit-tab-list {display: flex;flex-wrap: wrap;}
ul.how-we-fit-tab-list li{margin: 0 25px 20px 0;}
ul.how-we-fit-tab-list li .link{cursor: pointer;font: 500 16px/20px 'hk_grotesk'; color: #1F6BF1; border: solid 1px #1F6BF1; min-width: 131px;display: inline-block;text-align: center;padding: 17px 5px;border-radius: 999em;}
ul.how-we-fit-tab-list li:last-child{margin-right: 0;}
ul.how-we-fit-tab-list li:last-child .link{margin: 0;}
ul.how-we-fit-tab-list li.active .link{background: #1F6BF1;color: #fff;}
.how-we-fit-tab-details .tab-detail{display: flex;flex-direction: column; padding-top:10px;}
.how-we-fit-tab-details .img-external {max-width: 806px; margin: auto;}
.how-we-fit-tab-details .detail-external {border: solid 3px #fff;border-radius: 15px;padding: 15px;margin: 15px auto 0 auto;max-width: 985px;}
.how-we-fit-tab-details .detail-external p{ color:#000; margin-bottom:0px;}
.how-we-fit-tab-details .detail-external.border-red{border: solid 3px #FD8E81}
.how-we-fit-tab-details .detail-external.border-green{border: solid 3px #67AC5B}
.testimonial{padding: 32px 0 50px 0; display:none;}
.testimonial-item .tile{display: flex;align-items: center;border-radius: 10px;-webkit-box-shadow: 0px 0px 3px 2px rgb(229 230 237);-moz-box-shadow: 0px 0px 3px 2px rgba(229,230,237,1);box-shadow: 0px 0px 3px 2px rgb(229 230 237);}
.testimonial-item .tile .head{font: 200 32px/48px 'hk_grotesk'; color: #000;margin: 0 0 30px 0}
.testimonial-item .tile .testimonial-details{margin: 0 0 35px 0; position: relative;}
.testimonial-item .tile .testimonial-details .quotation-icon {position: absolute;left: -44px;top: -17px;}
.testimonial-item .tile p{font: 200 20px/30px 'hk_grotesk'; color: #000;}
.testimonial-item .tile .logo {max-height: 23px;}
.testimonial-item .tile .more{font: 200 14px/22px 'hk_grotesk'; color: #000;}
.testimonial-item .tile .figure-img .figure-testimonial{width: 285px;border-radius: 8px;}
.testimonial-item .tile figcaption {display: flex;flex-direction: column;padding: 60px 60px 60px 80px;;}
.see-how-it-works{padding: 50px 0 30px 0;}
.see-how-it-works .figure{border-radius: 9px;overflow: hidden;display: flex;justify-content: center;align-items: center;padding: 85px 0 63px 0;background-size: cover;background-position: center;background-color: #1F6BF1;}
.see-how-it-works .figcaption{width: 70%;margin: auto; text-align: center;}
.see-how-it-works .figcaption .title{font: 500 40px/48px 'hk_grotesk' !important;letter-spacing: 1px; color: #fff;margin: 0 0 30px 0;}
.see-how-it-works .figcaption p{font: 20px/30px 'hk_grotesk';letter-spacing: 2px; color: #fff;}
.see-how-it-works .figcaption .btn{margin: 30px 0 0 0;padding: 8px 20px;}

@media(max-width: 980px){
    .full-w-banner.home {padding: 60px 0 60px 0;}
    .full-w-banner.home .wrap{flex-direction: column;}
    .full-w-banner .first-content {max-width: 80%;}
    .full-w-banner .sec-content {max-width: 100%;}
    .service-list .tile{margin: 0 0 50px 0;width: 50%;}
    .service-list .tile:last-child{margin: 0;}
    .testimonial-item .tile{flex-direction: column;padding: 40px 0 0 0;}
    .testimonial-item .tile figcaption{padding: 40px 40px 40px 60px;}
    .full-w-banner .sec-content ul{ margin: 20px 0 0 30px;}
    .full-w-banner .btn {margin: 40px 0 0 0;}
    .full-w-banner .sec-content ul{margin-top: 40px;}
}
@media(max-width: 720px){
    .service-list .tile{width: 100%;}
    .full-w-banner .title{font-size: 34px;}
    .full-w-banner.home p{font-size: 20px;}
    .full-w-banner .sec-content ul{font-size: 18px;}
    .service-list { padding: 40px 0 20px 0;}
    .service-list .service-item .title{font-size: 26px;margin: 0 0 20px 0;}
    .how-we-fit .title{font-size: 34px;}
    .testimonial-item .tile .head{font-size: 26px;}
    .testimonial-item .tile p{font-size: 18px;}
    .see-how-it-works .figcaption .title{font-size: 34px;}
    .see-how-it-works .figcaption p{font-size: 18px;line-height: 26px;}
}
@media(max-width: 480px){
    .full-w-banner.home {padding: 40px 0;}
    .full-w-banner .btn {margin: 15px 0 0 0;}
    .full-w-banner .title {margin: 0 0 10px;}
    .service-list .figur-icon { margin: 0 0 15px 0;}
    .service-list .figur-icon .icon {height: 44px;}
    .service-list .tile { margin: 0 0 30px 0;}
    .full-w-banner .title{font-size: 26px;}
    .how-we-fit-tab-external{margin: 20px 0 20px 0;padding: 20px;}
    .testimonial-item .tile {padding: 20px 0 0 0;}
    .testimonial-item .tile figcaption {padding: 20px 20px 20px 40px;}
    .testimonial-item .tile .testimonial-details .quotation-icon {left: -29px;top: -5px;width: 25px;}
    .full-w-banner.home p{font-size: 18px;}
    .how-we-fit, .testimonial  {padding: 40px 0 20px 0;}
    .see-how-it-works{padding: 40px 0;}
    .full-w-banner .sec-content ul{font-size: 16px;margin-top: 30px;}
    .service-list .service-item .title{font-size: 24px;margin: 0 0 10px 0;}
    .how-we-fit .title{font-size: 24px;line-height: 34px;}
    .testimonial-item .tile .head{font-size: 24px;line-height: 34px;}
    .testimonial-item .tile .testimonial-details {margin: 0 0 15px 0;}
    .testimonial-item .tile p{font-size: 16px;}
    .see-how-it-works .figcaption .title{font-size: 26px;line-height: 34px;margin: 0 0 15px 0;}
    .see-how-it-works .figure{padding: 40px 20px 40px 20px;}
    .see-how-it-works .figcaption p{font-size: 16px;}
    .see-how-it-works .figcaption{width: 100%;}
    ul.how-we-fit-tab-list li .link{padding: 14px 5px;}
    ul.how-we-fit-tab-list li {margin: 0 20px 20px 0;}
}

</style>
