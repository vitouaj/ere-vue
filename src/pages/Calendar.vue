<template>
  <div id="calendar"></div>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridDay",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    events: [
      {
        title: "Physic",
        start: "2025-04-27T10:30:00",
        end: "2025-04-27T12:30:00",
      },
      {
        title: "Khmer",
        start: "2025-04-29T12:00:00",
        end: "2025-04-29T13:00:00",
      },
      {
        title: "English",
        start: "2025-04-30T09:00:00",
        end: "2025-04-30T17:00:00",
      },
      {
        title: "Sports",
        start: "2025-05-01T19:00:00",
        end: "2025-05-01T21:00:00",
      },
      {
        title: "Math",
        start: "2025-05-02T20:00:00",
        end: "2025-05-02T23:00:00",
      },
      {
        title: "Biology",
        start: "2025-05-03T10:00:00",
        end: "2025-05-03T12:00:00",
      },
      {
        title: "Chemistry",
        start: "2025-05-04T15:00:00",
        end: "2025-05-04T17:00:00",
      },
    ],
  });
  calendar.render();
});
</script>
