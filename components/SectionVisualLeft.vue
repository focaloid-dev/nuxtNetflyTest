<template>
  <section :class="{ section: true, backColorBlue: backgroundBlue }">
    <v-row
      :align="verticalAlign || 'center'"
      class="secRow justify-center"
      no-gutters
    >
      <v-col cols="12" md="6" :class="imageColClass || 'pr-md-5'">
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
      </v-col>
      <v-col
        cols="12"
        md="6"
        :class="textColClass || 'textcolwidth justify-end'"
      >
        <div v-if="headline !== undefined" class="columnHeadline colorGreyed">
          &#60;{{ headline }}&#62;
        </div>
        <h1
          v-if="title !== undefined"
          id="section-title"
          class="text-left ml-0 pl-0 columnTitle"
        >
          {{ title }}
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
          class="text-left subTitleFont colorDark2 mb-5"
        >
          {{ subtitle }}
        </p>
        <v-row class="justify-start mb-12" no-gutters>
          <v-btn
            v-if="button1Text !== undefined"
            depressed
            :color="button1Color || '#ff8d7e'"
            class="normalCaps btnPrimary mr-2 mb-2"
            :href="button1Link"
          >
            {{ button1Text }}
          </v-btn>
          <v-btn
            v-if="button2Text !== undefined"
            depressed
            :color="button2Color || '#8AC9ED'"
            class="normalCaps btnPrimary mb-2"
            :href="button2Link"
          >
            {{ button2Text }}
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: [
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
  methods: {},
};
</script>

<style scoped lang="stylus">
.maxw-45 {
  max-width: 45vw;
}

.maxw-40 {
  max-width: 40vw;
}

.maxw-35 {
  max-width: 35vw;
}

.maxw-30 {
  max-width: 30vw;
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
  padding: 4rem;
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
</style>
