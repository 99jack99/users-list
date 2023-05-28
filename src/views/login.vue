<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../stores/authStore.js";

const authStore = useAuthStore();
const login_data = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <div class="login">
    <h1>Ya tienes cuenta? Unete a nosotros!</h1>
    <div class="login__card">
      <label for="">User</label>
      <input type="text" v-model="login_data.email" placeholder="email" />

      <label for="">Password</label>
      <input type="text" v-model="login_data.password" placeholder="password" />
      <button
        class="login__card__login-btn"
        @click="authStore.login(login_data.email, login_data.password)"
      >
        Acceder
      </button>
    </div>
    <div class="login__error" v-show="authStore.login_msg == true">
      Las credenciales son incorrectas!
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

.login {
  background-color: $font-color;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: $secondary-color;
    font-size: 3em;
  }

  &__card {
    background-color: $main-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 4px;
    font-size: 17px;
    box-shadow: $main-color 0px 0px 0px 2px inset,
      rgb(255, 255, 255) 10px -10px 0px -3px, $font-color 10px -10px;

    & > label {
      color: $font-color;
      width: 100%;
      padding-block: 10px;
      font-weight: bold;
      font-size: 17px;
    }

    & > input {
      border-style: none;
      padding: 7px;
      border-radius: 4px;
      font-size: 17px;
    }

    &__login-btn {
      margin-top: 20px;
      padding: 10px 20px;
      border: none;
      background-color: $font-color;
      color: $secondary-color;
      border-radius: 5px;
      font-weight: bold;
      &:hover {
        cursor: pointer;
        transform: scale(1.05);
      }
    }
  }

  &__error {
    margin: 20px;
    background-color: rgb(243, 142, 142);
    padding: 10px 20px;
    border-radius: 10px;
    color: $font-color;
    font-size: 18px;
  }
}
</style>
