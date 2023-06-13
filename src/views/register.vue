<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../stores/authStore.js";

const authStore = useAuthStore();
const register_data = reactive({
  email: "eve.holt@reqres.in",
  password: "pistol",
});
</script>

<template>
  <div class="register">
    <h1>Todavia no estas con nosotros? Crea gratis una cuenta</h1>
    <div class="register__card">
      <label for="">User</label>
      <input type="text" v-model="register_data.email" placeholder="email" />
      <label for="">Password</label>
      <input
        type="password"
        v-model="register_data.password"
        placeholder="password"
      />
      <button
        class="register__card__register-btn"
        @click="authStore.register(register_data.email, register_data.password)"
      >
        Crear
      </button>
    </div>
    <div class="register__success" v-show="authStore.register_msg">
      Tu cuenta se ha creado correctamente
    </div>
    <div class="register__error" v-show="authStore.register_msg == false">
      Ha habido un problema! Intentelo de nuevo
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.register {
  background-color: $secondary-color;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: $font-color;
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
      color: $secondary-color;
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

    &__register-btn {
      margin-top: 20px;
      padding: 10px 20px;
      border: none;
      background-color: $secondary-color;
      color: $font-color;
      border-radius: 5px;
      font-weight: bold;
      &:hover {
        cursor: pointer;
        transform: scale(1.05);
      }
    }
  }

  &__success {
    margin: 20px;
    background-color: lightgreen;
    padding: 10px 20px;
    border-radius: 10px;
    color: $font-color;
    font-size: 18px;
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
