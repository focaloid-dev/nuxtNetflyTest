<template>
  
  <section class="investors">
   <v-container>
   <div class="investors-wrapper">
   <h2> Our Investors </h2>
    <div class="investors-info">
      <v-row class="align-items-center justify-space-between no-gutters" no-gutter>
        <v-col cols="12" md="2" class="text-center mr-1">
          <a href="https://www.boldstart.vc" target="_blank">
              <img src="/img/boldstart.png" class="vcimg firstInvestorsRow" />
          </a>
        </v-col>
        <v-col cols="12" md="2" class="text-center">
          <a href="https://www.decibel.vc" target="_blank">
              <img src="/img/decibel.png" class="vcimg firstInvestorsRow" />
          </a>
        </v-col>
        <v-col cols="12" md="2" class="text-center">
          <a href="https://www.fxpventures.com" target="_blank">
            <img src="/img/FXP.png"  class="vcimg firstInvestorsRow" />
          </a>
        </v-col>
      </v-row>
      <v-row class="align-items-center justify-space-between no-gutters secondInvestorsRow" no-gutter>
        <v-col cols="12" md="2" class="text-center mr-1">
          <a href="https://www.insightpartners.com/" target="_blank">
              <img src="/img/insight-partners-logo.png" class="vcimg" />
          </a>
        </v-col>
        <v-col cols="12" md="2" class="text-center mr-1">
          <a href="https://www.linkedin.com/company/knollwood-investment-advisory/" target="_blank">
              <img src="/img/Knollwood_logo_02.jpg" class="vcimg" />
          </a>
        </v-col>
        <v-col cols="12" md="2" class="text-center mr-1">
          <a href="https://www.stepstonegroup.com/" target="_blank">
              <img src="/img/Stepstone_Logo_ElectronicPrint_HighRes.jpg" class="vcimg" />
          </a>
        </v-col>
        <v-col cols="12" md="2" class="text-center">
          <a href="https://www.founderpartners.vc" target="_blank">
              <img src="/img/techaviv.png" class="vcimg"  />
          </a>
        </v-col>
      </v-row>
    </div>
   </div>
   </v-container>
  </section>

</template>

<style scoped lang="stylus">

.investors {
  padding: 95px 0;
  .investors-wrapper{
    max-width: 1186px;
    margin: 0 auto;
  }
  h2{
    font-size: 44px;
    line-height: 1;
    font-weight: 500;
    margin: 0 0 52px;
    letter-spacing: 0.3px;
    text-align: center;
  }
  .investors-info{
    border-top: 1px solid #D8D8D8;
    padding: 47px 0 0px;
    a{
      padding: 0;
      img{
        max-width: 100%;
      }
      @media (max-width: 959px){
        margin-bottom: 35px;
      }
    }
  }
}
.firstInvestorsRow {
  width: 235px;
}
.investors div a {
  display: block;
  padding: 2rem 0 0 0;
}
@media (max-width: $MQMobile) {
  .titleFont {
    font-size:30px;
  }
}
@media (max-width: $MQMobileNarrow) {
  .titleFont {
    font-size:30px;
  }
}
@media (min-width: 985.1px) and (max-width: 1199px) {
  .vcimg {
    width: 15vw;
  }
}
@media (min-width: 1199.1px) {

}
@media (min-width: 959px) {
  .secondInvestorsRow {
    margin-top: 48px;
  }
}
</style>