<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Login from "./pages/Login.vue";

let loggedIn = false;
</script>

<template>
  <Login v-if="!loggedIn" />
  <template v-if="loggedIn">
    <Navbar />
    <div class="grid grid-cols-5 gap-4 p-4">
      <Sidebar class="col-span-1" />
      <div class="main-content-container col-span-4">
        <div class="card w-full">
          <div class="card-body content">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
