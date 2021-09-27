<template>
    <div class="container">
        <div>
            <h1>ФИО:</h1>
            <b-form @submit="onSubmit" v-if="show">
                <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                    class="FullName"
                >
                    <b-form-input
                        id="input-1"
                        placeholder="ФИО"
                        required
                        v-model="form.full_name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label-for="input-2"
                    class="points"
                >
                    <b-form-input
                        id="input-2"
                        placeholder="Общая сумма балов"
                        required
                        v-model="form.points"
                        type="number"
                    ></b-form-input>
                </b-form-group>

                <div id="app" class="search">
                    <v-select
                        :options="[
                            { value: 1, text: 'Нефти' },
                            { value: 2, text: 'Газа' }
                        ]"
                        v-model="selectedValue"
                        searchable
                        labelSearchPlaceholder="Введите факультет"
                        labelNotFound="Не найдено "
                        labelTitle="Выберите Факультет"
                    />
                </div>

                <b-button type="submit" variant="primary">Отправить</b-button>
            </b-form>
        </div>
    </div>
</template>
<script>
import VSelect from "@alfsnd/vue-bootstrap-select";
export default {
    data() {
        return {
            form: {
                full_name: "",
                points: ""
            },
            selectedValue: null,

            show: true
        };
    },
    components: {
        VSelect
    },

    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
        }
    }
};
</script>

<style>
/* .FullName { */
/* margin: 2% 0 2%; */
/* } */
.search {
    margin: 2% 0 2%;
}
</style>
