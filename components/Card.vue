<template>
  <v-app id="inspire" class="">
    <v-navigation-drawer
      v-if="shouldShowSidebar"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-treeview
        item-key="path"
        item-text="title"
        :items="sidebarItems"
        dense
        open-all
        hoverable
        open-on-click
        activatable
        @update:active="updateActive"
      >
      </v-treeview>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      :color="'#FFFFFF'"
      elevate-on-scroll
      id="navBar"
      class="pr-sm-12 pt-4"
      extended
      extension-height="30"
      v-if="c_name"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="shouldShowSidebar"
      />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4 text--black">
        <routerLink :to="$localePath">
          <img
            width="160"
            :src="$withBase('/img/logo_charcoal_424242.svg')"
            :alt="$siteTitle"
            class="ml-md-12 mt-1"
          />
        </routerLink>
      </v-toolbar-title>
      <v-spacer />
      <!-- <SearchBox class="hidden-xs-only"/> -->
      <v-menu v-if="isTablet" bottom left :offset-y="true" color="white">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <NavLinks class="d-flex flex-column" menuMode="true" />
      </v-menu>
      <NavLinks v-if="!isTablet" class="d-flex" />
    </v-app-bar>
    <!-- Note - please do not use <main> elements in child components -->
    <section
      class="bnr_blu"
      v-bind:style="c_name ? 'margin-top: 100px;' : 'margin-top: 0px;'"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="main_title">Container Insights</h1>
            <h3 class="subtitles">Popular Public Containers</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="section_search">
      <div class="wrap">
        <v-text-field
          label="Search Containers"
          prepend-inner-icon="mdi-magnify"
          solo
          dense
          @input="searchContainers"
          style="border-radius: 20px"
        ></v-text-field>
      </div>
    </section>

    <section class="section_cards">
      <div class="section_filter">
        <div class="section_filter_wrap">
          <div style="padding-bottom: 20px"><b>Category</b></div>
          <div
            style="margin-left: 10px"
            v-for="item in category"
            :key="item.index"
          >
            <v-checkbox
              :label="item"
              :value="item"
              v-model="checkedCategories"
              @change="setPage()"
            >
            </v-checkbox>
          </div>
        </div>
        <div class="wrap">
          <div class="pagination_wrap">
            <div class="pagination_col1">
              Total results : {{ listData.length }}
            </div>
            <div class="pagination_col2">
              <div class="pagination_col2_margin">Rows per page:</div>
              <div style="width: 70px">
                <v-select
                  v-model="size"
                  :items="pageSizes"
                  @change="handlePageSizeChange"
                ></v-select>
              </div>
              <div class="pagination_col2_margin">
                {{ pageNumber }} of
                {{ Math.ceil(listData.length / pageSize) }}
              </div>
            </div>
            <div>
              <v-pagination
                v-model="pageNumber"
                :length="Math.ceil(listData.length / size)"
                :total-visible="0"
                next-icon="mdi-menu-right"
                prev-icon="mdi-menu-left"
                @input="nextPage"
              />
            </div>
          </div>
          <div
            v-for="index in paginatedData"
            :key="index.digest_id"
            class="review-slide"
          >
            <div
              class="card_item active"
              :style="[
                isModalVisible
                  ? { border: '3px solid ' + colour, position: '' }
                  : { border: '3px solid ' + colour, position: 'relative' },
              ]"
            >
              <div class="card_item_top">
                <div class="icon">
                  <img :src="index.logo_path" alt="" class="imgs" />
                </div>
                <div class="captions">
                  <div class="head">
                    <div class="left_t">
                      <div class="titles">{{ index.container_name }}</div>
                      <div class="subtitles">{{ index.description }}</div>
                    </div>
                    <div class="right_b d_show">
                      <a title="Recently Updated" v-if="isCategoryExist(index.category)"
                        ><img
                          class="refresh_icon"
                          src="/img/scan/refresh.svg"
                          alt="refresh"
                        />
                      </a>
                      <a
                        v-bind:href="href_url(index.container_full_name)"
                        class="btn_blue"
                        >FULL PROFILE</a
                      >
                    </div>
                  </div>
                  <div class="content_p">
                    <div class="infos">
                      <p>
                        <strong>File Size:</strong>
                        {{ (index.file_size / 1000000).toFixed(2) }} MB
                      </p>
                      <p>
                        <strong>Updated:</strong>
                        {{ formatDate(index.last_updated) }}
                      </p>
                      <a :href="index.registry_url">
                        <div class="ico_txt">
                          <div class="icon">
                            <img src="/img/scan/dockerhub.svg" alt="" />
                          </div>
                          <div class="content">{{ index.registry }}</div>
                        </div>
                      </a>
                    </div>
                    <div class="info_btm_wrap d_show">
                      <div class="info_btm">
                        <div class="badge_itm_wrap">
                          <div class="badge_itm">
                            <div class="bi_small">Pulls</div>
                            <div class="bi_value">
                              {{ formattedCount(index.pull_count) }}
                            </div>
                          </div>
                        </div>
                        <div class="badge_itm_wrap">
                          <div class="badge_itm">
                            <div class="bi_small">Layers</div>
                            <div class="bi_value">
                              {{ formattedCount(index.layer_count) }}
                            </div>
                          </div>
                        </div>
                        <div class="badge_itm_wrap">
                          <div class="badge_itm">
                            <div class="bi_small">Vulnerabilities</div>
                            <div class="bi_value">
                              {{ formattedCount(index.volunerability_count) }}
                            </div>
                          </div>
                        </div>
                        <div class="badge_itm_wrap">
                          <div class="badge_itm">
                            <div class="bi_small">Packages</div>
                            <div class="bi_value">
                              {{ formattedCount(index.package_count) }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right_b m_show">
                <a
                  v-bind:href="href_url(index.container_full_name)"
                  class="btn_blue"
                  >FULL PROFILE</a
                >
              </div>
              <div class="info_btm_wrap m_show">
                <div class="info_btm">
                  <div class="badge_itm_wrap">
                    <div class="badge_itm">
                      <div class="bi_small">Pulls</div>
                      <div class="bi_value">
                        {{ formattedCount(index.pull_count) }}
                      </div>
                    </div>
                  </div>
                  <div class="badge_itm_wrap">
                    <div class="badge_itm">
                      <div class="bi_small">Layers</div>
                      <div class="bi_value">{{ index.layer_count }}</div>
                    </div>
                  </div>
                  <div class="badge_itm_wrap">
                    <div class="badge_itm">
                      <div class="bi_small">Vulnerabilities</div>
                      <div class="bi_value">
                        {{ index.volunerability_count }}
                      </div>
                    </div>
                  </div>
                  <div class="badge_itm_wrap">
                    <div class="badge_itm">
                      <div class="bi_small">Packages</div>
                      <div class="bi_value">{{ index.package_count }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card_item_btm"
                v-if="isExpanded(index.container_name)"
              >
                <div class="item_wrap">
                  <div class="item" v-if="layers(index.layer_summary)">
                    <div class="titles">Layers</div>
                    <div class="graph_wrap">
                      <HorizontalBar
                        :styles="barStyles"
                        :chartdata="layers(index.layer_summary)"
                        :options="chartOptions1"
                      />
                    </div>
                  </div>
                  <div class="item" v-else>
                    <div class="titles">Layers</div>
                    <div class="graph_wrap graph_nodata">No Data Available</div>
                  </div>
                  <div
                    class="item"
                    v-if="
                      vulns_severity_count_validation(
                        index.vulns_severity_count
                      )
                    "
                  >
                    <div class="titles">Vulnerabilities</div>
                    <div class="graph_wrap">
                      <HorizontalBar
                        :styles="barStyles"
                        :chartdata="vulnSeverity(index.vulns_severity_count)"
                        :options="chartOptions2"
                      />
                    </div>
                  </div>
                  <div class="item" v-else>
                    <div class="titles">Vulnerabilities</div>
                    <div class="graph_wrap graph_nodata">No Data Available</div>
                  </div>

                  <div
                    class="item"
                    v-if="
                      vulns_severity_count_validation(index.pakage_by_licenses)
                    "
                  >
                    <div class="titles">Packages by License</div>
                    <div class="package_graph_wrap">
                      <HorizontalBar
                        :styles="barStyles"
                        :chartdata="
                          package_by_license(index.pakage_by_licenses, 5)
                        "
                        :options="chartOptions2"
                      />
                      <button
                      type="button"
                      class="btn"
                      @click="showModal(index.pakage_by_licenses)"
                      v-if="get_package_count(index.pakage_by_licenses)"
                    >
                      View More Licenses
                    </button>
                    </div>
                    
                    <PackageLicense
                      :packages="package_by_license(packages, 'all')"
                      v-show="isModalVisible"
                      @close="closeModal"
                      v-if="packages"
                    />
                  </div>
                  <div class="item" v-else>
                    <div class="titles">Packages by License</div>
                    <div class="graph_wrap graph_nodata">No Data Available</div>
                  </div>
                </div>
              </div>
              <a @click="toggleExpansion(index.container_name)">
                <div
                  class="collapse_link_down"
                  v-if="isExpanded(index.container_name)"
                >
                  Less Information
                </div>
                <div class="collapse_link_up" v-else>More Information</div>
              </a>
            </div>

            <br />
          </div>

          <v-col v-if="listDatalength()">
            <v-row style="display: block">
              <div class="pagination_wrap">
                <div class="pagination_col1"></div>
                <div class="pagination_col2">
                  <div class="pagination_col2_margin">Rows per page:</div>
                  <div style="width: 70px">
                    <v-select
                      v-model="size"
                      :items="pageSizes"
                      @change="handlePageSizeChange"
                    ></v-select>
                  </div>
                  <div class="pagination_col2_margin">
                    {{ pageNumber }} of
                    {{ Math.ceil(listData.length / pageSize) }}
                  </div>
                </div>
                <div style="width: auto">
                  <v-pagination
                    v-model="pageNumber"
                    :length="Math.ceil(listData.length / size)"
                    :total-visible="0"
                    next-icon="mdi-menu-right"
                    prev-icon="mdi-menu-left"
                    @input="nextPage"
                  />
                </div>
              </div>
            </v-row>
          </v-col>
        </div>
      </div>
    </section>
  </v-app>
</template>

<script>
import NavLinks from "@theme/components/NavLinks.vue";
import PackageLicense from "@theme/components/PackageLicense.vue";

import { resolveSidebarItems } from "../util";
import GlobalConstants from "../GlobalConstants";
import { fetchContainersJson } from "@theme/card/apiService.js";
import HorizontalBar from "@theme/components/HorizontalBar.vue";

import {
  vulns_severity_count,
  layer_summary,
  package_license_count,
} from "@theme/card/util.js";
import moment from "moment";
import ChartJSPluginDatalabels from "chartjs-plugin-datalabels";

//import json from "../sample.json";

export default {
  props: {
    source: String,
  },
  components: {
    NavLinks,
    GlobalConstants,
    HorizontalBar,
    PackageLicense,
  },

  data: () => ({
    isModalVisible: false,

    dialog: false,
    drawer: null,
    c_name: null,

    packages: null,
    isSmallBreakpoint: false,
    isMobile: false,
    isTablet: false,
    selected_containers: [],
    containers: [],
    colour: "#DCDCDC",
    expandedGroup: [],
    category: [],
    repository: [],
    checkedCategories: [],
    listData: [],
    pageNumber: 1,
    size: 10,
    pageSizes: [],
    pageSize: 10,
    barStyles: {
      position: "relative",
      display: "block",
      width: "225px",
    },
    chartOptions1: {
      plugins: {
        datalabels: {
          anchor: "end", // remove this line to get label in middle of the bar
          align: "end",
          formatter: (val) =>
            val % 1 != 0 ? val.toFixed(2) + " MB" : val + " MB",
          labels: {
            value: {
              color: "blue",
            },
          },
          font: {
            //weight: "bold",
          },
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRation: 5,

      legend: {
        display: false,
      },
      tooltips: {
        titleFontSize: 20,
        bodyFontSize: 25,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
              suggestedMax: 1000,
            },
          },
        ],
        yAxes: [
          {
            maxBarThickness: 15,

            ticks: {
              //fontStyle: "bold",
              fontColor: "black",

              beginAtZero: false,
            },
          },
        ],
      },
    },
    chartOptions2: {
      plugins: {
        datalabels: {
          anchor: "end", // remove this line to get label in middle of the bar
          align: "end",
          formatter: (val) => (val % 1 != 0 ? val.toFixed(2) : val),
          labels: {
            value: {
              color: "blue",
            },
          },
          font: {
            //weight: "bold",
          },
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRation: 5,

      legend: {
        display: false,
      },
      tooltips: {
        titleFontSize: 20,
        bodyFontSize: 25,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
              suggestedMax: 500,
            },
          },
        ],
        yAxes: [
          {
            barThickness: 15,
            maxBarThickness: 15,

            ticks: {
              //fontStyle: "bold",
              beginAtZero: false,
              fontColor: "black",
            },
          },
        ],
      },
    },
  }),

  computed: {
    pageCount() {
      let l = this.listData.length,
        s = this.size;
      return Math.ceil(l / s) - 1;
    },

    paginatedData() {
      const start = this.pageNumber * this.size - this.size,
        end = start + this.size;
      if (!this.checkedCategories.length) {
        this.listData = this.selected_containers;
        return this.listData.slice(start, end);
      } else {
        this.listData = [];
        for (let i = 0; i < this.checkedCategories.length; i++) {
          let filter = this.selected_containers.filter((obj) =>
            obj.category.includes(this.checkedCategories[i])
          );
          this.listData.push(...filter);
        }
        const ids = this.listData.map((o) => o.digest_id);
        const filtered_list = this.listData.filter(
          ({ digest_id }, index) => !ids.includes(digest_id, index + 1)
        );
        this.listData = filtered_list;
        return this.listData.slice(start, end);
      }
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },
    sidebarItems() {
      const items = resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );

      return items;
    },
  },
  watch: {
    listData: function () {},
  },
  methods: {
    isCategoryExist(category){
      return category.includes("Recently Updated")
    },

    showModal(dt) {
      this.isModalVisible = true;
      this.packages = dt;
    },
    closeModal() {
      this.isModalVisible = false;
      this.packages = "";
    },

    setPage() {
      this.pageNumber = 1;
    },
    nextPage(page) {
      this.pageNumber = page;
    },
    handlePageSizeChange(size) {
      this.pageSize = size;
      this.pageNumber = 1;
    },
    listDatalength() {
      return this.listData.length > 0;
    },
    getCategory() {
      for (let i in this.listData) {
        for (let j in this.listData[i].category) {
          this.category.push(this.listData[i].category[j]);
        }
      }
      return [...new Set(this.category)].sort();
    },
    getMainColClass() {
      if (
        // this.$route.fullPath === "/blog/" ||
        this.$route.fullPath === "/terms-of-use.html" ||
        this.$route.fullPath === "/privacy-policy.html" ||
        this.$route.fullPath === "/release-notes.html"
      ) {
        return "mtCol";
      }
    },
    updateActive(active) {
      if (active[0] == undefined) return;
      const path = active[0].replace(".html", "");

      this.$router.push(path);
    },
    onResize() {
      this.isSmallBreakpoint = window.innerWidth < GlobalConstants.mdBreakpoint;
      this.isMobile = window.innerWidth < GlobalConstants.lgBreakpoint;
      this.isTablet = window.innerWidth < GlobalConstants.xlBreakpoint;
    },
    formatDate(date) {
      return moment(date).fromNow();
    },
    isExpanded(key) {
      if (key == this.c_name) {
        return this.expandedGroup.indexOf(key) == -1;
      }
      return this.expandedGroup.indexOf(key) !== -1;
    },

    toggleExpansion(key) {
      if (this.isExpanded(key)) {
        if (key == this.c_name) {
          this.expandedGroup.push(key);
        } else this.expandedGroup.splice(this.expandedGroup.indexOf(key), 1);
      } else {
        if (key == this.c_name) {
          this.expandedGroup.splice(this.expandedGroup.indexOf(key), 1);
        } else this.expandedGroup.push(key);
      }
    },
    vulns_severity_count_validation(vulns_severity_count) {
      if (Object.keys(vulns_severity_count).length) {
        return true;
      }
    },

    get_package_count(count) {
      if (Object.keys(count).length > 5) {
        return true;
      }
    },
    vulnSeverity(datas) {
      return vulns_severity_count(datas);
    },

    package_by_license(datas, count) {
      return package_license_count(datas, count);
    },
    formattedCount(count) {
      if (count < 1000) {
        return count;
      } else if (count < 1000000) {
        return (count / 1000).toFixed(1) + " K";
      } else if (count < 1000000000) {
        return (count / 1000000).toFixed(1) + " M";
      } else {
        return (count / 1000000000).toFixed(1) + " B";
      }
    },
    layers(datas) {
      return layer_summary(datas);
    },
    href_url: function (item) {
      let container_name = item.includes("/") ? item : "library/" + item;

      return (
        "https://portal.slim.dev/home/xray/dockerhub%3A%2F%2Fdockerhub.public%2F" +
        encodeURIComponent(container_name)
      );
    },

    searchContainers(val) {
      this.pageNumber = 1;
      this.selected_containers = this.containers.filter((cr) =>
        cr.container_name.match(val.toLowerCase())
      );
      this.listData = this.selected_containers;
    },
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  async mounted() {
    document.title = "Recent Container Scan | Slim.AI";

    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    //fetchContainers().then((list) => {
    //this.containers = list;
    // console.log(this.containers)
    //})
    this.c_name = this.$route.params.id;

    this.containers = await fetchContainersJson();

    if (this.c_name) {
      this.selected_containers = this.containers.filter(
        (obj) => obj.container_name == this.c_name
      );
      this.selected_containers = [
        ...this.selected_containers,
        ...this.containers.filter((obj) => obj.container_name !== this.c_name),
      ];
    } else {
      this.selected_containers = this.containers;
    }
    this.listData = this.selected_containers;

    this.category = this.getCategory();

    this.pageSizes = [5, 10, 50, 100, 200, 500];
  },
};
</script>


