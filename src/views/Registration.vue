<template>
  <div class="container">
    <b-card title="Регистрация">
      <div>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group id="input-group-1" label="Email:" label-for="email">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Введите email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Пароль:" label-for="password">
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Введите пароль"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary"
            >Зарегистрироваться</b-button
          >
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style></style>
