<template>
  
 <section class="padded mission">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="section2header titleFont text-center colorDark2">{ Our Mission }</div>
            <div class="section2subtitle mx-auto mt-10 slimfontbk24 colorDark2">To help application developers create, build, deploy and run THEIR cloud native apps with zero friction, complexity and waste. Because it sucks to go slow at building the apps that power EVERY business.</div>  
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="stylus">
.slimfontbk24 {
  font-family: 'AvantGardeGothicITCW01Bk';
  font-size: 24px;
  font-weight: 600;
}
.padded {
  padding:5rem 0;
}
.section2subtitle {
  max-width: 600px;
  text-align: center;
}
.mission {
  background-image: url(/img/team-sec02-cloud.svg), url(/img/team-sec02-cloud.svg);
  background-position: 103% 20%, -3% 80%;
  background-repeat: no-repeat, no-repeat;
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
  .mission {
    background-image: url(/img/team-sec02-cloud.svg), url(/img/team-sec02-cloud.svg);
    background-position: 120% 0%, -20% 100%;
    background-repeat: no-repeat, no-repeat;
  }
}
@media (min-width: 985.1px) and (max-width: 1199px) {

}
@media (min-width: 1199.1px) {

}
</style>