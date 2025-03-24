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
          {{ data }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-soft btn-secondary"
            :data-overlay="dataOverlayId"
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
