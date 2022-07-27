<template>
  <section class="founders slim-pos-rel">
    <div class="container mt-12">
      <v-row class="mt-md-5 justify-space-around" no-gutters>
        <v-col md="8" cols="12" class="">
          <div class="founder-img-wrapper">
            <v-row class="no-gutters">
              <v-col sm="6" cols="12">
                <div class="founder-img">
                  <img src="/img/johnamral.png" />
                  <div class="founder-socials">
                    <span> Kyle Quest</span>
                    <span class="founding-ceo"> Founding CTO</span>
                    <ul>
                      <li>
                        <a target="_blank" href="https://github.com/kcq"
                          ><InlineSvg
                            src="/img/github.svg"
                            height="24"
                            class=" slim-va-middle"
                            alt=""
                        /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/kcqon" target="_blank">
                          <InlineSvg
                            src="/img/twitter.svg"
                            height="24"
                            class="slim-va-middle"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                    <img src="/img/writing/green-arrow.png" />
                  </div>
                </div>
              </v-col>
              <v-col sm="6" cols="12">
                <div class="founder-img kyle-img">
                  <img src="/img/kylequest.png" />
                  <div class="founder-socials">
                    <img src="/img/writing/yellow-arrow.png" />
                    <span> John Amaral</span>
                    <span class="founding-ceo"> Founding CEO</span>
                    <ul>
                      
                      <li>
                        <a href="https://twitter.com/amaral_john" target="blank">
                          <InlineSvg
                            src="/img/twitter.svg"
                            height="24"
                            class="slim-va-middle"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/john-amaral-a359241/" target="blank">
                          <InlineSvg
                            src="/img/linkedin.svg"
                            height="24"
                            class="slim-va-middle"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col md="4" cols="12" class="">
          <div class="founder-content">
            <h2>Our Founders</h2>
            <p>
              With deep roots in cloud-based security and a history of
              successful startups, John and Kyle co-founded Slim.AI with a mission
              to empower developers to build and run their cloud-native
              applications easier and faster than before. Before Slim.AI, John served as Head of Product for Cisco Cloud Security. Kyle is the creator of
              DockerSlim, a trusted tool to optimize the containerized app
              development experience.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg,
  },
};
</script>
<style lang="stylus">
.founders{
      font-family: "hk_grotesk";
      padding: 50px 0 119px;
      max-width: 1187px;
      margin: 0 auto;
      .founder-img-wrapper{
        max-width: 672px;
        .founder-img{
              border-radius: 10px;
              margin-right: 9px;
              position: relative;
              img{
                  width: 100%;
                  border-radius: 10px;
                  @media (max-width: 959px){
                    margin-bottom: 30px;
                  }
              }
            .founder-socials{
              font-family: "Max Sans";
              color: #4CAF50;
               position: absolute;
              top: -33px;
              right: -140px;
              text-alight: left;
              @media (max-width: 959px){
                position: static;
                text-align: center;
              }
              img{
                width: 53px;
                margin-left: -40px;
                @media (max-width: 959px){
                  display: none;

                }
              }
              span{
                font-size: 24px;
                font-weight: 700;
                line-height: 43px;
                display: block;
                text-transform: uppercase;
              }
               .founding-ceo{
                 font-size: 20px;
                font-weight: 400 !important;
                line-height: 43px;
              }
                ul{
                  display: flex;
                  list-style: none;
                  padding: 0;
                  li{
                    margin: 0 15px 0 0;
                    a{
                      display: inline-block;
                      svg{
                        margin: 0 !important;
                        fill: #4CAF50;
                      }
                    }
                    &:last-child{
                      margin-right: 0;
                    }
                  }
                    @media (max-width: 959px){
                      justify-content: center;
                    }
                }
            }
        }
        .kyle-img{
          margin-top: 110px;
          margin-left: 9px;
          margin-right: 0px;
        @media (max-width: 599px){
          margin-top: 35px
          margin-left: 0;
        }
           .founder-socials{
              @media (max-width: 959px){
                position: static;
                text-align: center;
              }
            top: unset;
            right: unset;
            text-align: right;
            bottom: -47px;
            left: -160px
            color: #FFC107;
             img{
               margin-left: 0;
               margin-right: -40px;
               width: 50px;
             }
             ul{
               justify-content: flex-end;
                  @media (max-width: 959px){
               justify-content: center;
                  }
             }
             a{
               svg{
                 fill: #FFC107 !important;
               }
             }
           }
        }
        @media (max-width: 1263px){
          margin-right: 35px;
        }
         @media (max-width: 959px){
        max-width: 100%;
        margin-right: 0;
      }
      }


      .founder-content{
        max-width: 320px;
        margin-top: 70px;
        @media (max-width: 959px){
          max-width: 100%;
        }
          h2{
            font-size: 44px;
            line-height: 1;
            font-weight: 500;
            margin: 0 0 25px;
          }
          p{
            font-size: 18px;
            line-height: 28px;
            font-weight: 000;
            margin: 0;
        }
      }
}
</style>
