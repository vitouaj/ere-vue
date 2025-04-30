<template>
  <div class="grid grid-cols-4 gap-4 p-4">
    <Card
      class="col-spans-1"
      v-for="month in months"
      :id="month.id"
      :title="month.name"
      :status="month.status"
      :className="month.className"
      :key="month.id"
    />
  </div>
</template>

<script setup>
import Accordion from "../components/Accordion.vue";
import Card from "../components/Card.vue";

const months = [
  {
    id: 1,
    name: "January",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 2,
    name: "February",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 3,
    name: "March",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 4,
    name: "April",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 5,
    name: "May",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 6,
    name: "June",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 7,
    name: "July",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 8,
    name: "August",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 9,
    name: "September",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 10,
    name: "October",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 11,
    name: "November",
    status: "Pending",
    className: "btn btn-primary",
  },
  {
    id: 12,
    name: "December",
    status: "Pending",
    className: "btn btn-primary",
  },
];
</script>
