<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../stores/authStore.js";

const authStore = useAuthStore();
const login_data = reactive({
  email: "eve.holt@reqres.in",
  password: "cityslicka",
});
</script>

<template>
  <div class="login">
    <div class="login__box">
      <div class="login__box__login">
        <h2 class="login__box__login__title">Login</h2>

        <div class="login__box__login__input-box">
          <img
            class="login__box__login__input-box__icon"
            src="../assets/imgs/user.png"
            alt=""
          />
          <input
            class="login__box__login__input-box__input"
            type="text"
            v-model="login_data.email"
            placeholder="email"
          />
        </div>

        <div class="login__box__login__input-box">
          <img
            class="login__box__login__input-box__icon"
            src="../assets/imgs/key.png"
            alt=""
          />
          <input
            class="login__box__login__input-box__input"
            type="password"
            v-model="login_data.password"
            placeholder="password"
          />
        </div>

        <button
          class="login__box__login__login-btn"
          @click="authStore.login(login_data.email, login_data.password)"
        >
          Acceder
        </button>
      </div>

      <div class="login__box__ilustration"></div>
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

  &__box {
    background-color: $clr-main-white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 4px;
    font-size: 17px;

    &__login {
      /* background-color: $main-color; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border-radius: 4px;
      font-size: 17px;

      &__title {
        color: $clr-secondary-orange;
        font-size: 40px;
      }

      &__input-box {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin-block: 5px;

        &__icon {
          height: 25px;
          width: 25px;
          background-color: lightgrey;
          border-radius: 4px;
          margin-right: 5px;
          padding: 5px;
        }

        &__input {
          border-style: none;
          height: 30px;
          border-radius: 4px;
          font-size: 17px;
          padding-left: 10px;
        }
      }

      &__login-btn {
        margin-top: 20px;
        padding: 10px 20px;
        width: 270px;
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

    &__ilustration {
      /* background-color: red; */
      margin-left: 30px;
      padding: 20px;
      height: 400px;
      width: 400px;
      background-image: url(../assets/imgs/login.svg);
      background-repeat: no-repeat;
      background-size: cover;
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
