<script setup lang="ts">
import { onMounted } from "vue";
import Login from "./Login.vue";
import Register from "./Register.vue";
import { ref } from "vue";

export interface RegisterModel {
  firstname: String;
  lastname: String;
  password: String;
  email: String;
  phone: String;
  role: Number;
  subject?: Number;
  level?: Number;
  contacts: Array<ContactModel>;
}

export interface ContactModel {
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  homeNumber: String;
  street: String;
  village: String;
  commune: String;
  district: String;
  province: String;
}

const registerModel = ref<RegisterModel>({
  firstname: "",
  lastname: "",
  password: "",
  email: "",
  phone: "",
  role: 0, // or any default role number
  contacts: [
    {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      homeNumber: "",
      street: "",
      village: "",
      commune: "",
      district: "",
      province: "",
    },
  ],
});

const isLogin = ref(true);
const isRegister = ref(false);

function toggleRegister() {
  isRegister.value = true;
  isLogin.value = false;
}

function toggleSignin() {
  isLogin.value = true;
  isRegister.value = false;
}

onMounted(() => {});
</script>

<template>
  <Register
    @toggleSignin="toggleSignin"
    v-if="isRegister"
    :registerModel="registerModel"
  />
  <template v-if="isLogin">
    <Login @toggleRegister="toggleRegister" />
  </template>
</template>
