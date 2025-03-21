<template>
  <button
    ref="openButtonRef"
    type="button"
    class="btn btn-primary hidden"
    aria-haspopup="dialog"
    aria-expanded="false"
    aria-controls="basic-modal"
    data-overlay="#basic-modal"
  >
    Open modal
  </button>

  <div
    :key="viewMode"
    id="basic-modal"
    class="overlay modal overlay-open:opacity-100 hidden"
    role="dialog"
    tabindex="-1"
  >
    <div class="modal-dialog overlay-open:opacity-100">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">{{ viewMode }} {{ reportName }}</h3>
          <button
            type="button"
            class="btn btn-text btn-circle btn-sm absolute end-3 top-3"
            aria-label="Close"
            data-overlay="#basic-modal"
          >
            <span class="icon-[tabler--x] size-4"></span>
          </button>
        </div>
        <div class="modal-body">
          {{ message }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-soft btn-secondary"
            data-overlay="#basic-modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  viewMode: String,
  message: String,
});

onMounted(() => {
  console.log("modal props ", props.viewMode, props.message);
});

const openButtonRef = ref(null);
const singleReport = ref(null);

const reportName = computed(() => {
  return singleReport.value?.id;
});

function openModal(reportRecord) {
  singleReport.value = { ...reportRecord };

  if (openButtonRef.value) {
    openButtonRef.value.click(); // Simulate button click
  }
  console.log("single report recieved ", singleReport.value);
}

defineExpose({ openModal }); // Expose the function to the parent
</script>
