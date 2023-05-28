<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const user_info = ref();
const loader = ref(false);

const get_user = () => {
  loader.value = false;
  axios
    .get(`https://reqres.in/api/users/${id}`)
    .then((res) => {
      user_info.value = res.data.data;
      loader.value = true;
    })
    .catch((error) => {
      console.log(error);
      /* toast to warn error */
      loader.value = true;
    });
};

onMounted(() => {
  get_user();
});
</script>

<template>
  <div class="detailed">
    <router-link to="/users" class="detailed-btn">VOLVER ATRAS</router-link>
    <div class="detailed__card">
      <h1>{{ id }}</h1>
      <div v-if="loader">
        <span class="detailed__card__row"
          ><p class="detailed__card__row__label">Nombre:</p>
          <p class="detailed__card__row__info">
            {{ user_info.first_name }}
          </p></span
        >
        <span class="detailed__card__row"
          ><p class="detailed__card__row__label">Apellidos:</p>
          <p class="detailed__card__row__info">
            {{ user_info.last_name }}
          </p></span
        >
        <span class="detailed__card__row"
          ><p class="detailed__card__row__label">Email:</p>
          <p class="detailed__card__row__info">{{ user_info.email }}</p></span
        >
        <img v-bind:src="user_info.avatar" alt="img" />
      </div>
      <div v-else>cargando..</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

.detailed {
  width: 100%;
  height: 90vh;
  background-color: $secondary-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .detailed-btn {
    color: $font-color;
    padding: 10px;
    background-color: $main-color;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  h1 {
    color: $secondary-color;
    background-color: $font-color;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  &__card {
    padding: 20px;
    border-radius: 10px;
    background-color: $main-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__row {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      &__label {
        margin-right: 10px;
        font-size: 18px;
        font-weight: bold;
      }

      &__info {
        font-size: 18px;
      }
    }

    img {
      border-radius: 50%;
    }
  }
}
</style>
