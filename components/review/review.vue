<template>
  <div class="review-wrapper">
    <!-- <div class="review-calendar-wrapper">
      <span>{{ $t("navigation.calendar") }}</span>

      <div class="calendar-day">
        <div v-for="(num, idx) in 31" :key="idx">{{ num }}</div>
      </div>
    </div> -->

    <div class="review-content-wrapper">
      <div class="review-examination-wrapper">
        <span>{{ $t("entriesPage.diagnosis") }}</span>

        <DxDataGrid
          :data-source="dataSource"
          :show-borders="false"
          :hoverStateEnabled="true"
          :allow-column-resizing="true"
          :highlight-changes="true"
          :column-auto-width="true"
          @row-dbl-click="showEntry"
        >
          <DxSorting mode="single" />
          <DxColumn
            data-field="applicationNumber"
            :caption="$t('commonText.entry')"
          />
          <DxColumn
            data-field="applicantNumber"
            :caption="$t('commonText.medicalCard')"
            alignment="center"
          />
          <DxColumn
            data-field="applicantFullName"
            :caption="$t('commonText.patientName')"
            alignment="center"
          />
          <DxColumn
            data-field="observationDate"
            data-type="date"
            :caption="$t('commonText.date')"
            alignment="center"
          />
          <DxColumn
            data-field="observationTime"
            :caption="$t('commonText.time')"
            alignment="center"
          />
          <DxColumn
            data-field="applicationObservationStatus"
            :caption="$t('commonText.status')"
            alignment="center"
          >
            <DxLookup
              value-expr="id"
              display-expr="name"
              :data-source="statusDataSource"
            />
          </DxColumn>
          <DxColumn :width="100" :buttons="editButtons" type="buttons" />
          <!-- <DxColumn
            data-field="observationTime"
            :caption="$t('commonText.time')"
            alignment="center"
          >
            <DxLookup
              value-expr="id"
              display-expr="name"
              :data-source="statusDataSource"
            />
          </DxColumn> -->
        </DxDataGrid>
      </div>
      <div class="review-bulletin-wrapper">
        <span>{{ $t("commonText.infoBulletin") }}</span>
        <div
          v-for="(item, id) in bulletin"
          :key="id"
          class="review-bulletin-content"
        >
          <span>{{ item.nameTm }}</span>
          <div v-html="item.descriptionTm"></div>
          <button @click="readBulletin(item.id)" class="read-bulletin-btn">
            {{ $t("commonText.show") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  DxDataGrid,
  DxColumn,
  DxSorting,
  DxLookup,
} from "devextreme-vue/data-grid";
import { IReviewUser } from "~/infrastructure/interfaces/IReviewUser";
import { ReviewUser } from "~/infrastructure/classes/ReviewUser";
import { ApplicationStatus } from "~/infrastructure/enums/ApplicationStatus";
import { ApplicationStatuses } from "~/infrastructure/data-source/ApplicationStatuses";
import DataSource from "devextreme/data/data_source";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSorting,
    DxLookup,
  },
  data() {
    let review: IReviewUser = new ReviewUser();
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: `${this.$dataApi.applicationObservations}/user`,
        }),
      }),
      bulletin: null,
      review,
      statusDataSource: ApplicationStatuses(this),
    };
  },
  computed: {
    editButtons() {
      this.dataSource._items.forEach((element) => {
        this.review.id = element.id;
      });

      return [
        {
          hint: "Завершить",
          icon: "check",
          visible: (e) =>
            e.row.data.applicationObservationStatus ===
            ApplicationStatus.InProgress,
          onClick: async (e) => {
            this.review.id = e.row.data.id;
            this.review.applicationObservationStatus =
              ApplicationStatus.Completed;

            this.$awn.asyncBlock(
              this.$axios.put(
                `${this.$dataApi.applicationObservations}/status/${e.row.data.id}`,
                this.review
              ),

              (e) => {
                this.$awn.success();
                this.dataSource.reload();
              },
              (e) => {
                this.$awn.alert();
              }
            );
          },
        },
        {
          icon: "clear",
          hint: "Отклонить",
          visible: (e) =>
            e.row.data.applicationObservationStatus ===
            ApplicationStatus.InProgress,
          onClick: async (e) => {
            this.review.id = e.row.data.id;
            this.review.applicationObservationStatus =
              ApplicationStatus.Canceled;
            this.$awn.asyncBlock(
              this.$axios.put(
                `${this.$dataApi.applicationObservations}/status/${e.row.data.id}`,
                this.review
              ),

              (e) => {
                this.$awn.success();
                this.dataSource.reload();
              },
              (e) => {
                this.$awn.alert();
              }
            );
          },
        },
      ];
    },
  },
  methods: {
    showEntry(e) {
      this.$router.push(`entries/${e.data.applicationId}`);
    },
    readBulletin(e) {
      this.$router.push(`/bulletin/${e}`);
    },
  },
  created() {
    this.$axios.get(this.$dataApi.bulletins).then((response) => {
      return (this.bulletin = response.data.data);
    });
  },
});
</script>
<style lang="scss" scoped>
.review-calendar-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  height: 100px;
  background-color: $custom-main-color;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 10px;

  .calendar-day {
    display: flex;
    column-gap: 2.7rem;
    padding: 6px;
    background-color: #ccc;
  }
}

.review-content-wrapper {
  display: flex;
  column-gap: 10px;

  .review-examination-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding: 14px;
    min-height: 100vh;
    background-color: $custom-main-color;
    width: 60%;
  }
  .review-bulletin-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding: 14px;
    min-height: 100vh;
    background-color: $custom-main-color;
    width: 40%;
  }
}

.review-content {
  display: flex;
  row-gap: 30px;
  column-gap: 10px;
  justify-content: space-between;
}

.review-item {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.review-bulletin-content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.read-bulletin-btn {
  margin-right: auto;
  padding: 12px 40px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
}
</style>
