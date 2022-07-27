
  <template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> Packages by License </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <HorizontalBar
              :styles="myStyles"
              :chartdata="packages"
              :options="chartOptions2"
            />
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

  <script>
import HorizontalBar from "./HorizontalBar.vue";

export default {
  name: "Modal",
  props: ["packages"],
  data: () => ({
    my_data: "",
    height:1350,
    barStyles: {
      position: "relative",
      display: "block",
      width: "1350px",
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
            size: 9,
          },
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRation: 10,

      legend: {
        display: false,
      },
      tooltips: {
        titleFontSize: 10,
        bodyFontSize: 10,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
              suggestedMax: 100,
            },
          },
        ],
        yAxes: [
          {
            BarThickness: 10,
            maxBarThickness: 20,

            ticks: {
              fontSize: 10,
              stepSize: 1,
              //autoSkip: false,

              //fontStyle: "bold",
              beginAtZero: false,
              fontColor: "black",
            },
          },
        ],
      },
    },
  }),
  components: {
    HorizontalBar,
  },
  watch: {
    packages: function () {},
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  computed: {
    myStyles () {
      if(this.packages['datasets'][0]['data'].length < 15)
      {
        this.height=500;
      }
      return {
        width: `${this.height}px`,
        position: 'relative'
      }
    }
  }
};
</script>


  <style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto !important;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  height: 500px;
  position: relative;
  padding: 20px 10px;
  overflow-y: scroll;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
