// /store/user.js
import { defineStore } from "pinia";

import auth from "../services/Auth_service";
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
    async login(email, pwd){
      try {
        let response = await auth.login(email, pwd);
        this.login_msg = false;
        this.token = response.data.token;
        router.push("/users")
      } 
      catch (error) {
        console.log(error.message);
        this.login_msg = true;
      }
    },

    async register(email, pwd){
      try {
        let response = await auth.register(email, pwd);
        this.register_msg = true;
          setTimeout(() => {
            this.token = response.data.token;
            router.push('/users')
            this.register_msg = null;
          }, 2000);
      } 
      catch (error) {
        console.log(error);
            this.register_msg = false;
      }
    },


    signout(){
      /* Mocking logout */
      this.token = null;
      router.push('/');
    }
  },
});