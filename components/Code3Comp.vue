<template>
  <section>
    <img v-if="false" src="/img/hero-cloud2.svg" class="hero-cloud-sec2" />
    <div class="container mt-15">
      <v-row justify-center no-gutters>
        <v-col cols="12" class="px-md-16">
          <div class="titleFont colorDark2 text-center mb-3">
            Discover. Connect. Understand.
          </div>
          <div class="section2subtitle hcenter slimfont18 colorDark2">
            Find container images on popular registries or scan your own.
            Inspect container internals to help troubleshoot and optimize them.
          </div>
          <div class="text-center mt-4">
            <v-btn
              depressed
              color="#1f6bf1"
              class="normalCaps btnPrimary mb-2"
              href="https://portal.slim.dev/login?invitecode=invite.1ua3zgxhhokfmDbtOLJH8jD6ooR"
              target="_blank"
            >
              Get Early Access
            </v-btn>
          </div>

          <div class="text-center mx-auto pt-4 pb-0 pt-md-5 pb-md-4">
            <!-- add docker class back if need -->
            <div class="dockers">
              <figure>
                <v-img
                  v-if="imgEvalVis"
                  src="/img/landing_discover.png"
                  contain
                  class="rounded mx-auto"
                ></v-img>
                <v-img
                  v-if="imgOptVis"
                  src="/img/landing_connect.png"
                  contain
                  class="rounded mx-auto"
                ></v-img>
                <v-img
                  v-if="imgSecVis"
                  src="/img/landing_analyze.png"
                  contain
                  class="rounded mx-auto"
                ></v-img>
              </figure>
            </div>
          </div>
          <v-row no-gutters>
            <v-col cols="12" md="4">
              <div
                :class="{
                  option: true,
                  yellowdiv: imgEvalVis,
                  bluediv: !imgEvalVis,
                }"
                @click="showPic('eval')"
              >
                <div class="sec2-ydiv-title">1. Discover</div>
                <div>
                  Find the best image for your project by searching across
                  multiple registries.
                </div>
                <!-- This div puts this box to the 3 line height -->
                <div aria-hidden="true" class="noShow">Fill text</div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div
                :class="{
                  option: true,
                  yellowdiv: imgOptVis,
                  bluediv: !imgOptVis,
                }"
                @click="showPic('opt')"
              >
                <div class="sec2-ydiv-title">2. Connect</div>
                <div>
                  Understand, optimize, or troubleshoot images from your own
                  registries.
                </div>
                <!-- This div puts this box to the 3 line height -->
                <div aria-hidden="true" class="noShow">Fill text</div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div
                :class="{
                  option: true,
                  yellowdiv: imgSecVis,
                  bluediv: !imgSecVis,
                }"
                @click="showPic('sec')"
              >
                <div class="sec2-ydiv-title">3. Understand</div>
                <div>
                  Deep-dive into your containers. Compare versions to understand
                  changes.
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgEvalVis: true,
      imgOptVis: false,
      imgSecVis: false,
    };
  },
  methods: {
    showPic(active) {
      switch (active) {
        case "eval":
          this.imgEvalVis = true;
          this.imgOptVis = false;
          this.imgSecVis = false;
          return;
        case "opt":
          this.imgEvalVis = false;
          this.imgOptVis = true;
          this.imgSecVis = false;
          return;
        case "sec":
          this.imgEvalVis = false;
          this.imgOptVis = false;
          this.imgSecVis = true;
          return;
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.noShow {
  opacity: 0;
}

.sec2-ydiv-title {
  font-family: 'AvantGardeGothicITCW01Bd';
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 8px;
}
.option.bluediv {
  padding: 1rem;
  cursor: pointer;
  background: #FCFDFE;
  border: 3px solid #ccc;
  border-radius: 7px;
  color: #989A99;
  font-family: 'AvantGardeGothicITCW01Bk';
  font-size: 16px;
  line-height: 1.6em;
  font-weight: normal;
  min-height: 140px;
  margin-top: 1rem;
}
.option.yellowdiv {
  padding: 1rem;
  cursor: pointer;
  font-family: 'AvantGardeGothicITCW01Bk';
  font-size: 16px;
  line-height: 1.6em;
  border-radius: 7px;
  font-weight: normal;
  background-color: #FFFEFA;
  border: 3px solid #FFDA7E;
  color: #444444;
  min-height: 140px;
  margin-top: 1rem;
}

.rounded {
  border-radius: 8px;
}

.dockers {
  position: relative;
}

.hero-cloud-sec2 {
  position: absolute;
  top: 2245px;
  left: -50px;
  width: 250px;
  height: auto;
}

.hcenter {
  margin-left: auto;
  margin-right: auto;
}
.slimfont18 {
  font-family: 'AvantGardeGothicITCW01Bk';
  font-size: 18px;
  font-weight: 600;
}
.section2subtitle {
  max-width: 600px;
  text-align: center;
}

@media (min-width: 985.1px) and (max-width: 1199px) {
  .option.bluediv {
    min-height: 180px;
    margin-right: 2px;
  }
  .option.yellowdiv {
    min-height: 180px;
    margin-right: 2px;
  }
}

@media (min-width: 1199.1px) {
  .option.bluediv {
    min-height: 140px;
    margin-right: 4px;
  }
  .option.yellowdiv {
    min-height: 140px;
    margin-right: 4px;
  }
}
</style>
