<template>
    <div class="container">
        <b-card title="Регистрация">
            <div>
                <b-form @submit.prevent="onSubmit" v-if="show">
                    <small class="error" v-if="error">{{ error }}</small>
                    <small class="answer" v-if="resp.data"
                        >Вы зарегистрировались!</small
                    >
                    {{ resp.data }}
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
import axios from "axios";

export default {
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            show: true,
            resp: "",
            error: ""
            // token: null
        };
    },
    methods: {
        onSubmit() {
            this.resp = "";
            this.error = "";
            // const params = new URLSearchParams();
            // params.append("email", this.form.email);
            // params.append("password", this.form.password);
            axios
                .post("http://193.123.59.224/api/v1/users/open", {
                    email: this.form.email,
                    password: this.form.password
                })
                .then(response => (this.resp = response))
                .catch(error => (this.error = error))
                .then(detail => (this.error = detail));
            // this.token = this.resp.data.access_token;
        }
    }
};
</script>

<style>
.answer {
    color: green;
}

.error {
    color: red;
}
</style>
