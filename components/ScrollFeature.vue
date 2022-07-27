<template>
  <section class="scroll-feature-wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" md="5" lg="4" class="left-content">
           <intersect
            @enter="setActiveContent(0)"
            :threshhold="[0, 0.2]"
            :rootMargin="'-50% 0px'"
          >
            <div class="left-content-block">
              <div class="eyebrow">
                <img src="/img/prehead/Understand.png" alt="Understand" />
              </div>
              <h2>
                <UnderlineAnimation lineImg="/img/underline/Analyze.png"
                  >Demystify</UnderlineAnimation
                >
                your containers - know what’s inside.
              </h2>
              <p>
            Knowing what’s in your container is critical to securing your software supply chain. The Slim platform lifts the veil on container internals so you can analyze, optimize, and compare changes before deploying your cloud-native apps.              </p>
              <Button
                label="Read the Guide"
                :href="GlobalConstants.guideUrl"
                icon="/img/icons/Book.svg"
              />
              <div
                v-if="isMobile"
                :class="['fade-block understand-wrapper', activeContent === 0 ? 'active' : '']"
              >
                <ImageOverlayAnim
                :images="[
                  '/img/graphic/Analyze.png',
                  '/img/writing/Understand 1.png',
                  '/img/writing/Understand 2.png',
                ]"
                :extraAnimations="['understand-img-main', 'slide-down deep-dive-img', 'slide-up deep-dive-bottom-img']"
                :useExternalTrigger="true"
                :isActiveExternal="activeContent === 0"
              />
            </div>
            </div>
          </intersect>
             <intersect
            @enter="setActiveContent(1)"
            :threshhold="[0, 0.2]"
            :rootMargin="'-50% 0px'"
          >
            <div class="left-content-block">
              <div class="eyebrow">
                <img src="/img/prehead/Optimize.png" alt="Optimize" />
              </div>
              <h2>
               
                <UnderlineAnimation lineImg="/img/underline/Optimize.png"
                  > Reduce</UnderlineAnimation
                > your attack surface and vulnerabilty count.
              </h2>
              <p>
          Use DockerSlim, our open-source project, to automatically minify your container images. Remove bulky or dangerous packages, so you can avoid shipping bloated software and security risks.               </p>
              <Button
                label="Read the Docs"
                :href="GlobalConstants.dockerslimTutorialUrl"
                target="_blank"
                icon="/img/icons/Book.svg"
              />
              <br />
              <Button
                label="Download Dockerslim"
                :href="GlobalConstants.dockerslimDownloadUrl"
                target="_blank"
                className="text-cta"
              />
              <div
                v-if="isMobile"
                :class="['fade-block', activeContent === 1 ? 'active' : '']"
              >
                <ImageOverlayAnim
                :images="[
                  '/img/graphic/Optimize.png',
                  '/img/writing/Optimize 1.png',
                ]"
                :extraAnimations="[null, 'slide-down']"
                :useExternalTrigger="true"
                :isActiveExternal="activeContent === 1"
              />
              </div>
            </div>
          </intersect>
          
         <intersect
            @enter="setActiveContent(2)"
            :threshhold="[0, 0.2]"
            :rootMargin="'-50% 0px'"
          >
            <div class="left-content-block">
              <div class="eyebrow">
                <img src="/img/prehead/Discover.png" alt="Discover" />
              </div>
              <h2>
                Start with the
                <UnderlineAnimation lineImg="/img/underline/Discover.png"
                  >right</UnderlineAnimation
                >
                image.
              </h2>
              <p>
            With access to the world’s largest public registries, you can find the right container image for your project. Get visibility and control over all of your containers regardless of where they live. Easily connect to your own private container registries and share images with your team.             </p>
              <Button
                label="Watch the Demo"
                href="https://www.youtube.com/watch?v=0Q1Ytn8r-Cw&t=2s"
                target="_blank"
                icon="/img/icons/Play.svg"
              />
              <div
                v-if="isMobile"
                :class="['fade-block', activeContent === 2 ? 'active' : '']"
              >
                <ImageOverlayAnim
                :images="[
                  '/img/graphic/Discover.png',
                  '/img/writing/Discover 1.png',
                  '/img/writing/Discover 2.png',
                ]"
                :extraAnimations="[null, 'slide-down', 'slide-up']"
                :useExternalTrigger="true"
                :isActiveExternal="activeContent === 2"
              />
              </div>
            </div>
          </intersect>
       
          
        </v-col>
        <v-spacer />
        <v-col v-if="!isMobile" cols="6" class="right-content">
          <div class="right-content-block-wrapper">
            <div :class="['fade-block understand-wrapper', activeContent === 0 ? 'active' : '']">
              <ImageOverlayAnim
                :images="[
                  '/img/graphic/Analyze.png',
                  '/img/writing/Understand 1.png',
                  '/img/writing/Understand 2.png',
                ]"
                :extraAnimations="['understand-img-main', 'slide-down deep-dive-img', 'slide-up deep-dive-bottom-img']"
                :useExternalTrigger="true"
                :isActiveExternal="activeContent === 0"
              />
            </div>
               <div :class="['fade-block', activeContent === 1 ? 'active' : '']">
              <ImageOverlayAnim
                :images="[
                  '/img/graphic/Optimize.png',
                  '/img/writing/Optimize 1.png',
                ]"
                :extraAnimations="[null, 'slide-down']"
                :useExternalTrigger="true"
                :isActiveExternal="activeContent === 1"
              />
            </div>
             
            <div :class="['fade-block', activeContent === 2 ? 'active' : '']">
              <ImageOverlayAnim
                :images="[
                  '/img/graphic/Discover.png',
                  '/img/writing/Discover 1.png',
                  '/img/writing/Discover 2.png',
                ]"
                :extraAnimations="[null, 'slide-down', 'slide-up']"
                :useExternalTrigger="true"
                :isActiveExternal="activeContent === 2"
              />
            </div>
             

           
            
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>



