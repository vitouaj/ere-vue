<script setup lang="ts">
import FlyonDatatable from "../components/FlyonDatatable.vue";
import Datatable from "../components/Datatable.vue";
</script>

<template>
  <div class="grid grid-cols-4 gap-4 p-4">
    <div class="col-span-2">
      <h2 class="text-xl font-bold">Report Details</h2>
      <p class="text-gray-600">Bun Rany Hun Sen Speu High School</p>
    </div>
    <div class="col-span-2 text-right">
      <h2 class="text-xl font-bold">Student Information</h2>
      <p class="text-gray-600">Name: John Doe</p>
      <p class="text-gray-600">Class: 10th Grade</p>
    </div>
    <table class="w-full col-span-4 mx-auto border-collapse">
      <thead>
        <tr>
          <th class="text-start">Subject</th>
          <th class="text-start">Score</th>
          <th class="text-start">Grade</th>
          <th class="text-start">Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Math</td>
          <td>95</td>
          <td>A+</td>
          <td>Poor this month, keep doing next month</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>90</td>
          <td>A</td>
          <td>Poor this month, keep doing next month</td>
        </tr>
        <tr>
          <td>History</td>
          <td>85</td>
          <td>B+</td>
          <td>Poor this month, keep doing next month</td>
        </tr>
        <tr>
          <td>Geography</td>
          <td>80</td>
          <td>B</td>
          <td>Poor this month, keep doing next month</td>
        </tr>
      </tbody>
    </table>

    <div class="col-span-3">
      <div>
        <h2 class="text-xl font-bold">Overall Performance</h2>
        <p class="text-gray-600">Average Score: 87.5</p>
        <p class="text-gray-600">Overall Grade: A</p>
        <p class="text-gray-600">Absences: 1</p>
      </div>
      <div class="mt-4">
        <h2 class="text-xl font-bold">Comments</h2>
        <p class="text-gray-600">Great job! Keep up the good work.</p>
      </div>
    </div>
  </div>
</template>
