<template>
  <div class="aside-bar" :class="{ bannerFixed: scrollPosition >= 225 }">
    <ul v-show="!isMobile">
      <li :key="item.path" v-for="item in sidebarItems">
        <router-link :to="item.path">{{ item.title }} </router-link>
      </li>
    </ul>
    <v-container>
      <v-row v-show="isMobile" class="select-wrapper">
        <v-col cols="12">
          <v-select
            :items="itemsSidebar"
            v-model="selectedVal"
            class="mobile-select"
            @change="filterResults(selectedVal)"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <!-- NOTE - hidden for the moment; will likely be readded post internal discussion -->
    <!-- <div class="api-btn">
      <a href="#"> Api documentation</a>
    </div> -->
  </div>
</template>
<script>
import GlobalConstants from "../GlobalConstants";
export default {
  props: ["sidebarItems", "scrollPosition"],
  data() {
    return {
      isMobile: false,
      isTablet: false,
      isSmallBreakpoint: false,
      itemsSidebar: [],
      selectedVal: "",
    };
  },
  methods: {
    onResize() {
      this.isSmallBreakpoint = window.innerWidth < GlobalConstants.mdBreakpoint;
      this.isMobile = window.innerWidth < 992;
      this.isTablet = window.innerWidth < GlobalConstants.xlBreakpoint;
    },
    filterResults(item) {
      if (item) {
        this.sidebarItems.map((link) => {
          if (link.frontmatter.title === item && !this.$route.path.includes(link.path)) {
            this.$router.push({ path: link.path });
          }
        });
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    this.sidebarItems?.map((item) => {
      return this.itemsSidebar.push(item.frontmatter.title)
    });
    let path = this.$route.path.split("docs/")[1];
    let updatedPath = path.split(".")[0];
    this.sidebarItems.map((link) => {
      if (link.path.includes(updatedPath)) {
        this.selectedVal = link.title.toLowerCase().split(' ').map(function(word) {
          return word.replace(word[0], word[0].toUpperCase());
        }).join(' ');
      }
    })
  }
};
</script>
<style lang="stylus">
.aside-bar{
    opacity: 1;
    position: sticky;
    top: 0px;
    left: 0;
    height: 100vh;
    max-width: 328px;
    max-height: 100vh;
    margin-right: 105px;
    width: 328px;
    opacity: 1 !important;
    font-family: "hk_grotesk";
     @media (max-width: 1199px){
        margin-right: 30px;
     }
      @media (max-width: 991px){
          height: auto;
          width: 100%;
          max-width: 100%;
          margin-bottom: 35px;
          position: static;
          position: sticky;
          background: #fff;
          top: 85px;
          z-index: 1;
          padding-bottom: 20px;
      }

        ul{
            list-style: none;
            padding-bottom: 50px;
            padding-left: 0;
            border-bottom: 1px solid #efeff4;
            margin-bottom: 26px;
            @media (max-width: 991px) {
                   display: none;
            }
                li{
                    margin: 0 0 10px 0;
                        a{
                            background-color: #fff;
                            padding: 17px 25px;
                            border-radius: 26px;
                            display: inline-block;
                            font-size: 13px;
                            line-height: 1.2;
                            color: #000;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 0.6px;
                            transition: all 0.25s ease;
                            position: relative;
                            top: 0;
                             @media (max-width: 1199px){
                                 padding: 15px 10px;
                             }
                        }
                        &:hover{
                               a{
                                    box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
                                -webkit-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
                                -moz-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
                                top: -5px;
                               }
                            }
                            .router-link-active{
                                 box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
                                -webkit-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
                                -moz-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
                                top: -5px;
                            }
                }
        }
        .api-btn{
              max-width: 291px;
                text-align: center;
                width: 100%;
                margin-left: unset;
                 @media (max-width: 991px){
                margin:  0 auto;
                max-width: 367px;
                }
            @media (max-width: 390px){
                padding: 0 23px;
            }
            a{
                padding: 17.5px 30px;
                background-color: #1f6bf1;
                border-radius: 4px;
                color: #fff;
                font-size: 13px;
                line-height: 1.2;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1.6px;
                display: inline-block;
                width: 100%;
            }
        }
}
.bannerFixed{

@media (min-width: 992px){
   top: 182px;
}

}
</style>
