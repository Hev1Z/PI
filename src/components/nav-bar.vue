<template>
  <div class="container">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <router-link to="/" class="nav-link active">Главная</router-link>

        <router-link to="/enrollment" class="nav-link active"
          >Поступление</router-link
        >

        <router-link to="/education" class="nav-link active"
          >Образование</router-link
        >

        <!-- Navbar dropdowns -->

        <b-nav-item-dropdown text="Lang">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Поиск"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Поиск</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="User" right v-if="current_user">
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
        <router-link to="/login" class="nav-link active" v-if="!current_user"
          >Авторизация</router-link
        >
        <router-link
          to="/registration"
          class="nav-link active"
          v-if="!current_user"
          >Регистрация</router-link
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current_user: false
    };
  }
};
</script>
<style></style>
