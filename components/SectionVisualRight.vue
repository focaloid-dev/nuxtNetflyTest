<template>
  <section :class="{ section: true, backColorBlue: backgroundBlue }">
   <div class="mission-section">
    <v-row
      :align="verticalAlign || 'center'"
      class="secRow justify-center"
      no-gutters
    >
      <v-col
        cols="12"
        md="4"
        :class="textColClass || 'textcolwidth justify-end'"
      >
      <div class="mission-content">
        <div v-if="headline !== undefined" class="columnHeadline colorGreyed ">
          {{ headline }}
        </div>
        <h1 v-if="title !== undefined" class="text-left ml-0 pl-0 columnTitle main-title">
          {{ title }}
          <titleLine   :hoverOnly="false"
              lineImg="/img/underline/Discover.png"/>
        </h1>
        <div v-if="bullets !== undefined" class="columnList colorDark mt-3">
          <ul>
            <li v-for="(bullet, index) in bullets" :key="index">
              {{ bullet }}
            </li>
          </ul>
        </div>
        <p
          v-if="subtitle !== undefined"
          class="text-left subTitleFont colorDark2 mt-5"
        >
          {{ subtitle }}
        </p>
        <v-row class="justify-start" no-gutters>
          <v-btn
            v-if="button1Text !== undefined"
            depressed
            :color="button1Color || '#ff8d7e'"
            class="normalCaps buttonStd mr-2 mb-2"
            :href="button1Link"
            target="button2Target || '_blank'"
          >
            {{ button1Text }}
          </v-btn>
          <v-btn
            v-if="button2Text !== undefined"
            depressed
            :color="button2Color || '#8AC9ED'"
            class="normalCaps buttonStd mb-2 font-weight-bold"
            :href="button2Link"
            :target="button2Target || '_blank'"
          >
            {{ button2Text }}
          </v-btn>
        </v-row>
        <v-row class="ml-0">
          <div v-if="demoPlayer" @click="openDemoModal" class="watchDemoButton">
            <v-icon color="#1f6bf1">mdi-play-circle-outline</v-icon>
            <span class="watchDemoPrompt">Watch demo</span>
          </div>
        </v-row>
        <template v-if="displayDemoPlayerModal">
          <div>
            <v-dialog width="948" v-model="displayDemoPlayerModal">
              <!-- adding the close within the dialog mucks with the display of the video. -->
              <!-- <v-icon>mdi-close</v-icon> -->
              <v-card>
                <LazyYoutube
                  maxWidth="100%"
                  ref="lazyVideo"
                  src="https://www.youtube.com/watch?v=mXBKBrg9Mak"
                />
              </v-card>
            </v-dialog>
          </div>
        </template>
      </div>
      </v-col>
      <v-col cols="12" md="8" :class="imageColClass || 'pl-md-5'">
     <div class="mission-img">
        <v-img
          v-if="imageUrl"
          :src="$withBase(imageUrl)"
          :alt="alt || ''"
          :height="imageHeight || '70vh'"
          contain
        ></v-img>
        <div v-if="imageUrl === undefined">
          <div v-if="!videoUrl.endsWith('.mp4')" class="iframe-container ma-12">
            <iframe
              v-if="videoUrl"
              :src="$withBase(videoUrl)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
          <div v-if="videoUrl.endsWith('.mp4')" class="video-container">
            <video class="video" controls>
              <source :src="$withBase(videoUrl)" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
     </div>
      </v-col>
    </v-row>
   </div>
  </section>
</template>

<script>
import titleLine from "./UnderlineAnimation.vue";

export default {
components: {
  titleLine
},
  data() {
    return {
      displayDemoPlayerModal: false,
    };
  },
  props: [
    "demoPlayer",
    "textColClass",
    "imageColClass",
    "verticalAlign",
    "backgroundBlue",
    "title",
    "subtitle",
    "headline",
    "imageUrl",
    "imageHeight",
    "alt",
    "videoUrl",
    "button1Text",
    "button1Link",
    "button1Color",
    "button1Target",
    "button2Text",
    "button2Link",
    "button2Color",
    "button2Target",
    "bullets",
  ],
  methods: {
    openDemoModal() {
      this.displayDemoPlayerModal = true;
    },
  },
};
</script>

<style scoped lang="stylus">
.mission-section{
  max-width: 1187px;
  margin: 0 auto;
  @media (max-width: 1366px){
    padding: 0 23px;
  }
 .v-image{
  @media (max-width: 767px){
    height: 350px !important;
  }
}
  .mission-content{
    font-family: "hk_grotesk";
    max-width: 309px;
    margin-right: 10px;
      @media (max-width: 959px){
        max-width: 100%;
      }
    .main-title{
        font-weight: 500;
        font-family: "hk_grotesk";
        max-width: 90%;
        margin: 20px 0 0;
        letter-spacing: -1.9px;
        line-height: 1;
        @media (max-width: 959px){
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          span{
            .underline-image{
              bottom: 0;
            }
          }
        }
        @media (max-width: 640px){
          max-width: 100%;
        }
        span{
          height: 29px;
          position: relative;
          width: 167px;
        }
    }
    p{
      font-size: 18px;
      line-height: 28px;
      font-weight: 400;
      font-family: "hk_grotesk";
      margin: 0;
    }
    .columnHeadline{
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      font-family: "Max Sans";
      color: #4CAF50;
      text-transform: uppercase;
      letter-spacing: -1.4px;
    }
  }
}


.mission-img{
  max-width: 758px;
  margin-left: auto;
  @media (max-width: 959px){
    margin: 40px auto 0;
  }
}

.watchDemoPrompt {
  color: $btnPrimaryBgColor;
}

.watchDemoButton {
  cursor: pointer;
}

.maxw-45 {
  max-width: 45vw;
}

.maxw-40 {
  max-width: 40vw;
}

.maxw-35 {
  max-width: 35vw;
}

.textcolwidth {
  max-width: 100vw;
}

.iframe-container {
  overflow: hidden;
  /* 16:9 aspect ratio */
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.video-container {
  /* width is set as 100% here. any width can be specified as per requirement */
  width: 100%;
  padding-top: 56.25%;
  height: 0px;
  position: relative;
}

.video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.section {
  max-width: 100vw;
  margin: 0px;
  display: block;
  padding: 48px 0 0px;
}

.leftcol {
  max-width: 40vw;
}

.secRow {
  text-align: center;

  img {
    max-width: 100%;
    max-height: 280px;
    display: block;
    margin: 3rem auto 1.5rem;
  }
  .subtitle {
    max-width: 35rem;
    font-size: 1.6rem;
    line-height: 1.3;
    color: lighten($textColor, 40%);
  }
  .headerfont {
    font-size: 48px;
    font-weight: 900;
  }
}

@media (max-width: $MQMobileNarrow) {
  .section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .secRow {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }
      .subtitle {
        font-size: 1.2rem;
      }
    }
  }

  .textcolwidth {
    max-width: 100vw;
  }
}

@media (max-width: $MQMobile) {
  .textcolwidth {
    max-width: 100vw;
  }
}

@media (min-width: 985.1px) and (max-width: 1199px) {
  .textcolwidth {
    max-width: 30vw;
  }
}

@media (min-width: 1199.1px) {
  .textcolwidth {
    max-width: 30vw;
  }
}
section{
   @media (max-width: 419px){
     padding-left: 0 !important;
     padding-right: 0 !important;
  }

}
</style>
