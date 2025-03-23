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
</script>

<template>
  <div class="w-full">
    <ReportMenuBar />
    <Datatable :headers="headers" :data="data" />
    <Paggination />
  </div>
</template>
