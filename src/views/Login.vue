<template>
    <div class="container">
        <b-card title="Авторизация">
            <div>
                <b-form @submit.prevent="onSubmit" v-if="show">
                    <b-form-group
                        id="input-group-1"
                        label="Email:"
                        label-for="email"
                    >
                        <b-form-input
                            id="email"
                            v-model="form.email"
                            type="email"
                            placeholder="Введите email"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-2"
                        label="Пароль:"
                        label-for="password"
                    >
                        <b-form-input
                            id="password"
                            v-model="form.password"
                            type="password"
                            placeholder="Введите пароль"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Войти</b-button>
                </b-form>
                <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                </b-card>
            </div>
        </b-card>
    </div>
</template>

<script>
import axios from "axios";

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
        onSubmit() {
            axios
                .post("http://193.123.59.224/api/v1/login/access-token", {
                    email: this.form.email,
                    password: this.form.password
                })
                .then(response => (this.news = response));
            alert(JSON.stringify(this.form));
        }
    },
    mounted() {}
};
</script>

<style></style>