<style lang="stylus">
.v-input--selection-controls.v-input {
  margin-top: 0px;
}

.v-text-field__slot {
  padding: 10px;
}


.documents_wrap {
  font-family: var(--font-primary);
  overflow-x: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: hk_grotesk, sans-serif;
  letter-spacing: 0.9px;
}

.bnr_blu {
  background: #1F6BF1 url('/img/scan/XRaypng.png') no-repeat right / 282px;
  text-align: center;
  padding: 18px 0 15px 0;
  font-family: hk_grotesk, sans-serif;
}

.imgs {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.refresh_icon {
  position: relative;
  margin: -14px 2px;
}

.m_show {
  display: none;
}

.d_show {
  display: block;
}

.badge_itm_wrap {
  padding-right: 8px;
  padding-left: 8px;
}

.badge_itm {
  width: 118px;
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  text-align: center;
}

.badge_itm .bi_small {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 2px;
  color: #616161;
}

.badge_itm .bi_value {
  font-size: 28px;
  line-height: 38px;
  color: #434444;
}

.section_filter {
  display: flex;
  width: 100%;
  margin: 0 auto;
}

.section_filter_wrap {
  margin: 0px auto;
  padding: 30px 30px 0 10px;
  margin-right: 0px;
}

.section_cards {
  padding: 0px 0 60px 0;
  font-family: hk_grotesk, sans-serif;
}

.section_search {
  padding: 60px 0 0px 0;
}

.section_search .wrap {
  width: 1272px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.section_cards .wrap {
  width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
}

.card_item {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 3px solid transparent;
  padding: 24px 35px 58px 35px;
  border-radius: 4px;
  margin-bottom: 32px;
}

.card_item:nth-last-child(1) {
  margin-bottom: 0;
}

.card_item.red {
  border: 3px solid #CC2B37;
}

.card_item.orange {
  border: 3px solid #F58536;
}

.card_item.blue {
  border: 3px solid #2150A1;
}

.card_item_top {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-family: hk_grotesk, sans-serif;
}

.card_item_top .icon {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-right: 25px;
}

.card_item_top .captions {
  color: #616161;
  width: calc(100% - 105px);
  font-family: hk_grotesk, sans-serif !important;
}

.card_item_top .head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
}

.btn_blue {
  display: inline-block;
  background-color: #1F6BF1;
  color: white !important;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.6px;
  margin: 0;
  padding: 11px 14px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
}

.card_item_top .titles {
  font-size: 30px;
  line-height: 36px;
  font-weight: 500;
  margin-bottom: 4px;
}

.card_item_top .main_title {
  font-size: 30px;
  line-height: 36px;
  font-weight: 500;
  margin-bottom: 4px;
}

.card_item_top .subtitles {
  font-size: 18px;
  font-weight: 500;
  max-width: 635px;
}

.card_item_top .infos p {
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
  margin-bottom: 4px;
  color: #616161;
}

.content_p {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.card_item_top .infos {
  width: 260px;
  margin-right: 20px;
}

.card_item_top .infos p:nth-child(2) {
  margin-bottom: 20px;
}

.ico_txt {
  display: flex;
  align-items: center;
}

.ico_txt .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  margin-right: 6px;
}

.ico_txt .content {
  width: calc(100% - 28px);
  font-size: 16px;
  font-weight: 600;
  color: #616161;
  margin-left: 4px;
  text-transform: capitalize;
}

.info_btm_wrap {
  width: calc(100% - 280px);
}

.info_btm {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-left: -8px;
}

.info_btm .badge_itm_wrap {
  padding-right: 8px;
  padding-left: 8px;
  width: 25%;
}

.info_btm .badge_itm {
  width: 100%;
  padding: 6px 2px;
}

.info_btm .badge_itm .bi_small {
  line-height: 20px;
}

.info_btm .badge_itm .bi_value {
  line-height: 44px;
}

.card_item .card_item_btm {
  display: none;
  margin-top: 49px;
  padding: 0 65px;
}

.card_item.active .card_item_btm {
  display: block;
}

.card_item_btm .item_wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-left: -8px;
}

