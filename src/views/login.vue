<script setup></script>

<template>
  <div class="login">
    <h1>Ya tienes cuenta? Unete a nosotros!</h1>
    <div class="login__card">
      <label for="">User</label>
      <input type="text" placeholder="email" />

      <label for="">Password</label>
      <input type="text" placeholder="password" />
      <button class="login__card__login-btn">Acceder</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  background-color: green;
  height: 90vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__card {
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 20px;
    border-radius: 4px;

    & > label {
      color: blueviolet;

      width: 100%;
      padding-block: 10px;
    }

    & > input {
      border-style: none;
      padding: 5px;
      border: 2px solid green;
      border-radius: 4px;
    }

    &__login-btn {
      margin-top: 20px;
      padding: 10px 20px;
      border: none;
      background-color: green;
      color: white;
      border-radius: 5px;
    }
  }
}
</style>
