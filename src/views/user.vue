<script setup>
import axios from "axios";
import { ref } from "vue";

let users = ref(null);

let get_users = () => {
  axios
    .get("https://reqres.in/api/users")
    .then((res) => {
      console.log(res.data.data);
      users.value = res.data.data;
    })
    .catch((res) => {
      console.log(res);
    });
};

get_users();
</script>

<template>
  <div class="user">
    <h1>Listado de usuarios guays</h1>

    <div class="user__list">
      <div class="user__list__card" v-for="user in users" :key="user.id">
        <p>{{ user.first_name }}</p>
        <p>{{ user.email }}</p>
        <div>{{ user.avatar }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  background-color: lightcyan;
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    margin: 10%;

    &__card {
      background-color: lightseagreen;
      padding: 20px;
      border-radius: 4px;
      margin: 20px;
    }
  }
}
</style>
