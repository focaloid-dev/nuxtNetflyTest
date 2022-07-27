<template>
  <div>
    <div class="blog-post-container mb-6">
      <h1>Request Early Access Invite</h1>
      <p>Thanks for your interest in our platform. Complete this form to get an Early Access invite link.</p>
      <div id="form"></div>
    </div>
    <Subscribe />
    <Footer />
  </div>
</template>
<script>
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";

import Subscribe from "./Subscribe.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Subscribe,
    Footer,
  },
  mounted() {
    createWidget("rfEPDehq", {
      container: document.querySelector("#form"),
      height: 500,
    });
  },
};
</script>
<style scoped lang="stylus">
#form {
  min-height: 500px;
}

.blog-post-container {
  margin-top: 80px;
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

h1 {
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;
  font-family: 'AvantGardeGothicITCW01Bd', sans-serif;
  word-break: normal;
  margin: 1rem 0 0.5rem;
}

p {
  color: rgba(0, 0, 0, 0.54);
  font-size: 1rem;
}
@media (max-width: $MQMobileNarrow) {
  #form  {
    padding-top: 90px;
  }
}
</style>
