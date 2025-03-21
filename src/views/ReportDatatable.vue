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
    id: "guid1",
    reportNumber: "12312",
    studentName: "hun vitou",
    reportStatus: "feedback received",
    selected: false,
  },
  {
    id: "guid2",
    reportNumber: "12312",
    studentName: "hun vitou",
    reportStatus: "draft",
    selected: false,
  },
  {
    id: "guid3",
    reportNumber: "12312",
    studentName: "hun vitou",
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
