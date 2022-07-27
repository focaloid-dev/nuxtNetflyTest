<template>
  <section class="sign-up-ctas wide-section home">
    <v-container :class="`banner-container ${background}-bg`">
      <v-row v-if="title" justify="center">
        <v-col cols="12">
          <h2>{{ title }}</h2>
          <p>{{ copy }}</p>
          <div class="home">
          <Button
            v-for="(button, index) in buttons"
            :key="index"
            className="btnSecondary mb-3"
            :href="button.url"
            :label="button.label"
            :icon="button.icon"
          />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import Button from "./Button";
import GlobalConstants from "../GlobalConstants";

export default {
  components: {
    Button,
  },
  data: () => ({
    GlobalConstants,
  }),
  props: {
    title: { type: String, default: "Take it for a drive" },
    copy: {
      type: String,
      default: "Start analyzing your containers today with a free account.",
    },
    buttons: {
      type: Array,
      validator: (prop) =>
        prop.every(
          (e) => {
            return (
              typeof e.url === "string" &&
              (e.icon !== undefined ? typeof e.icon === "string" : true) &&
              typeof e.label === "string"
            )
          }
        ),
      default: function () {
        return [
          {
            url: GlobalConstants.githubSignupUrl,
            label: "Get Started",
          },
          // {
          //   url: GlobalConstants.githubSignupUrl,
          //   icon: "/img/logo/Github@2x.png",
          //   label: "Sign in with Github",
          // },
          // {
          //   url: GlobalConstants.gitlabSignupUrl,
          //   icon: "/img/logo/Gitlab@2x.png",
          //   label: "Sign in with Gitlab",
          // },
          // {
          //   url: GlobalConstants.bitbucketSignupUrl,
          //   icon: "/img/logo/BitBucket@2x.png",
          //   label: "Sign in with Bitbucket",
          // },
        ];
      },
    },
    background: {
      type: String,
      default: "lightblue",
    },
  },
};
</script>
<style lang="stylus">
.sign-up-ctas {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 15px;

  .banner-container {
    background-image: url('/img/background/background-smudge.png');
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    padding: 40px 40px;

    @media (min-width: $grid-breakpoints.lg) {
      border-radius: 20px;
      padding: 60px 60px;
    }

    &.lightblue-bg {
      background-color: $lightBlueBgColor;
    }

    h2 {
      margin: 0 0 10px;
    }

    p {
      margin-bottom: 25px;
    }

    .button-wrapper {
      width: 280px;
      margin-bottom: 0px;

      @media (min-width: $grid-breakpoints.lg) {
        width: auto;
      }
    }
  }
}
</style>
