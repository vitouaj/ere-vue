<script setup lang="ts">
import FlyonDatatable from "../components/FlyonDatatable.vue";

const props = defineProps({
  enrollments: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <template v-if="enrollments.length > 0">
    <FlyonDatatable :enrollments="enrollments" />
  </template>
</template>
