<template>
  <div
    :key="viewMode"
    :id="id"
    class="overlay modal overlay-open:opacity-100 hidden"
    role="dialog"
    tabindex="-1"
  >
    <div class="modal-dialog overlay-open:opacity-100">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">{{ title }}</h3>
          <button
            type="button"
            class="btn btn-text btn-circle btn-sm absolute end-3 top-3"
            aria-label="Close"
            :data-overlay="dataOverlayId"
          >
            <span class="icon-[tabler--x] size-4"></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="flex items-center">
            <span class="icon-[tabler--file-type-pdf] size-12"></span>
            <div class="ml-4">
              <span class="block font-bold"
                >Report {{ data.reportNumber }}.pdf</span
              >
              <span>1.5 Mb</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            :data-overlay="dataOverlayId"
            type="button"
            class="btn btn-primary"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  id: String,
  viewMode: String,
  title: String,
  message: String,
  data: Object,
});

const dataOverlayId = computed(() => {
  return "#" + props.id;
});

onMounted(() => {
  console.log("delete record ", JSON.stringify(props.data));
});
</script>
