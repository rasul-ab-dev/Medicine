<template>
  <div>
    <!-- <div class="new-task-wrapper"> -->
    <!-- <button @click="createTask" class="new-task-btn">Новая задача</button>
      <div class="selected-date">Выбранная дата</div> -->
    <!-- </div> -->
    <div id="container">
      <div class="calendar-container">
        <DxScheduler
          time-zone="America/Los_Angeles"
          :data-source="dataSource"
          :current-date="currentDate"
          :first-day-of-week="1"
          :editing="editing"
          :onAppointmentDblClick="onAppointmentDblClick"
          :onAppointmentClick="onAppointmentClick"
          :onCellClick="onCellClick"
          :views="views"
          height="100vh"
          :start-day-hour="9"
          current-view="month"
        >
        </DxScheduler>
      </div>
      <aside class="side-bar">
        <div class="calendar-card-wrapper">
          <div
            v-for="(items, id) in userData"
            :key="id"
            class="calendar-card"
            @dblclick="showEntryPatient"
          >
            <!-- <div> -->
            <p>
              Запись {{ items.applicationNumber }} <br />
              Мед.карта № {{ items.applicantNumber }} <br />
              Время: {{ items.observationTime }} <br />
              {{ items.applicantFullName }}
            </p>
            <!-- </div> -->
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxScheduler from "devextreme-vue/scheduler";
import DataSource from "devextreme/data/data_source";
// import { IUserApplicationObservations } from "~/infrastructure/interfaces/IUserApplicationObservations";
// import { UserApplicationObservations } from "~/infrastructure/classes/UserApplicationObservations";
import moment from "moment";
export default Vue.extend({
  components: {
    DxScheduler,
  },
  data() {
    moment.locale("en");
    let currentUserId = localStorage.getItem("userId");
    // let userData: IUserApplicationObservations =
    //   new UserApplicationObservations();
    return {
      currentUserId,
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: `${this.$dataApi.applicationObservations}/count`,
          customQueryParams: {
            userId: currentUserId,
            start: moment().startOf("month").format("YYYY-MM-DD"),
            end: moment().endOf("month").format("YYYY-MM-DD"),
          },
        }),
      }),
      // calendar,
      userData: [],
      views: ["month"],
      currentDate: new Date(),
      allowAdding: false,
      allowDeleting: false,
      allowUpdating: false,
    };
  },
  computed: {
    editing() {
      return {
        allowAdding: this.allowAdding,
        allowDeleting: this.allowDeleting,
        allowUpdating: this.allowUpdating,
      };
    },
  },
  methods: {
    onAppointmentDblClick(e: any) {
      e.cancel = true;
    },
    onAppointmentClick(e: any) {
      e.cancel = true;
    },
    onCellClick(e: any) {
      this.$axios
        .get(
          `${this.$dataApi.applicationObservationsGroup}?
          ${this.currentUserId}
          &date=${moment(e.cellData.startDate).format("YYYY-MM-DD")}`
        )
        .then((response) => {
          this.userData = response.data.data;
        });
    },
    createTask() {
      this.$router.push(`/entries/create`);
    },
    showEntryPatient(e: any) {
      this.userData.forEach((el) =>
        this.$router.push(`/entries/${el.applicationId}`)
      );
    },
  },
});
</script>
<style lang="scss" scoped>
.selected-date {
  display: inline-grid;
  justify-content: center;
  align-items: center;
  width: 18vw;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  background-color: $custom-main-color;
}

#container {
  display: flex;
  min-height: 100vh;
}

.calendar-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  width: 100%;
}

.dx-calendar-cell {
  background-color: $input-bg-color;
}
.dx-calendar-cell:not(.dx-calendar-other-month) .weekend,
.dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
  text-shadow: none;
  font-weight: bold;
}

.dx-calendar-cell:not(.dx-calendar-other-month) .weekend {
  color: #3030ff;
}

.dx-state-disabled.dx-calendar
  .dx-calendar-cell:not(.dx-calendar-other-month)
  .weekend {
  color: #8080ff;
}

.dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
  color: #ff3030;
}

.dx-state-disabled.dx-calendar
  .dx-calendar-cell:not(.dx-calendar-other-month)
  .holiday {
  color: #ff8080;
}

.dx-calendar-week-number-cell .week-number {
  font-style: italic;
}

.caption {
  font-weight: 500;
  font-size: 18px;
}

.side-bar {
  width: 28%;
  height: 100vh;
  margin-left: 10px;
}

.calendar-card-wrapper {
  padding: 10px 0 10px 10px;
  background-color: $custom-main-color;
  border-radius: 10px;
  height: 100%;
  overflow-y: scroll;
}

.calendar-card {
  cursor: pointer;

  p {
    color: $custom-main-color;
    background-color: $light-blue;
    padding: 16px 10px 16px 20px;
    border-radius: 10px 0 0 10px;
    margin-bottom: 10px;
  }
}
</style>
