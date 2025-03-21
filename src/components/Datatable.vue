<template>
  <div class="mt-8 overflow-x-auto">
    <Modal
      view-mode="delete"
      message="Hi this is delete modal"
      ref="modalDeleteRef"
    />
    <Modal
      view-mode="edit"
      message="Hi this is edit modal"
      ref="modalEditRef"
    />
    <button
      id="edit"
      class="btn btn-circle btn-text btn-sm"
      v-on:click="handleEditReport"
      aria-label="Action button"
    >
      <span class="icon-[tabler--pencil] size-5"></span>
    </button>
    <table class="table">
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
            <div class="font-medium">{{ item.reportNumber }}</div>
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
              id="delete"
              v-on:click="handleRemoveReport"
              class="btn btn-circle btn-text btn-sm"
              aria-label="Action button"
            >
              <span class="icon-[tabler--trash] size-5"></span>
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
import { ref } from "vue";
import Modal from "./Modal.vue";
const props = defineProps({
  headers: Array,
  data: Array,
});
const modalDeleteRef = ref(null);
const modalEditRef = ref(null);

function showDeleteModal(singleReport) {
  modalDeleteRef.value?.openModal(singleReport);
}

function showEditModal(singleReport) {
  modalEditRef.value?.openModal(singleReport);
}

function handleEditReport(event) {
  const { id } = event.currentTarget.dataset;
  let singleReport = props.data.find((item) => item.id === id);
  showEditModal(singleReport);
}

function handleRemoveReport(event) {
  const { id } = event.currentTarget.dataset;
  let singleReport = props.data.find((item) => item.id === id);
  showDeleteModal(singleReport);
}
</script>
