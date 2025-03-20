<script setup>
import { ref, computed } from "vue";

function handleSelectMonth(event) {
  let { ariaSelected, id } = event.target;
  if (monthsMap.value[parseInt(id)]) {
    monthsMap.value[id].selected = !monthsMap.value[id].selected;
  }
}

const filterTitle = computed(() => {
  let selectedMonths = Object.values(monthsMap.value).filter(
    (month) => month.selected
  );

  if (selectedMonths.length > 0) {
    let tempName = "";
    for (let m of selectedMonths) {
      tempName += " " + m.name;
    }
    return tempName;
  }
  return "Filter by Month";
});

const monthsMap = ref({
  1: { index: 1, name: "January", selected: false },
  2: { index: 2, name: "February", selected: false },
  3: { index: 3, name: "March", selected: false },
  4: { index: 4, name: "April", selected: false },
  5: { index: 5, name: "May", selected: false },
  6: { index: 6, name: "June", selected: false },
  7: { index: 7, name: "July", selected: false },
  8: { index: 8, name: "August", selected: false },
  9: { index: 9, name: "September", selected: false },
  10: { index: 10, name: "October", selected: false },
  11: { index: 11, name: "November", selected: false },
  12: { index: 12, name: "December", selected: false },
});
</script>
<template>
  <div class="dropdown relative inline-flex">
    <button
      id="dropdown-default"
      type="button"
      class="dropdown-toggle btn btn-outline btn-secondary font-normal"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-label="Dropdown"
    >
      <span class="icon-[tabler--calendar-check]"></span>
      {{ filterTitle }}
      <span
        class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"
      ></span>
    </button>
    <ul
      class="dropdown-menu dropdown-open:opacity-100 hidden min-w-10"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="dropdown-default"
    >
      <li class="py-2" v-for="month in Object.values(monthsMap)">
        <span v-if="month.selected" class="icon-[tabler--check] size-5"></span>
        <a
          :id="month.index"
          :aria-selected="month.selected"
          v-on:click="handleSelectMonth"
          class="dropdown-item inline"
          href="javascript:void(0)"
          >{{ month.name }}</a
        >
      </li>
    </ul>
  </div>
</template>
