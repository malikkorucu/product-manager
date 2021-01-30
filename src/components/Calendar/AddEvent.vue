<template>
  <div>
    <div class="row my-0 px-1">
      <form class="col s12">
        <div class="row">
          <div class="col-md-12 pb-0 mb-0"><h3>Yeni Plan Ekle</h3></div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <i class="fas fa-paper-plane prefix"></i>
            <input
              v-model="name_"
              id="last_name"
              type="text"
              class="validate"
            />
            <label for="last_name">Plan Adı</label>
          </div>
        </div>
      </form>
    </div>

    <v-row>
   
      <v-col cols="12" sm="6" class="py-0">
        <v-container class="p-0">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted"
                label="Başlangıç Tarihi"
                hint="MM/DD/YYYY format"
                prepend-icon="event"
                v-bind="attrs"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
                class="py-5 mt-2"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-container>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-row>
          <v-col cols="12" sm="12">
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="time"
                  label="Başlangıç Saati"
                  prepend-icon="access_time"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="time"
                full-width
                @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-col>

      <div class="row px-3 py-0 my-0">

        <div class="col-md-6 px-5">
          <label for="a">Aktivite Süresi</label>
          <sui-dropdown
          
            :options="hours"
            placeholder="Aktivite Süresi"
            selection
            v-model="current_hour"
            class="w-100"
          />
        </div>
        <div class="col-md-6 px-5">
          <label for="a">Hatırlatıcı Rengi</label>
          <sui-dropdown
            :options="colors"
            placeholder="Hatırlatıcı Rengi"
            selection
            v-model="current_color"
            class="w-100"
            id="a"
          />
        </div>
      </div>
    </v-row>

    <button @click="addPlan(dateData)" class="btn btn-danger btn-block">
      ekle
    </button>
  </div>
</template>

<script>
import M from "materialize-css";


export default {
  components: {},
  data(vm) {
    return {
      current_hour: null,
      current_color: null,
      hours: [
        { key: "1", text: "1 saat", value: "1" },
        { key: "2", text: "2 saat", value: "2" },
        { key: "3", text: "3 saat", value: "3" },
        { key: "4", text: "4 saat", value: "4" },
        { key: "5", text: "5 saat", value: "5" },
        { key: "6", text: "6 saat", value: "6" },
        { key: "7", text: "7 saat", value: "7" },
        { key: "8", text: "8 saat", value: "8" },
        { key: "9", text: "9 saat", value: "9" },
        { key: "10", text: "10 saat", value: "10" },
        { key: "11", text: "11 saat", value: "11" },
        { key: "12", text: "12 saat", value: "12" },
        { key: "13", text: "13 saat", value: "13" },
        { key: "14", text: "14 saat", value: "14" },
        { key: "15", text: "15 saat", value: "15" },
        { key: "16", text: "16 saat", value: "16" },
        { key: "17", text: "17 saat", value: "17" },
        { key: "18", text: "18 saat", value: "18" },
        { key: "19", text: "19 saat", value: "19" },
        { key: "20", text: "20 saat", value: "20" },
        { key: "21", text: "21 saat", value: "21" },
        { key: "22", text: "22 saat", value: "22" },
        { key: "23", text: "23 saat", value: "23" },
        { key: "24", text: "1 gün", value: "24" },
        { key: "25", text: "2 gün", value: "48" },
        { key: "26", text: "3 gün", value: "72" },
        { key: "27", text: "4 gün", value: "96" },
        { key: "28", text: "5 gün", value: "120" },
        { key: "29", text: "6 gün", value: "144" },
        { key: "30", text: "7 gün", value: "168" },
        { key: "31", text: "8 gün", value: "192" },
        { key: "32", text: "9 gün", value: "216" },
        { key: "33", text: "10 gün", value: "240" },
        { key: "34", text: "11 gün", value: "264" },
        { key: "35", text: "12 gün", value: "288" },
        { key: "36", text: "13 gün", value: "312" },
        { key: "37", text: "14 gün", value: "336" },
        { key: "38", text: "15 gün", value: "360" },
        { key: "39", text: "16 gün", value: "384" },
        { key: "40", text: "17 gün", value: "408" },
        { key: "41", text: "18 gün", value: "432" },
        { key: "42", text: "19 gün", value: "456" },
        { key: "43", text: "20 gün", value: "480" },
        { key: "44", text: "21 gün", value: "504" },
        { key: "45", text: "22 gün", value: "528" },
        { key: "46", text: "23 gün", value: "552" },
],

      name_: "",
      time: null,
      menu2: false,
      modal2: false,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,

      colors: [
         { key: "1", text: "blue", value: "blue" },
         { key: "2", text: "indigo", value: "indigo" },
         { key: "3", text: "grey darken-1", value: "grey darken-1" },
         { key: "4", text: "deep-purple", value: "deep-purple" },
         { key: "5", text: "cyan", value: "cyan" },
         { key: "6", text: "green", value: "green" },
         { key: "7", text: "orange", value: "orange" },
      ],
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    dateData() {
      return {
        name: this.name_,
        start: new Date(`${this.date}T${this.time}`),
        end: null,
        color: this.current_color,
        timed: true,
      };
    },
  },
  methods: {
    addPlan() {
      let finishTime =
        this.dateData.start.getHours() + parseInt(this.current_hour);
      let end = new Date(`${this.date}T${this.time}`);
      end.setHours(finishTime);
      this.dateData.end = end;
      this.$store.dispatch("addPlan", this.dateData);

    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
.row:hover {
  background: transparent;
}
</style>
