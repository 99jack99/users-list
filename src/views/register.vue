<script setup></script>

<template>
  <div class="register">
    <h1>Todavia no estas con nosotros? Crea gratis una cuenta</h1>
    <div class="register__card">
      <label for="">User</label>
      <input type="text" placeholder="email" />

      <label for="">Password</label>
      <input type="text" placeholder="password" />
      <button class="register__card__register-btn">Crear</button>
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
}
</style>
