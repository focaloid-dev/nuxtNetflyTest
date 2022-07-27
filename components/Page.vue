<template>
  <div>
    <main class="fill-height blog-details-wrapper mx-auto">
    <Banner
      v-if="$page.path.startsWith('/docs')"
      title="Docs"
      backgroundColor="#FB8E81"
    />
      <div
        class="blog-post-wrap fill-height mx-auto"
        :class="{ docsWrapper: $page.path.startsWith('/docs') }"
      >
        <Sidebar
          :sidebarItems="sidebarItems"
          :scrollPosition="scrollPosition"
          v-if="$page.path.startsWith('/docs')"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-offset="300"
        />
        <article>
          <slot name="top" />
          <Content class="theme-default-content page-content-container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
           />
          <slot name="bottom" />
        </article>
        <PageEdit />
        <PageNav v-bind="{ sidebarItems }" />
      </div>
      <span id="mc_signupblog"></span>
      <div class="blog-post-container">
        <SignUpCtas />
        <SocialSignup />
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import PageEdit from "./PageEdit.vue";
import PageNav from "./PageNav.vue";
import Subscribe from "./Subscribe.vue";
import SocialSignup from "./SocialSignup.vue";
import Footer from "./Footer.vue";
import SignUpCtas from "./SignUpCtas.vue";
import Sidebar from "./Sidebar.vue";
import Banner from "./Banner.vue";

import AOS from "aos";

export default {
  components: { PageEdit, PageNav, Footer, SignUpCtas, SocialSignup, Sidebar,
  Banner },
  props: ["sidebarItems"],
  data(){
    return {
      scrollPosition: null
    }
  },
  mounted() {
    const cont = document.getElementsByClassName("page-content-container")[0];
    const img = cont.children[0].children[0];
     window.addEventListener('scroll', this.updateScroll);
    AOS.init({ disable: window.innerWidth < 768});
    window.scrollTo(600,0);
    //  console.log("IMG:::", img.getAttribute('src'), img.nodeName);
    if (img.getAttribute("src") !== null && window.screen.width > 767) {
      img.setAttribute("data-aos", "fade-up");
      img.setAttribute("data-aos-duration", "1000");
      img.setAttribute("data-aos-delay", "1000");
       AOS.init({ disable: window.innerWidth < 768});
    }
  },
  methods:{
      updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
};
</script>

<style lang="stylus">
html{
  scroll-behavior:smooth;
  overflow-x:hidden;
 }
.blog-post-container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}


.page-content-container {
  font-family: "hk_grotesk";
     @media (max-width: 900px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  >p {
    margin-bottom: 35px;
    font-size: 18px;
    color: #000;
    font-weight: 400;
    font-family: "hk_grotesk";
    @media (max-width: 767px ){
      margin-bottom: 25px;
    }

    &:last-child {
      margin-bottom: 0;
    }
    a {
      color: #1E7CAE;
      text-decoration: underline;
      cursor: pointer;
    }
    &:first-child {
      font-size: 14px;
      font-weight: 300;
      line-height: 22px;
      text-align: center;
      margin-bottom: 14px;
       @media (max-width: 767px){
         margin-top: 0;
       }
    }
  }
   #terms-conditions {
    font-size: 56px;
    line-height: 1.1;
    font-weight: 500;
    text-align: center;
    margin-bottom: 94px;
    @media (max-width: 767px){
      margin-bottom: 35px;
      font-size: 47px;
    }

    a {
      display: none;
    }
  }
  >h1 , >h2, >h3{
    font-size: 28px;
    font-weight: 500;
    line-height: 34px;
    strong {
      font-weight: inherit;
    }
    a {
      font-size: inherit;
      font-weight: inherit;
    }
  }

  pre[class*="language-"],
  pre {
    padding: 30px 30px;
    margin-bottom: 35px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 25px;
    margin-top: 0;
    font-family: "hk_grotesk";
  }

   >h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 34px;
    margin-bottom: 0px;

    + p {
      margin-bottom: 25px;
      font-weight: 400;

      a {
        color: #000;
        text-decoration: none;
        font-weight: 400;
      }
    }
  }

  p,img,
  ul,ol,
  h1,h2,h3,h4,h5,h6,
  span,a,pre,
  hr,
  :not(pre) > code[class*="language-"],
  pre[class*="language-"],
  .footercard, figcaption, .tutorial-steps,
  blockquote {
    max-width: 841px;
    margin-left: auto;
    margin-right: auto;
    font-family: "hk_grotesk";
  }
  figcaption{
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    opacity: 0.5;
    margin-bottom: 50px;
    // margin-top: -19px;
  }
  ol > li, ul > li {
    font-size: 18px;
  }
  >p {
    img {
      background: #fff;
      @media (max-width: 767px) {
        display: none;
      }
    }
    &:nth-child(2) {
      img {
        @media (max-width: 767px) {
          display: block;
        }
      }
    }
  }
  hr {
    display: none;
  }
  > p {
    img {
      border-radius: 20px;
      width: 100%;
      box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
      -webkit-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
      -moz-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
    }
  }

  p {
    &:nth-child(2) {
    img {
      position: relative;
      margin-top: -145px;
      @media (max-width: 767px) {
        margin-top: -82px;
      }
      }
    }
  }
