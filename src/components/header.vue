<script setup></script>

<template>
  <div class="header">
    <router-link to="/" class="header__item">Login</router-link>
    <router-link to="/register" class="header__item">Register</router-link>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: whitesmoke;
  height: 10vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__item {
    margin-inline: 20px 40px;

    border: 2px solid green;
    padding: 10px 20px;
    border-radius: 4px;
    color: green;

    font-size: 17px;
    font-weight: bold;

    &:last-child {
      background-color: green;
      color: white;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
