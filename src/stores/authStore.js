// /store/user.js
import { defineStore } from "pinia";
import axios from "axios";

import router from "../router/index.js";

export const useAuthStore = defineStore({
  id: "authStore",

  state: () => {
    return {
      user: {},
      isLogged: false,
    };
  },

  getters: {
  },

  actions: {
    login(email, pwd) {
      axios
        .post("https://reqres.in/api/login", {
          email: email,
          password: pwd,
        })
        .then((res) => {
          console.log(res);
        })

        .catch((error) =>{
            console.log("Credenciales incorrectas", error.message);
        })
    },
  },
});