<script>
import Intersect from "vue-intersect";
import Button from "@theme/components/Button";
import UnderlineAnimation from "@theme/components/UnderlineAnimation.vue";
import ImageOverlayAnim from "@theme/components/ImageOverlayAnim";

import GlobalConstants from "../GlobalConstants";

export default {
  components: { Intersect, Button, UnderlineAnimation, ImageOverlayAnim },
  props: {
    isMobile: Boolean,
  },
  methods: {
    setActiveContent(contentNum) {
      this.activeContent = contentNum;
    },
  },
  data() {
    return {
      activeContent: 0,
      GlobalConstants,
    };
  },
};
</script>

<style scoped lang="stylus">
.scroll-feature-wrapper {
  margin: 48px 0 10px;

@media (min-width: 1904px){
  padding-bottom: 220px
}
  @media (min-width: $grid-breakpoints.lg) {
    margin: 120px 0;
  }

  .left-content {
    .left-content-block {
      padding: 40px 0 0;

      @media (min-width: $grid-breakpoints.lg) {
        padding: 160px 0;

        &:first-child {
          padding-top: 0;
        }

        &:last-child {
          padding-bottom: 0;
        }
      }
    }
  }

  .right-content {
    .right-content-block-wrapper {
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      flex-grow: 1;
      flex-basis: 300px;
      align-self: start;

      @media (min-width: $grid-breakpoints.lg) {
        top: calc(50vh - 180px);
        bottom: calc(50vh - 180px);
        margin-top: -60px;
        margin-bottom: 100px;
        height: 400px;
      }

      @media (min-width: $grid-breakpoints.xl) {
        top: calc(50vh - 240px);
        margin-top: -60px;
        margin-bottom: 100px;
        height: 400px;
      }
      @media (min-width: 1904px){
        top: calc(50vh - 400px);
      }
    }
  }

  h2 {
    margin: 0 0 25px;
  }

  p {
    margin-bottom: 20px;
  }

  .eyebrow {
    margin-bottom: 5px;

    img {
      height: 18px;
    }
  }

  .fade-block {
    position: relative;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;

    @media (min-width: $grid-breakpoints.lg) {
      position: absolute;
      top: 0px;
      bottom: 0px;
      margin-top: 0px;
      height: 400px;
    }

    &:last-child {
      margin-bottom: 0;
      @media (min-width: 1904px){
        height: 55vh;
        .img-step-animation-container{
          height: 100%;
        }
        
     }
    }
    &.active {
      opacity: 1;
    }

    .main-image, .top-image, .bottom-image {
      max-width: 100%;
    }

    .top-image, .bottom-image {
      position: absolute;
    }

    .top-image {
      top: 0;
      right: 0;
    }

    .bottom-image {
      bottom: 0;
      left: 0;
    }
  }
    
}
</style>
