// /store/user.js
import { defineStore } from "pinia";
import axios from "axios";

import router from "../router/index.js";

export const useAuthStore = defineStore({
  id: "authStore",

  state: () => {
    return {
      token: null,
      register_msg: null,
      login_msg: null
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
          this.login_msg = false;
          console.log(res);
          this.token = res.data.token;
          router.push("/users")
        })

        .catch((res) =>{
            console.log(res);
            this.login_msg = true;
        })
    },

    register(email, pwd) {

      axios
        .post("https://reqres.in/api/register", {
          email: email,
          password: pwd,
        })
        .then((res) => {
          console.log(res);
          this.register_msg = true;
          setTimeout(() => {
            router.push('/')
            this.register_msg = null;
          }, 2000);

        })

        .catch((res) =>{
            console.log(res);
            this.register_msg = false;
        })
    },

    signout(){

      /* api call */

      this.token = null;
      router.push('/')
    }
  },
});