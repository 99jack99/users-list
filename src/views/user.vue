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

let delete_user = (id) => {
  axios
    .delete(`https://reqres.in/api/users/${id}`)
    .then((res) => {
      console.log(res);
      users.value = users.value.filter((x) => x.id !== id);
    })
    .catch((res) => {
      console.log(res);
    });
};

get_users();
</script>

<template>
  <div class="user">
    <h1>Listado de usuarios</h1>
    <div class="user__list">
      <div class="user__list__card" v-for="user in users" :key="user.id">
        <p class="user__list__card__name">{{ user.first_name }}</p>
        <img
          class="user__list__card__img"
          v-bind:src="user.avatar"
          alt="banner"
        />
        <div class="user__list__card__actions">
          <router-link
            class="user__list__card__actions__btn"
            :to="{ name: 'Detailed', params: { id: user.id } }"
            >More</router-link
          >
          <button
            class="user__list__card__actions__btn"
            @click="delete_user(user.id)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.user {
  background-color: $secondary-color;
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: $font-color;
    font-size: 3em;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10%;

    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 20px;
      border-radius: 10px;
      margin: 20px;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
      color: $secondary-color;
      transition: 2s;
      background: linear-gradient(
        147deg,
        rgba(40, 143, 118, 1) 0%,
        rgba(48, 48, 54, 1) 54%
      );
      border: 5px solid $main-color;
      &__name {
        font-size: 20px;
        font-weight: bold;
      }

      &__email {
        font-style: italic;
      }

      &__img {
        border-radius: 50%;
      }

      &__actions {
        margin-block: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        &__btn {
          text-decoration: none;
          background-color: $secondary-color;
          padding: 10px 15px;

          color: $secondary-color;
          font-size: 16px;

          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;

          &:first-child {
            color: $font-color;
          }

          &:last-child {
            background-color: red;
            border-style: none;
          }

          &:hover {
            opacity: 0.8;
          }
        }
      }

      &:hover {
        cursor: pointer;
        transition: 2s;
        background: linear-gradient(
          147deg,
          rgba(48, 48, 54, 1) 0%,
          rgba(40, 143, 118, 1) 54%
        );
      }
    }
  }
}
</style>
