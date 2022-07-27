<template>
  <v-container>
    <section class="cta padded joing-community">
      <div class="d-flex justify-center" id="mc_signup">
        <v-row class="row">
          <v-col class="justify-content-center">
            <div class="titleFont text-center">Take it for a drive.</div>
            <div class="text-center mc_subtitle">
              Start analyzing your containers today with a free account.
            </div>
            <!-- <div  class="mb-5 text-center mc_subtitle">learn more about our open source projects.</div> -->
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
               
              </form>
            </div>
            <!--End mc_embed_signup-->
          </v-col>
        </v-row>
      </div>
    </section>
 
  </v-container>
</template>

<script>

import talk from "../uploads/Talk.png";
import developer from "../uploads/developer.png";
import chat from "../uploads/chat.png";
import youtube from "../uploads/youtube.png";
import watch from "../uploads/watch.png";
function onFocus(field) {
  if (field.value == field.defaultValue) field.value = "";
}
function onBlur(field) {
  if (this.value == "") this.value = this.defaultValue;
}

export default {
  mounted() {
    let mceNAME = document.getElementById("mce-NAME");
    let mceEMAIL = document.getElementById("mce-EMAIL");
    mceNAME.onfocus = function () {
      onFocus(mceNAME);
    };

    mceNAME.onblur = function () {
      onBlur(mceNAME);
    };

    mceEMAIL.onfocus = function () {
      onFocus(mceEMAIL);
    };

    mceEMAIL.onblur = function () {
      onBlur(mceEMAIL);
    };
  },
  data() {
    return {
      Github: "github",
      Gitlab: "gitlab",
      Bitbucket: "bitlab",
      developer,
      chat,
      watch,
      youtube,
      talk,
    };
  },
  methods: {
    //   // max-width: 1000px;
  },
};
</script>

<style scoped lang="stylus">
.mc_subtitle {
  font-family: 'hk_grotesk';
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 25px;
}

.cta {
  background-color: #F3FAFD;
  padding: 66px 20px;
  min-height: 300px;
  background-color: #ECF8FE;
  border-radius: 20px;
  text-align: center;
  font-family: 'hk_grotesk';
  margin-bottom: 100px;
}

.padded {
  padding: 5rem 0;
}

.titleFont {
  font-size: 44px;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 4px;
  font-family: 'hk_grotesk';
}

.dataentry {
  border-radius: 8px;
  width: 260px;
  height: 50px;
  border: #8AC9ED 1px solid;
  color: #048dcb;
  background-color: #fff;
  font-size: 18px;
  font-family: AvantGardeGothicITCW01Bk;
  font-weight: normal;
  padding-left: 8px;
}

.joinusbtn {
  background-color: #8AC9ED;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 260px;
  height: 50px;
  border-color: #8AC9ED;
  border: #8AC9ED 1px solid;
  border-radius: 8px;
  font-size: 18px;
  font-family: AvantGardeGothicITCW01Bk;
  font-weight: normal;
  cursor: pointer;
}

.button {
  border-radius: 6px;
}

</style>