.card_item_btm .item_wrap .item {
  position: relative;
  width: 33%;
  padding-right: 8px;
  padding-left: 8px;
  text-align: center;
}

.card_item_btm .item_wrap .item:nth-child(2) {
  width: 33%;
}

.card_item_btm .item_wrap .item .titles {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #616161;
}

.card_item_btm .item_wrap .item .graph_wrap {
  border: 1px solid #616161;
  border-radius: 4px;
  padding: 18px 11px;
}
.package_graph_wrap{
   border: 1px solid #616161;
  border-radius: 4px;
  height:262px;
  padding:8px;
}
.graph_nodata {
  display: flex;
  height: 260px;
  align-items: center;
}

.card_item_btm .item_wrap .item .discription {
  width: 100%;
  height: 71px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #616161;
  display: flex;
  align-items: center;
}

.card_item .collapse_link_up {
  position: absolute;
  bottom: 19px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-decoration: none;
  color: #434444;
  display: flex;
  align-items: center;
  width: 168px;
  letter-spacing: 0.8px;
  font-size: 14px;
}

.card_item .collapse_link_up::before {
  margin-right: 8px;
}

.card_item .collapse_link_up::after {
  display: block;
  content: '';
  background: url('/img/scan/mdi_chevron-down.svg') no-repeat center;
  width: 24px;
  height: 24px;
}

