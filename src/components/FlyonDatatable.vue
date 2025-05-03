<template>
  <div>
    <template v-if="data">
      <DataTable
        class="display"
        :columns="columns"
        :data="data"
        :options="{ select: true }"
        ref="table"
      />
    </template>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from "vue";

import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net";
import "datatables.net-select";

DataTable.use(DataTablesLib);

const props = defineProps({
  enrollments: {
    type: Array,
    default: () => [],
  },
});

let counter = 0;
let dt;
const data = ref([]);
const table = ref();
const columns = [
  { data: "teacherName", title: "Subject" }, // Maps to subject (teacher)
  { data: "courseName", title: "Course" }, // Maps to course
  { data: "enrollmentDate", title: "Enrollment Date" },
  { data: "completionDate", title: "Completion Date" },
  { data: "studentName", title: "Student Name" },
  { data: "studentEmail", title: "Student Email" },
];

// // Initial data
// for (let i = 0; i < 5; i++) {
//   add();
// }

// Get a DataTables API reference
onMounted(function () {
  dt = table.value.dt;
  data.value = props.enrollments.map((item) => ({
    ...item,
    enrollmentDate: new Date(item.enrollmentDate).toLocaleDateString(),
    completionDate: item.completionDate
      ? new Date(item.completionDate).toLocaleDateString()
      : "In Progress",
  }));
});

// Add new rows - note how the data object in Vue is changed and the DataTable will reflect
// those changes, rather than using the DataTables API to manipulate the rows.
function add() {
  data.value.push({
    subject: "Subject" + counter,
    course: "Course" + counter,
    score: "10" + counter,
    grade: "B" + counter,
  });

  counter += 1;
}

// For each selected row just add an indicator to show that it's data has been updated
function update() {
  dt.rows({ selected: true }).every(function () {
    let row = this.data();

    row.a += " Updated";
    row.b += " Updated";
    row.c += " Updated";
  });
}

// For each selected row find the data object in `data` array and remove it
function remove() {
  dt.rows({ selected: true }).every(function () {
    let idx = data.value.indexOf(this.data());
    data.value.splice(idx, 1);
  });
}
</script>

<style>
@import "datatables.net-dt";
</style>
