<<template>
  <section class="feature-advisors">
    <v-container>
      <div class="feature-content">
        <h2>Featured Advisors</h2>
        <p>
          From development to engineering, our advisors work with us every day
          to push us to create a truly great product for developers.
        </p>
        <v-row>
          <v-col md="6" cols="12">
            <div class="featured-card">
              <div class="featured-img kelsy-img">
                <img src="/img/kelsey-hightower-photo-1-resized.jpg" />
              </div>
              <div class="card-content">
                <div class="content-top d-flex">
                  <h3>Kelsey Hightower</h3>
                  <ul class="d-flex">
                    <li>
                      <a href="https://github.com/kelseyhightower" target="blank"
                        ><InlineSvg
                          src="/img/github.svg"
                          height="24"
                          class="slim-va-middle"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/kelseyhightower" target="blank"> 
                        <InlineSvg
                          src="/img/twitter.svg"
                          height="24"
                          class="slim-va-middle"
                          alt=""
                        />
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <p>
                  Open-source advocate Kelsey Hightower helps the product and
                  engineering teams create solutions that empower developers to
                  better understand containers. He provides input and advice on
                  product strategy, developer experience, and open-source
                  development.
                </p>
              </div>
            </div>
          </v-col>
           <v-col md="6" cols="12">
            <div class="featured-card">
              <div class="featured-img">
                <img src="/img/ellen.png" />
              </div>
              <div class="card-content">
                <div class="content-top d-flex">
                  <h3>Ellen Chisa </h3>
                  <ul class="d-flex">
                   
                    <li>
                      <a href="https://twitter.com/ellenchisa" target="blank">
                        <InlineSvg
                          src="/img/twitter.svg"
                          height="24"
                          class="slim-va-middle"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/ellenchisa/" target="blank"> 
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
                <p>
                  Founder, developer, and co-creator of the Dark programming language, Ellen Chisa provides guidance on product, developer advocacy, and growth strategy. She demos the product frequently and gives input on how to craft solutions developers love.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
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
<style lang="stylus" scoped>
.feature-advisors{
    font-family: "hk_grotesk";
    max-width: 1186px;
    margin: 0 auto; 
    padding: 61px 0;
    border-radius: 20px;
    text-align: center;
    background-color: #ECF8FE;
    .feature-content{
      max-width: 1015px;
      margin: 0 auto; 
      p{
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
        margin: 0 auto 39px;
        max-width: 843px;
        letter-spacing: 0.7px;
      }
      h2{
        font-size: 44px;
        line-height: 1;
        font-weight: 500;
        margin: 0 0 28px;
        letter-spacing: 0.3px;
      }
    }
    .featured-card{
        background-color: #fff;
        border-radius: 26px;
        box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
        -webkit-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
        -moz-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.14);
        .featured-img{
          background: rgba(254, 217, 132, 0.4);
          min-height: 300px;
          max-height: 300px;
          padding: 0
          border-radius: 26px 26px 0 0;
          display: flex;
          justify-content: center;
          padding-top: 25px;
         img{
           max-width: 100%;
         }
        }
        .kelsy-img{
          background-color: #fff;

        }
        .card-content{
        padding: 28px 29px 37px 33px;
        
        .content-top{
            align-items: center;
            justify-content: space-between;
            
            h3{
                margin: 0;
                font-size: 22px;
                line-height: 28px;
                font-weight: 500;
                @media (max-width: 959px){
                  font-size: 20px;
                }
            }
            ul{
                list-style: none;
                li{
                    margin: 0 15px 0 0;
                    @media (max-width: 480px){
                    margin: 0 9px 0 0;
                    }
                    a{
                        display: inline-block;
                    }
                    &:last-child{
                        margin-right: 0;
                    }
                }
            }
        }
        p{
            margin-top: 16px;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            text-align: left;
            margin-bottom: 0;
            letter-spacing: 0px;
        }
    }
   }
}
</style>
