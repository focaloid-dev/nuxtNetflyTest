<template>
  <v-app id="inspire" class="">

    <!-- Note - please do not use <main> elements in child components -->
    <section class="bnr_blu_cnt">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="main_title">Let’s Connect</h1>
            <h3 class="subtitles">
              We’re ready to build something awesome together.
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section class="section-2-banner">
      <div class="section-2-container">
        <div class="section-2-l">
          <div class="section-2-title">
            <div class="icon">
              <img src="/img/scan/contact.svg" alt="" class="icons" />
            </div>
            How can we help?
          </div>

          <div class="section-2-container-content">
            <div>
              <p>
                Slim.AI is on a mission to help teams build secure containers,
                faster.
              </p>
              <p>
                Whether you’re interested in how our Slim Solutions can help
                your organization, you want to see a demo of what we’re working
                on, or you just want to chat, send us a message.
              </p>
              We’d love to connect!
            </div>
          </div>
        </div>

        <div class="section-2-container-form" v-if="!is_submitted">
          <form @submit.prevent="handleSubmit" fluid>
            <v-text-field
              class="texts"
              ref="badge_url"
              label="Full Name"
              v-model="user.fullname"
              outlined
              color="black"
              required
            >
            </v-text-field>
            <v-text-field
              class="texts"
              ref="badge_url"
              label="Company"
              v-model="user.company"
              outlined
              color="black"
              required
            >
            </v-text-field>

            <v-select
              v-model="user.position"
              label="Position "
              :items="user.positions"
              outlined
              color="black"
              required
            >
            </v-select>
            <v-text-field
              class="texts"
              ref="badge_url"
              label="Job Function"
              v-model="user.job_function"
              outlined
              color="black"
              v-if="user.position === 'Other'"
            >
            </v-text-field>

            <v-text-field
              :error-messages="emailError"
              class="texts"
              ref="badge_url"
              label="Email"
              v-model="user.email"
              outlined
              color="black"
              :rules="emailRules"
              required
            >
            </v-text-field>
            <v-textarea
              outlined
              name="message"
              label="Message"
              v-model="user.message"
              color="black"
              required
            ></v-textarea>
            <v-checkbox label="Sign up for Slim.AI updates" v-model="checkbox1">
            </v-checkbox>
            <button class="button_submit" ><div class="lds-ring"></div>Send Message</button>
          </form>
        </div>
        <div class="section-2-container-form" v-else>
          <div class="tick-icon">
            <img src="/img/scan/tick.jpg" alt="" />
          </div>
          <p>
            Thank you for reaching out. Your message has been successfully
            submitted. A member of our team will reach out shortly.
          </p>
        </div>
      </div>
    </section>
    <div>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import NavLinks from "./NavLinks.vue";
import { resolveSidebarItems } from "../util";
import GlobalConstants from "../GlobalConstants";
import Footer from "./Footer.vue";
import axios from "axios";

//import json from "../sample.json";

