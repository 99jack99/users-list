<script setup>
import { useAuthStore } from "../stores/authStore.js";
const authStore = useAuthStore();
</script>

<template>
  <div class="header" v-if="!authStore.token">
    <div class="header__left">
      <img class="header__left__logo" src="../assets/imgs/u.png" alt="" />
    </div>
    <div class="header__right">
      <router-link to="/" class="header____right__item">Login</router-link>
      <router-link to="/register" class="header__right__item"
        >Register</router-link
      >
    </div>
  </div>
  <div v-else class="header">
    <p class="header__welcome">Hola! Bienvenido</p>
    <p class="header__welcome" @click="authStore.signout()">Salir</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.header {
  background-color: $clr-main-white;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__welcome {
    font-size: 20px;
    color: $secondary-color;
    margin-right: 20px;

    &:last-child {
      color: $font-color;
      border: 2px solid $font-color;
      padding: 5px;
      border-radius: 5px;
      &:hover {
        background-color: $font-color;
        color: $secondary-color;
      }
    }
  }

  &__left {
    margin-left: 20px;

    &__logo {
      height: 100px;
      width: 100px;
    }
  }

  &__right {
    margin-right: 20px;

    &__item {
      margin-inline: 20px;
      border: 2px solid $secondary-color;
      padding: 7px 14px;
      border-radius: 4px;
      color: $secondary-color;
      text-decoration: none;
      font-size: 17px;
      font-weight: bold;

      &:last-child {
        background-color: $secondary-color;
        color: $main-color;
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
