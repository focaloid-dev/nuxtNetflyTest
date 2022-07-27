<template>
  <section class="career">
    <v-container>
      <div class="career-wrapper">
        <v-row>
          <v-col md="6" cols="12">
            <div class="career-content">
              <span>Careers</span>
              <h2>
                We’re hard at work building the tools of our dreams.
                <titleLine
                  :hoverOnly="false"
                  lineImg="/img/underline/career-line.png"
                />
              </h2>
              <p>
                We simply want to build the tools that developers like us need
                to author, manage and ship production-ready containers. And with
                core engineering principles in mind, we’re doing just that. Want
                to bring your passion and enthusiasm to our team? We’d love to
                have you.
              </p>
              <div class="team-btn">
                <v-btn color="#1E7CAE" dark rounded>Join the Team </v-btn>
                <v-btn color="#ffffff" rounded
                  >Read Our Engineering Principles</v-btn
                >
              </div>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="career-img">
              <div class="build-tools">
                <span>Build tools that help devs shift their apps</span>
                <img src="/img/arrow-blue-down.png" />
              </div>
              <img src="/img/career-img.png" />
              <div class="ops-team">
                <img src="/img/arrow-up.png" />
                <span>Help dev and ops teams collaborate effectively</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>
<script>
import titleLine from "./UnderlineAnimation.vue";
export default {
  components: {
    titleLine,
  },
};
</script>

<style scoped lang="stylus" scoped>
.career{
    padding: 84px 0;
    .career-wrapper{
        max-width: 1186px;
        margin: 0 auto;
        font-family: "hk_grotesk";
    .career-img{
            position: relative;
            img{
                max-width: 100%;
            }
        span{
            font-size: 26px;
            font-weight: 700;
            line-height: 28px;
            display: block;
            text-transform: uppercase;
            font-family: "Max Sans";
            color: #0096E9;

        }
        .build-tools{
             max-width: 300px;
            margin-left: auto;
            position: absolute;
            top: -80px;
            right: 0;
            img{
                width:43px;
                 margin-left: 30px;
            }
            @media (max-width: 959px){
                display: none;
            }
        }
            .ops-team{
             max-width: 300px;
            margin-left: auto;
            position: absolute;
            bottom: -100px;
            left: 60px;
            img{
                width:43px;
                margin-left: 30px;
            }
            span{
                color: #FFC107;
            }
            @media (max-width: 959px){
                display: none;
            }
        }
    }

       .career-content{
            max-width: 410px;
                span{
                    font-size: 20px;
                    line-height: 30px;
                    font-weight: 700;
                    font-family: "Max Sans";
                    color: #4caf50;
                    text-transform: uppercase;
                    letter-spacing: -1.4px;
                }
                h2{
                    font-size: 48px;
                    font-weight: 500;
                    font-family: "hk_grotesk";
                    max-width: 278px;
                    margin: 16px 0 0;
                    letter-spacing: -1.9px;
                    line-height: 1;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 5px;
                    position: relative;
                    z-index: 2;
                    @media (max-width: 767px){
                        font-size: 32px;
                        letter-spacing: 0.7px;
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
                    margin: 0 0 25px;
                }
                .team-btn{
                     @media (max-width: 959px){
                         display: flex;
                         flex-direction: column;
                     }
                    button{
                        font-size: 13px;
                        line-height: 18px;
                        font-weight: 800;
                        margin: 0;
                        min-width: 238px;
                        padding: 15px 20px;
                        height: auto;
                        min-height: 50px;
                        @media (max-width: 640px){
                        min-width: auto;
                        font-size: 12px;
                        }
                        &:last-child{
                            margin-top: 25px;
                            min-width: 373px;
                        @media (max-width: 640px){
                                min-width: auto;
                                font-size: 12px;
                        }
                        }
                    }
                }
                @media (max-width: 959px){
                    max-width: 100%;
                    margin: 0 auto 35px;
                    h2{
                        max-width: 100%
                    }
                    button{
                        width: fit-content;
                    }
                }
       }

    }
}
</style>