export default {
  props: {
    source: String,
  },
  components: {
    NavLinks,
    GlobalConstants,
    Footer,
  },

  data: () => ({
    dialog: false,
    drawer: null,
    isTablet: false,
    is_submitted: false,
    emailError: "",
    checkbox1: 0,
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],

    user: {
      fullname: "",
      company: "",
      position: "",
      job_function: "",

      positions: [
        "AppSec",
        "Compliance",
        "DevOps",
        "Engineering/Developer",
        "Founder/Executive",
        "Security",
        "Other",
      ],
      email: "",

      message: "",
    },
  }),

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },
    sidebarItems() {
      const items = resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );

      return items;
    },
  },

  methods: {
    get_contactus_params() {
      if (this.checkbox1) {
        return {
          full_name: this.user.fullname,
          company: this.user.company,
          job_role: this.user.position,
          job_function: this.user.job_function,
          company_email: this.user.email,
          message: this.user.message,
          sign_up_for_slim_ai_updates: {
            description: "",
            type: "string",
          },
        };
      } else {
        return {
          full_name: this.user.fullname,
          company: this.user.company,
          job_role: this.user.position,
          job_function: this.user.job_function,
          company_email: this.user.email,
          message: this.user.message,
        };
      }
    },
    handleSubmit() {
      axios
        .post(
          "https://sfrqik2gra.execute-api.us-east-1.amazonaws.com/test/contact-us",

          this.get_contactus_params()
        )
        .then((response) => {
          if (response.data.statusCode == 200) {
            this.is_submitted = true;
          } else if (response.data.statusCode == 400) {
            this.is_submitted = false;
            this.emailError = "Invaild Email";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMainColClass() {
      if (
        // this.$route.fullPath === "/blog/" ||
        this.$route.fullPath === "/terms-of-use.html" ||
        this.$route.fullPath === "/privacy-policy.html" ||
        this.$route.fullPath === "/release-notes.html"
      ) {
        return "mtCol";
      }
    },
    updateActive(active) {
      if (active[0] == undefined) return;
      const path = active[0].replace(".html", "");

      this.$router.push(path);
    },
    onResize() {
      this.isSmallBreakpoint = window.innerWidth < GlobalConstants.mdBreakpoint;
      this.isMobile = window.innerWidth < GlobalConstants.lgBreakpoint;
      this.isTablet = window.innerWidth < GlobalConstants.xlBreakpoint;
    },
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  async mounted() {
    document.title = "Contact Us | Slim.AI";

    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    //fetchContainers().then((list) => {
    //this.containers = list;
  },
};
</script>


<style lang="stylus" >
.documents_wrap {
  font-family: var(--font-primary);
  overflow-x: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: hk_grotesk, sans-serif;
  letter-spacing: 0.9px;
}

.button_submit {
  display: inline-block;
  background-color: #fff;
  background-color: #1F6BF1;
  border: 1px solid #1F6BF1;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.6px;
  margin: 0;
  padding: 11px 14px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}

.bnr_blu_cnt {
  text-align: center;
  padding: 18px 0 15px 0;
  font-family: hk_grotesk, sans-serif;
  background-color: #1F6BF1;
}

.imgs {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info_btm {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-left: -8px;
}

.bnr_blu_cnt .titles {
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  line-height: 46px;
  margin: 20px;
}

.bnr_blu_cnt .main_title {
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  line-height: 46px;
  margin: 20px;
}

.bnr_blu_cnt .subtitles {
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  line-height: 26px;
  margin: 0 0 26px 0;
}

.bnr_blu_cnt .btn_white {
  display: inline-block;
  background-color: #fff;
  color: #1F6BF1;
  border: 1px solid #1F6BF1;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.6px;
  margin: 0;
  padding: 11px 14px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}

.section-2-container {
  display: flex;
  margin: 0 auto;
}

.section-2-container-content {
  padding: 10px 75px 30px 10px;
  text-align: justify;
  font-size: 18px;
}

.section-2-banner {
  font-family: 'hk_grotesk';
  padding: 12px 10px 100px 10px;
  max-width: 1440px;
  margin: 0 auto;
}

.section-2-title {
  font-size: 40px;
  font-weight: 500;
  line-height: 50px;
  padding: 0px 40px 40px 10px;
}

.section-2-l {
  width: 48%;
  display: block;
  padding: 80px;
}

.section-2-container-form {
  width: 48%;
  display: block;
  padding: 50px 60px 60px 60px;
  border: 1px solid #DCDCDC;
  border-radius: 25px;
  margin-top: 75px;
}

.tick-icon {
  text-align: center;
  padding: 10px;
}

@media screen and (max-width: 1199.999px) {
}

@media screen and (max-width: 991.999px) {
}

@media screen and (max-width: 749.999px) {
}

@media screen and (max-width: 479.999px) {
  .ico_txt {
    display: none;
  }

  .main_title {
    width: 50%;
    text-align: left;
    margin: 15px 0px 0 5px !important;
    height: 125px;
  }
}

@media screen and (max-width: 479.999px) {
  .section-2-container {
    display: block;
  }

  .section-2-l {
    width: 100%;
    padding: 10px;
  }

  .section-2-container-form {
    width: 100%;
    padding: 20px;
  }
}
</style>