.card_item .collapse_link_down {
  position: absolute;
  bottom: 19px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-decoration: none;
  color: #434444;
  display: flex;
  align-items: center;
  width: 168px;
  letter-spacing: 0.8px;
  font-size: 14px;
}

.card_item .collapse_link_down.active {
  width: 150px;
  transition: all 0.15s ease-in-out;
}

.card_item .collapse_link_down::before {
  content: '';
  margin-right: 8px;
}

.card_item .collapse_link_down::after {
  display: block;
  content: ' ';
  background: url('/img/scan/mdi_chevron-down.svg') no-repeat center;
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
}

.bnr_blu {
  text-align: center;
  background-position: right 0px bottom 0px;
  display: block;
}

.bnr_blu .titles {
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  line-height: 46px;
  margin: 20px;
}

.bnr_blu .main_title {
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  line-height: 46px;
  margin: 20px;
}

.bnr_blu .subtitles {
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  line-height: 26px;
  margin: 0 0 26px 0;
}

.bnr_blu .btn_white {
  display: inline-block;
  background-color: #fff;
  color: #1F6BF1;
  border: 1px solid #1F6BF1;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.6px;
  margin: 0;
  padding: 11px 14px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}

.pagination_wrap {
  display: flex;
  padding: 10px 0 0 0;
}

