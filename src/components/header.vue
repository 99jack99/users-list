<script setup></script>

<template>
  <div class="header">
    <router-link to="/" class="header__item">Login</router-link>
    <router-link to="/register" class="header__item">Register</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.header {
  background-color: $main-color;
  height: 10vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__item {
    margin-inline: 10px 20px;

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
</style>
