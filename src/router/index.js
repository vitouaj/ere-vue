import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/Home.vue";
import ReportView from "../pages/Reports.vue";
import AllReports from "../pages/AllReports.vue";
import Schedules from "../pages/Schedules.vue";
import CourseEnrollments from "../pages/CourseEnrollments.vue";
import ReportDetails from "../pages/ReportDetails.vue";
import Profile from "../pages/Profile.vue";
import Login from "../pages/Login.vue";
import NotFound from "../pages/NotFound.vue";
import Auth from "../pages/Auth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: Auth,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});

export default router;