.pagination_col1 {
  width: 60%;
}

.pagination_col2 {
  display: flex;
  width: 400px;
  justify-content: flex-end;
}

.pagination_col1 {
  margin: 25px 0 0 0px;
  font-size: 16px;
}

.pagination_col2_margin {
  margin: 20px 20px;
}

@media screen and (max-width: 1199.999px) {
  .content_p {
    flex-direction: column;
  }

  .card_item_top .infos {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 20px;
  }

  .card_item_btm .item_wrap .item {
    width: 50%;
    margin-bottom: 20px;
  }

  .card_item_btm .item_wrap .item:nth-child(2) {
    width: 50%;
  }

  .info_btm_wrap {
    width: 100%;
  }
}

@media screen and (max-width: 991.999px) {
  .section_search .wrap {
    width: 90%;
  }

  .card_item_top .head {
    display: flex;
    flex-direction: column;
  }

  .card_item_top .head .left_t {
    margin-bottom: 16px;
  }

  .info_btm .badge_itm_wrap {
    width: 50%;
    margin-bottom: 16px;
  }

  /* .card_item_top .icon{
    margin-bottom: 20px;
  } */
  .card_item_btm .item_wrap .item, .card_item_btm .item_wrap .item:nth-child(2) {
    width: 100%;
  }

  .content_p {
    align-items: center;
  }
}

