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
                            v-model="form.username"
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
                    {{ token }}
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
                username: "",
                password: ""
            },
            show: true,
            resp: null,
            token: null
        };
    },
    methods: {
        onSubmit() {
            const params = new URLSearchParams();
            params.append("username", this.form.username);
            params.append("password", this.form.password);
            axios
                .post("http://193.123.59.224/api/v1/login/access-token", params)
                .then(response => (this.resp = response));
            this.token = this.resp.data.access_token;
        }
    },
    mounted() {
        // function authHeaders(token) {
        //     return {
        //         headers: {
        //             Authorization: `Bearer ${token}`
        //         }
        //     };
        // }
    }
};
</script>

<style></style>
