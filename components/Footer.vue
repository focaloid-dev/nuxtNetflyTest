<template>
  <section class="footer">
    <div class="appbar">
      <v-row class="justify-space-between" align="center" justify="center">
        <v-col cols="12" md="" class="
            justify-center justify-md-start
            d-flex
            flex-column
            text-center text-md-left
          ">
          <span class="legalLinks" :class="isBlogView() ? 'blockLinks' : null">
            <span class="pl-2 pr-2 slimfont18">
              <a href="/terms-of-use.html" target="_blank">Terms &#38; Conditions</a>
            </span>
            <span class="pl-2 pr-2 slimfont18">
              <a href="/privacy-policy.html" target="_blank">Privacy Policy</a>
            </span>
            <span class="pl-2 pr-2 slimfont18">
              <a href="/company" target="_blank">Our Company</a>
            </span>
            <span class="pl-2 pr-2 slimfont18">
              <a href="/contact" target="">Contact Us</a>
            </span>
          </span>
        </v-col>
        <v-col cols="12" md="2" class="justify-center text-center" order="first" order-md="0">
          <routerLink aria-label="Slim.AI Home Page" :to="'index'">
            <img :aria-label="GlobalConstants.slimAiLogo" src="~assets/img/logo/Slim Bug@2x.png" height="52"
              class="slim-va-middle" />
          </routerLink>
        </v-col>
        <v-col cols="12" md="" class="justify-end text-center text-md-right">
          <div>
            <a :aria-label="GlobalConstants.twitchAriaLabel" :href="GlobalConstants.socialUrlTwitch" target="_blank"
              class="img-nav-item">
              <InlineSvg src="~assets/img/twitch.svg" height="24" class="mr-5 slim-va-middle" alt="" />
            </a>
            <a :aria-label="GlobalConstants.twitterAriaLabel" :href="GlobalConstants.socialUrlTwitter"
              class="img-nav-item" target="_blank">
              <InlineSvg src="/img/twitter.svg" height="24" class="mr-5 slim-va-middle" alt="" />
            </a>
            <a :aria-label="GlobalConstants.linkedinAriaLabel" :href="GlobalConstants.socialUrlLinkedin"
              class="img-nav-item" target="_blank">
              <InlineSvg src="/img/linkedin.svg" height="24" class="mr-5 slim-va-middle" alt="" />
            </a>
            <a :aria-label="GlobalConstants.githubAriaLabel" :href="GlobalConstants.socialUrlGithub" target="_blank"
              class="img-nav-item">
              <InlineSvg src="/img/github.svg" height="24" class="mr-5 slim-va-middle" alt="" />
            </a>
            <a :aria-label="GlobalConstants.discordAriaLabel" :href="GlobalConstants.socialUrlDiscord" target="_blank"
              class="img-nav-item">
              <InlineSvg src="/img/discord.svg" height="24" class="mr-5 slim-va-middle" alt="" />
            </a>
            <a :aria-label="GlobalConstants.youtubeAriaLabel" :href="GlobalConstants.socialUrlYoutube"
              class="img-nav-item" target="_blank">
              <v-icon large>mdi-youtube</v-icon>
            </a>
            <!-- <a
              :href="GlobalConstants.socialUrlFacebook"
              class="img-nav-item ml-1"
              target="_blank"
            >
              <v-icon medium color="grey darken-3">mdi-facebook</v-icon>
            </a> -->
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
// import PageEdit from '@theme/components/PageEdit.vue'
// import PageNav from '@theme/components/PageNav.vue'
import InlineSvg from "vue-inline-svg";
import GlobalConstants from "../GlobalConstants";

export default {
  components: { InlineSvg },
  props: ["pageName"],
  methods: {
    isBlogView() {
      return this.pageName === "blog";
    },
  },
  data: () => ({
    GlobalConstants,
  }),
};
</script>

<style scoped lang="stylus">
.footer {
  background-color: $btnSecondaryHoverColor;
  padding: 24px 60px;
}

.slimboldfont16 {
  font-size: 16px;
  font-weight: normal;
}

.slimfont18 {
  font-size: 13px;
  font-weight: 700;

  a {
    color: $black;
    text-transform: uppercase;
    padding-bottom: 3px;
    border-bottom: 1px solid #000000;
    letter-spacing: 0.6px;

    &:hover {
      color: $textColor;
    }
  }
}

a.img-nav-item {
  text-decoration: none;
}

.img-nav-item:hover {
  color: black;
  cursor: pointer;
}

.slim-va-middle {
  vertical-align: middle;
}

a.text-nav-item {
  text-decoration: none;
}

a.text-nav-item:hover {
  color: #373A36;
  text-decoration: underline;
  cursor: pointer;
}

a.img-nav-item {
  text-decoration: none;

  i {
    color: $btnPrimaryBgColor !important;
  }

  svg, svg path {
    fill: $btnPrimaryBgColor !important;
  }

  &:hover {
    i {
      color: $blueBgColor !important;
    }

    svg, svg path {
      fill: $blueBgColor !important;
    }
  }
}

.colorDark {
  color: #444444 !important;
}

.colorGreyed {
  color: #707070 !important;
}

.colorDark2 {
  color: #373A36 !important;
}

.blockLinks {
  display: block;
  margin-top: 8px;
}

@media (max-width: $MQMobile) {
  .footer {
    padding: 2rem 2rem 3rem 2rem;
  }
}

@media (max-width: $MQMobileNarrow) {
  .footer {
    padding: 1rem 1rem 2rem 1rem;
  }
}

@media (max-width: 1440px) {
  .legalLinks {
    display: block;
  }
}
</style>
