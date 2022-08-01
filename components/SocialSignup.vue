<template>
  <section class="social-signup-wrapper home">
    <v-container>
      <v-row class="row">
        <v-col cols="12" md="6" class="text-center pr-md-12">
          <img
            :aria-label="GlobalConstants.slimAiLogo"
            src="~assets/img/logo/Slim Bug@2x.png"
            height="52"
            class="slim-va-middle"
          />
          <h3 v-if="ciso">
            {{ ciso }}
          </h3>
          <h3 v-else>
            Join our developer community today to get involved in the
            conversation.
          </h3>

          <div class="social-ctas-container" v-if="!ciso">
            <a
              :aria-label="GlobalConstants.twitchAriaLabel"
              :href="GlobalConstants.socialUrlTwitch"
              target="_blank"
              class="img-nav-item"
            >
              <img
                src="~assets/img/logo/Twitch@2x.png"
                class="mr-3 slim-va-middle"
                alt=""
              />
            </a>
            <a
              :aria-label="GlobalConstants.discordAriaLabel"
              :href="GlobalConstants.socialUrlDiscord"
              target="_blank"
              class="img-nav-item"
            >
              <img
                src="~assets/img/logo/Discord@2x.png"
                class="mr-3 slim-va-middle"
                alt=""
              />
            </a>
            <a
              :aria-label="GlobalConstants.youtubeAriaLabel"
              :href="GlobalConstants.socialUrlYoutube"
              class="img-nav-item"
              target="_blank"
            >
              <v-icon color="black">mdi-youtube</v-icon>
            </a>
            <a
              :aria-label="GlobalConstants.githubAriaLabel"
              :href="GlobalConstants.socialUrlGithub"
              target="_blank"
              class="img-nav-item"
            >
              <img
                src="~assets/img/logo/Github@2x.png"
                class="mr-3 slim-va-middle"
                alt=""
              />
            </a>
          </div>
          <div class="social-ctas-container" v-else>
            <a
              :aria-label="GlobalConstants.twitchAriaLabel"
              href=""
              target=""
              class="img-nav-item"
            >
              <img
                src="~assets/img/scan/calendar.svg"
                class="mr-3 slim-va-middle"
                alt=""
              />
              <div style="font-size: 20px; font-weight: bold">
                View Calendar
              </div>
            </a>
          </div>
        </v-col>
        <v-col cols="12" justify="center" align="center" class="separator">
          <img
            class="separator-img vertical"
            alt=""
            src="~assets/img/vertical-separator.png"
          />
          <img
            class="separator-img horizontal"
            alt=""
            src="~assets/img/horizontal-separator.png"
          />
        </v-col>
        <v-col cols="12" md="6" class="text-center pl-md-12">
          <img
            src="~assets/img/icons/Talk.png"
            height="52"
            class="slim-va-middle"
          />
          <h3>
            Stay in the know about product updates, give us feedback, and get
            exclusive access to tutorials, news, and more.
          </h3>
          <div class="form-wrapper">
            <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_signup mc_signup" class="mt-3 text-center">
              <form
                action="https://slim.us7.list-manage.com/subscribe/post?u=fe0e07a76cc961db5efea10fe&amp;id=3ee58a059f"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <div class="mc-field-group">
                    <input
                      type="email"
                      value="Email Address"
                      name="EMAIL"
                      class="required email dataentry"
                      id="mce-EMAIL"
                      aria-label="Email address"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button btnPrimary joinusbtn"
                    />
                  </div>
                  <div id="mce-responses mt-10" class="clear">
                    <div
                      class="response slim-disp-none"
                      id="mce-error-response"
                    ></div>
                    <div
                      class="response slim-disp-none"
                      id="mce-success-response"
                    ></div>
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div class="slim-pos-abs-left-m5k" aria-hidden="true">
                    <input
                      type="text"
                      name="b_fe0e07a76cc961db5efea10fe_3ee58a059f"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!--End mc_embed_signup-->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import GlobalConstants from "../GlobalConstants";

function onFocus(field) {
  if (field.value == field.defaultValue) field.value = "";
}
function onBlur(field) {
  if (field.value == "") field.value = field.defaultValue;
}

export default {
  mounted() {
    let mceEMAIL = document.getElementById("mce-EMAIL");

    mceEMAIL.onfocus = function () {
      onFocus(mceEMAIL);
    };

    mceEMAIL.onblur = function () {
      onBlur(mceEMAIL);
    };
  },
  props: ["ciso"],

  data: () => ({
    GlobalConstants,
  }),
};
</script>
<style lang="sass">
.social-signup-wrapper
  padding: 80px 8px

  h3
    margin-top: 20px
    margin-bottom: 40px

  .row
    position: relative

  .social-ctas-container
    display: flex
    align-items: center
    justify-content: center
    margin-top: 20px

    a
      margin: 0 5px
      @media (min-width: map.get($grid-breakpoints, "md"))

      // @media (min-width: $grid-breakpoints.md)
        margin: 0 15px

    .img-nav-item
      img
        height: 40px
      // @media (min-width: $grid-breakpoints.md)

        @media (min-width: map.get($grid-breakpoints, "md"))
          height: 52px

      i
        font-size: 54px

  &
    font-size: 72px

  .separator
    pointer-events: none
      // @media (min-width: $grid-breakpoints.md)

    @media (min-width: map.get($grid-breakpoints, "md"))
      width: 100%
      position: absolute

    .separator-img
      max-width: 100%
      &.vertical
        display: none

      &.horizontal
        display: block
      // @media (min-width: $grid-breakpoints.md)

        @media (min-width: map.get($grid-breakpoints, "md"))
        &.vertical
          display: block

        &.horizontal
          display: none

  .form-wrapper
    max-width: 410px
    margin: auto
    input
      border: none
      outline: none

    .mc-field-group
      padding: 11px 10px
      border-radius: 30px
      border: 1px solid $formBorderColor
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.09)
      display: flex
      justify-content: space-between
      align-items: center

      .email
        flex-grow: 2
        font-size: 13px
        font-weight: 700
        text-transform: uppercase
        padding: 0 20px
        letter-spacing: $buttonLetterSpacing
        border: none
        outline: none

      .joinusbtn
        height: 30px
        padding: 0 15px
</style>