<template>
  <section class="footer">
    <div class="appbar">
      <v-row class="justify-space-between" align="center" justify="center">
        <v-col
          cols="12"
          md=""
          class="
            justify-center justify-md-start
            d-flex
            flex-column
            text-center text-md-left
          "
        >
          <span class="legalLinks" :class="isBlogView() ? 'blockLinks' : null">
            <span class="pl-2 pr-2 slimfont18">
              <a href="#" target="_blank"
                >Terms &#38; Conditions</a
              >
            </span>
            <span class="pl-2 pr-2 slimfont18">
              <a href="#" target="_blank">Privacy Policy</a>
            </span>
            <span class="pl-2 pr-2 slimfont18">
              <a href="#" target="_blank">Our Company</a>
            </span>
            <span class="pl-2 pr-2 slimfont18">
              <a href="#" target="">Contact Us</a>
            </span>
          </span>
        </v-col>
        <v-col
          cols="12"
          md="2"
          class="justify-center text-center"
          order="first"
          order-md="0"
        >
         
        </v-col>
        <v-col cols="12" md="" class="justify-end text-center text-md-right">
          
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
// import PageEdit from '@theme/components/PageEdit.vue'
// import PageNav from '@theme/components/PageNav.vue'

import GlobalConstants from "../GlobalConstants";

export default {
  props: ["pageName"],
  methods: {
    isBlogView() {
      return this.pageName === "blog";
    },
  },
  data: () => ({
    GlobalConstants,
  }),
};
</script>

<style>
.footer {
  background-color: $btnSecondaryHoverColor;
  padding: 24px 60px;
}

.slimboldfont16 {
  font-size: 16px;
  font-weight: normal;
}

.slimfont18 {
  font-size: 13px;
  font-weight: 700;

  a {
    color: $black;
    text-transform: uppercase;
    padding-bottom: 3px;
    border-bottom: 1px solid #000000;
    letter-spacing: 0.6px;

    &:hover {
      color: $textColor;
    }
  }
}

a.img-nav-item {
  text-decoration: none;
}

.img-nav-item:hover {
  color: black;
  cursor: pointer;
}

.slim-va-middle {
  vertical-align: middle;
}

a.text-nav-item {
  text-decoration: none;
}

a.text-nav-item:hover {
  color: #373A36;
  text-decoration: underline;
  cursor: pointer;
}

a.img-nav-item {
  text-decoration: none;

  i {
    color: $btnPrimaryBgColor !important;
  }

  svg, svg path {
    fill: $btnPrimaryBgColor !important;
  }

  &:hover {
    i {
      color: $blueBgColor !important;
    }

    svg, svg path {
      fill: $blueBgColor !important;
    }
  }
}

.colorDark {
  color: #444444 !important;
}

.colorGreyed {
  color: #707070 !important;
}

.colorDark2 {
  color: #373A36 !important;
}

.blockLinks {
  display: block;
  margin-top: 8px;
}

@media (max-width: $MQMobile) {
  .footer {
    padding: 2rem 2rem 3rem 2rem;
  }
}

@media (max-width: $MQMobileNarrow) {
  .footer {
    padding: 1rem 1rem 2rem 1rem;
  }
}

@media (max-width: 1440px) {
  .legalLinks {
    display: block;
  }
}
</style>
