<template>
  <Navbar @goto="handleGoTo" />
  <div class="grid grid-cols-5 gap-4 p-4">
    <Sidebar @goto="handleGoTo" class="col-span-1" />
    <div class="main-content-container col-span-4">
      <div class="card w-full">
        <div class="card-body content">
          <template v-if="showAllReports">
            <AllReports
              v-if="computedReports.length > 0"
              :reports="mainReports"
            />
          </template>
          <template v-if="showSchedules">
            <Calendar v-if="courses.length > 0" :courses="computedCourses" />
          </template>
          <template v-if="showCourseEnrollments">
            <CourseEnrollments :enrollments="enrollments" />
          </template>
          <template v-if="showProfile">
            <Profile :user="user" @goback="handleGoTo" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import { computed, onMounted, ref } from "vue";
import { getUser } from "../api/controllers";
import AllReports from "./AllReports.vue";
import Calendar from "./Calendar.vue";
import CourseEnrollments from "./CourseEnrollments.vue";
import Profile from "./Profile.vue";

export interface User {
  name: String;
  phone: String;
  email: String;
  role: String;
  levelId: String;
  userId: String;
  studentId: String;
  createdDate: String;
  updatedDate: String;
  totalAbsence: Number;
  totalScore: Number;
  overallGrade: String;
  averageScore: Number;
}

const showAllReports = ref(true);
const showCourseEnrollments = ref(false);
const showSchedules = ref(false);
const showProfile = ref(false);

function resetViews() {
  showAllReports.value = false;
  showCourseEnrollments.value = false;
  showSchedules.value = false;
  showProfile.value = false;
}

function handleGoTo(event: CustomEvent) {
  const cmp = event.detail?.cmpName;
  resetViews();

  switch (cmp) {
    case "home":
    case "allreports":
      showAllReports.value = true;
      break;
    case "schedules":
      showSchedules.value = true;
      break;
    case "course-enrollments":
      showCourseEnrollments.value = true;
      break;
    case "me":
      showProfile.value = true;
      break;
  }
}

const user = ref<User>();
interface Report {
  monthId: number;
  status?: string;
}

const mainReports = ref<Report[]>([]);
const enrollments = ref([]);
const courses = ref([]);

const computedCourses = computed(() => {
  return [...courses.value];
});

const computedReports = computed(() => {
  if (!mainReports.value || !Array.isArray(mainReports.value)) return [];
  // Example transformation: group by monthId
  return mainReports.value.map((report) => {
    return {
      ...report,
      monthId: String(report.monthId),
      status: report.status || "Pending",
      className: "btn btn-primary",
    };
  });
});

onMounted(async () => {
  let response = await getUser();
  let payload = response?.payload;
  user.value = payload?.user;
  courses.value = payload?.courses;
  mainReports.value = payload?.mainReport;
  enrollments.value = payload?.enrollments;
});
</script>
