<template>
  <div class="mt-8 overflow-x-auto">
    <ModalDeleteReport
      id="delete"
      :title="DELETE_MESSAGE_ARE_YOU_SURE_TO_DELETE"
      :data="deleteRecord"
      view-mode="delete"
    />
    <ModalEditReport
      id="edit"
      :title="EDIT_MESSAGE_EDIT"
      :data="editRecord"
      view-mode="edit"
    />
    <ModalViewReport
      id="view"
      title="View Record"
      :data="viewRecord"
      view-mode="view"
    />
    <table v-if="!isViewPDF" class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              class="checkbox checkbox-primary checkbox-sm"
              aria-label="product"
            />
          </th>
          <th v-for="header in headers">{{ header.label }}</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr :key="item.id" v-for="item in data">
          <th>
            <label>
              <input
                :checked="item.selected"
                type="checkbox"
                class="checkbox checkbox-primary checkbox-sm"
                aria-label="product"
              />
            </label>
          </th>
          <td>
            <div
              v-on:click="handleViewRecord"
              :data-id="item.id"
              data-overlay="#view"
              class="font-medium"
            >
              {{ item.reportNumber }}
            </div>
          </td>
          <td>{{ item.studentName }}</td>
          <td>
            <div class="flex items-center">
              <span
                class="badge badge-primary badge-soft me-2 rounded-full p-1"
              >
                <span class="icon-[tabler--device-mobile]"></span>
              </span>
              {{ item.reportStatus }}
            </div>
          </td>
          <td>
            <button
              :data-id="item.id"
              class="btn btn-circle btn-text btn-sm"
              data-overlay="#delete"
              v-on:click="handleRemoveReport"
              aria-label="Action button"
            >
              <span class="icon-[tabler--trash] size-5"></span>
            </button>
            <button
              :data-id="item.id"
              class="btn btn-circle btn-text btn-sm"
              data-overlay="#edit"
              v-on:click="handleEditReport"
              aria-label="Action button"
            >
              <span class="icon-[tabler--pencil] size-5"></span>
            </button>
            <button
              class="btn btn-circle btn-text btn-sm"
              aria-label="Action button"
            >
              <span class="icon-[tabler--dots-vertical] size-5"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ModalEditReport from "./Modals/ModalEditReport.vue";
import ModalDeleteReport from "./Modals/ModalDeleteReport.vue";
import ModalViewReport from "./Modals/ModalViewReport.vue";

const pdfURL =
  "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";

const props = defineProps({
  headers: Array,
  data: Array,
});
const DELETE_MESSAGE_ARE_YOU_SURE_TO_DELETE = "Are you sure to delete?";
const EDIT_MESSAGE_EDIT = "Edit";
const deleteRecord = ref({});
const editRecord = ref({});
const viewRecord = ref({});
const isViewPDF = ref(false);
const pdfServerURL = ref("");

function handleEditReport(event) {
  const { id } = event.currentTarget.dataset;
  let singleReport = props.data.find((item) => item.id === id);
  editRecord.value = { ...singleReport };
}

function handleRemoveReport(event) {
  const { id } = event.currentTarget.dataset;
  let singleReport = props.data.find((item) => item.id === id);
  deleteRecord.value = { ...singleReport };
}

function handleViewRecord(event) {
  const { id } = event.currentTarget.dataset;
  let singleReport = props.data.find((item) => item.id === id);
  viewRecord.value = { ...singleReport };
  pdfServerURL.value = pdfURL;
}
</script>
