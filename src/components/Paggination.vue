<template>
  <div class="flex flex-wrap items-center justify-between gap-2 py-4 pt-6">
    <div class="me-2 block max-w-sm text-sm font-normal text-gray-500 sm:mb-0">
      Showing
      <span class="font-semibold text-gray-900">{{ recordPerPage }}</span>
      of
      <span class="font-semibold">{{ totalRecords }}</span>
      products
    </div>
    <nav class="join">
      <button
        type="button"
        class="btn btn-soft btn-square join-item"
        aria-label="previous button"
      >
        <span class="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
      </button>
      <button
        v-on:click="handleCurrentPageSelection"
        v-for="number in totalPages"
        :data-current-page="number"
        type="button"
        class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary"
      >
        {{ number }}
      </button>
      <button
        type="button"
        class="btn btn-soft btn-square join-item"
        aria-label="next button"
      >
        <span class="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  currentPage: Number,
  totalRecords: Number,
  recordPerPage: Number,
});

const emit = defineEmits(["currentpageselection"]);

const totalPages = computed(() => {
  return Math.ceil(props.totalRecords / props.recordPerPage);
});

const handleCurrentPageSelection = (event) => {
  const { currentPage } = event.target.dataset;
  emit("currentpageselection", {
    detail: {
      currentPage: currentPage,
    },
  });
};

onMounted(() => {
  console.log(props.currentPage, props.totalPages, props.recordPerPage);
});
</script>