@media screen and (max-width: 749.999px) {
  .m_show {
    display: block;
  }

  .d_show {
    display: none;
  }

  .hs_wrap {
    width: 480px;
  }

  .badge_itm_wrap {
    margin-bottom: 16px;
    width: 50%;
  }

  .badge_itm_wrap:nth-last-child(-n+2) {
    margin-bottom: 0;
  }

  .badge_itm {
    width: 100%;
  }

  .hs_item_top .icon {
    margin-bottom: 10px;
  }

  .hs_item_top .titles, .card_item_top .titles {
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 6px;
  }

  .hs_item_top .subtitles, .card_item_top .subtitles, .bnr_blu .subtitles {
    font-size: 16px;
    display: none;
  }

  .hs_item_top .infos p:nth-last-child(1) {
    display: none;
  }

  .section_hs .main_head>.titles, .bnr_blu .titles {
    font-size: 26px;
    line-height: 32px;
    margin: 0 0 6px 0;
  }

  .section_hs .main_head>.subtitles {
    font-size: 22px;
    line-height: 32px;
  }

  .section_cards .wrap {
    width: auto;
    margin: 0 15px;
  }

  .section_search .wrap {
    width: auto;
    margin: 0 15px;
  }

  .card_item .card_item_btm {
    display: none;
    margin-top: 30px;
    padding: 0;
  }

  .card_item_top .captions {
    width: calc(100% - 74px);
  }

  .card_item_top > .icon {
    width: 56px;
    height: 56px;
    margin-right: 18px;
  }

  .info_btm_wrap {
    padding-left: 0px;
  }

  .right_b {
    margin-bottom: 24px;
  }

  .right_b.m_show .btn_blue {
    width: 100%;
  }

  .card_item_top .head {
    margin-bottom: 0;
  }

  .card_item_top .infos {
    margin-bottom: 20px;
  }

  .section_filter_wrap {
    display: none;
  }
}

@media screen and (max-width: 479.999px) {
  .ico_txt {
    display: none;
  }
  .btn{
    display:none;
  }
  .main_title {
    width: 50%;
    text-align: left;
    margin: 15px 0px 0 5px !important;
    height: 125px;
  }

  .hs_wrap {
    width: 391px;
  }

  .badge_itm {
    width: 111px;
  }

  .badge_itm .bi_small {
    font-size: 12px;
  }

  .badge_itm_wrap:nth-last-child(-n+2) {
    margin-bottom: 0;
  }

  .card_item_top .infos {
    margin-bottom: 0px;
  }

  .bnr_blu {
    background-size: 200px 175px;
    padding: 18px 0 15px;
  }

  .pagination_wrap {
    width: 370px;
  }

  .pagination_col1 {
    display: none;
  }

  .pagination_col2 {
    width: 320px;
  }

  .pagination_col2_margin {
    margin: 10px 10px;
  }

  canvas {
    width: 250px !important;
  }

  .section_filter_wrap {
    display: none;
  }
}
</style>