.tutorial-steps{
    background-color: #ECF8FE;
    padding: 34px 65px 34px 64px;
    border-radius: 20px;
    margin-bottom: 35px;
    h3{
      font-size: 28px;
      font-weight: 500;
      line-height: 34px;
      margin-bottom: 20px;
    }
    p{
      margin-bottom: 20px;
    }
    ol {
    li {
      font-size: 18px;
      line-height: 1.5;
      margin: 0 0 15px 0;
      font-weight: 400;
      padding-left: 10px;
      margin-left: 7px;
      &:last-child {
        margin-bottom: 0;
      }
      a{
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 767px){
      padding: 34px 21px 44px 27px;
    }
}


  blockquote {
    padding: 34px 65px;
    border-top: 1px solid rgb(232 233 239);
    border-bottom:1px solid rgb(232 233 239);
    position: relative;
    margin-bottom: 35px;
    @media (max-width: 767px){
      padding: 80px 0 34px;

    }
    p {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 13px;
      line-height: 1.4;
      &:last-child{
        magin-bottom: 0;
        font-weight: 700;
        font-size: 19px;
      }
    }
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 41px;
      width: 30px;
      height: 25px;
      display: inline-block;
      background-image: url("/img/icons/quote-icon.png");
      background-size: 30px 25px;
    }
  }
}
.docsWrapper{
  position: relative;
  display: flex;
  max-width: 1190px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 91px;
   @media (max-width: 1366px) {
    max-width: calc(100% - 46px);
   }

   @media (max-width: 991px) {
   flex-direction: column;
    padding-top: 0px;
    .select-wrapper {
      .col{
        padding: 0;
      }
    }
   }
    @media (max-width: 767px) {
    max-width: calc(100% - 6px);
    .v-input__slot{
      margin-bottom: 20px;
    }

   }

p,img,
  ul,ol,
  h1,h2,h3,h4,h5,h6,
  span,a,pre,
  hr,
  :not(pre) > code[class*="language-"],
  pre[class*="language-"],
  .footercard,
  .custom-block.tip,
  iframe,
  div,
  blockquote {
    max-width: 775px;
    margin-left: auto;
     @media (max-width: 991px) {
        margin-right: auto;
     }
  }
  h1{
    font-size: 44px;
    line-height: 48px;
    font-weight: 500;
    margin-bottom: 27px;
  }
  p{
      img{
        background-color: transparent;
        box-shadow: unset;
      }
  }

  #this-is-the-introduction-to-a-bulleted-list{
    padding-top: 35px;
      border-top: 1px solid #D8D8D8;
      margin-bottom: 20px;
  }
  article{
     #take-a-look-at-this-terminal-below{
          margin-bottom: 20px;
        }
        #watch-us-solve-it-in-this-video{
          margin-bottom: 35px;
        }
    ol{
      margin-bottom: 35px;
    }
    ul{
      margin-bottom: 35px;
      li{
        font-size: 18px;
        line-height: 1.2;
        font-weight: 400;
        margin: 0 0 10px;
        padding-left: 20px;
            @media (max-width: 767px) {
              padding-left: 0;
            }
      }
    }
    div{
      iframe{
        width: 100%;
        border-radius: 20px;
        min-height: 418px;
        border: none;
        margin-bottom: 50px;
          @media (max-width: 767px) {
        min-height: 270px;

          }
      }
      button{
              padding: 17px 30px;
              background-color: #1f6bf1;
              border-radius: 4px;
              color: #fff;
              font-size: 13px;
              line-height: 1.2;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.6px;
              width: 185px;
              text-align: center;
              display: inline-block;
            }
    }

    .custom-block.tip{
      padding: 53px 50px;
      background-color: #E5E6ED;
      border-radius: 10px;
      border-left: 5px solid #FD8E81;
      margin-bottom: 35px;
          @media (max-width: 767px) {
            padding: 40px 30px;
          }
      p{
          margin-bottom: 0;
          font-size: 24px;
          font-weight: 400;
          line-height: 36px;
       }
    }
     @media (max-width: 767px){
    img{
      display: block;
      border-radius: 0;
    }
     }
    pre[class*="language-"],
      pre {
               margin-bottom: 50px;
               padding: 20px 15px;
                @media (max-width: 767px){
                 display: block;
               }
          }
    #click-through-to-find-out-more{
      margin-bottom: 20px;
    }
  }


}
 .language-powershell{
      pre[class*="language-"]{
        margin-bottom: 10px !important;
      }
    }

  @media screen and (max-width: 767px) {
    [data-aos] {
      pointer-events: auto !important;
    }

    html:not(.no-js) [data-aos^=fade][data-aos^=fade] {
      opacity: 1 !important;
    }

    html:not(.no-js) [data-aos=fade-up] {
      transform: none !important;
    }
}
h1 .header-anchor, h2 .header-anchor, h3 .header-anchor, h4 .header-anchor, h5 .header-anchor, h6 .header-anchor{
  left: -32px
}
</style>
