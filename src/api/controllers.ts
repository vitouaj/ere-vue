import HttpClient from "./httpRequests";
import router from "../router";

let toasterMessage = "";

async function getUser() {
  try {
    const response = await HttpClient.get({
      path: "/api/v1.0/user/me",
    });
    console.log(response);
    let data = response?.data;
    let success = data?.success;
    toasterMessage = data?.message;
    return data;
  } catch (e) {
    let errorPayload = e?.response?.data;
    toasterMessage = errorPayload?.message;
    router.push({ name: "login" });
  }
}

interface loginPayload {
  emailOrPhoneNumber: String;
  password: String;
  token?: String;
  deviceId?: String;
  deviceName?: String;
  deviceType?: String;
  deviceOs?: String;
  ipAddress?: String;
}

async function login(payload: loginPayload) {
  try {
    const response = await HttpClient.post({
      path: "/api/v1.0/user/login",
      payload: payload,
    });
    let data = response?.data;
    let success = data?.success;
    toasterMessage = data?.message;
    if (success) {
      let token = data?.payload?.token;
      window.sessionStorage.setItem("ere-token", token);
      // redirect to home
      router.push({ name: "home" });
    }
  } catch (e) {
    let errorPayload = e?.response?.data;
    toasterMessage = errorPayload?.message;
  }
}

async function logout() {
  window.sessionStorage.removeItem("ere-token");
  router.push({ name: "login" });
}

export { getUser, login, logout };
