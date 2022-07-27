<template>
  <div class="page home">
    <div class="hero">
      
    </div>
    <SignUpCtas />
    <SocialSignup />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

import SignUpCtas from "../components/SignUpCtas.vue";
import SocialSignup from "../components/SocialSignup.vue";

import GlobalConstants from "../GlobalConstants";

export default {
  components: {
    
    SignUpCtas,
    SocialSignup,
   
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
    lineImg: "~assets/img/underline/Header_blue.png",
  }),
  computed: {
    data() {
      return none;
    },
  },
};
</script>

<style>
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
