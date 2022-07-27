 <template>
  <div>
    <div class="main-banner" :style="{ backgroundColor: backgroundColor }">
      <v-container >
        <div class="banner-content">
          <h1>{{ title }}</h1>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "backgroundColor"],
};
</script>
<style>
.main-banner {
  padding: 73px 0 53px;
  text-align: center;
  position: relative;
  font-family: "hk_grotesk";
}
.main-banner h1 {
  font-size: 56px;
  line-height: 1.3;
  color: #000000;
  text-transform: capitalize;
  font-weight: 500;
  margin: 0;
  letter-spacing: -0.6px;
}
</style>