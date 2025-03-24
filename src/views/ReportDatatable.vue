<script setup>
import { ref, computed } from "vue";
import Datatable from "../components/Datatable.vue";
import Paggination from "../components/Paggination.vue";
import ReportMenuBar from "../components/ReportMenuBar.vue";

const headers = [
  {
    label: "Report Number",
    name: "number",
  },
  {
    label: "Student Name",
    name: "studentName",
  },
  {
    label: "Status",
    name: "status",
  },
  {
    label: "Action",
    name: "action",
  },
];

const data = [
  {
    id: "f3a9c7b2-8e41-4b1a-9a67-2e9f834d2345",
    reportNumber: "98765",
    studentName: "Sok Dara",
    reportStatus: "feedback received",
    selected: false,
  },
  {
    id: "b7e6d4a1-2c3f-4890-a8b5-1d2f567e890a",
    reportNumber: "54321",
    studentName: "Chan Sreyneang",
    reportStatus: "draft",
    selected: false,
  },
  {
    id: "9c5f2a34-7d61-4e2b-937a-1f8e6d5b9c0d",
    reportNumber: "11223",
    studentName: "Kim Vannak",
    reportStatus: "sent",
    selected: false,
  },
];

const totalRecords = computed(() => {
  return data.length;
});

const currentPage = ref(1);
const recordPerPage = ref(1); // flexible via user input

const pagginatedRecords = computed(() => {
  const start = (currentPage.value - 1) * recordPerPage.value;
  const end = start + recordPerPage.value;
  return data.slice(start, end);
});

const handleCurrentPage = (event) => {
  const newValue = event.detail.currentPage;
  currentPage.value = parseInt(newValue);
};
</script>

<template>
  <div class="w-full">
    <ReportMenuBar />
    <Datatable :headers="headers" :data="pagginatedRecords" />
    <Paggination
      @currentpageselection="handleCurrentPage"
      :total-records="totalRecords"
      :current-page="currentPage"
      :record-per-page="recordPerPage"
    />
  </div>
</template>
