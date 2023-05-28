// /store/user.js
import { defineStore } from "pinia";
import axios from "axios";

import router from "../router/index.js";

export const useAuthStore = defineStore({
  id: "authStore",

  state: () => {
    return {
      token: null,
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
          this.token = res.data.token;
          router.push("/users")
        })

        .catch((error) =>{
            console.log("Credenciales incorrectas", error.message);
        })
    },
  },
});