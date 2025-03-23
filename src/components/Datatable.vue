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
            <div v-on:click="viewReport" class="font-medium">
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

  <div v-if="isViewPDF" :style="{ width: '1028px', height: '700px' }">
    <VuePdfEmbed annotation-layer text-layer :source="doc" />
    <button v-on:click="togglePdfview">Toggle</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalEditReport from "./ModalEditReport.vue";
import ModalDeleteReport from "./ModalDeleteReport.vue";
import VuePdfEmbed, { useVuePdfEmbed } from "vue-pdf-embed";

const props = defineProps({
  headers: Array,
  data: Array,
});
const DELETE_MESSAGE_ARE_YOU_SURE_TO_DELETE = "Are you sure to delete?";
const EDIT_MESSAGE_EDIT = "Edit";
const deleteRecord = ref({});
const editRecord = ref({});
const isViewPDF = ref(false);
const pdfServerURL = ref("");

const { doc } = useVuePdfEmbed({
  source:
    "/home/vitouhun/Documents/e-reporting/ere-vue/transaction5130547809973587977.pdf",
});

function togglePdfview() {
  isViewPDF.value = !isViewPDF.value;
}

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

function viewReport(event) {
  const { id } = event.currentTarget.dataset;
  pdfServerURL.value =
    "/home/vitouhun/Documents/e-reporting/ere-vue/transaction5130547809973587977.pdf";
  isViewPDF.value = true;
}
</script>
