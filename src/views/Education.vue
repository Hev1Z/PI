<template>
    <div class="container">
        <h1>Факультеты:</h1>
        <div id="app">
            <input
                type="text"
                v-model="search"
                placeholder="Поиск по факультетам"
                class="input-group"
            />
            <div
                class="accordion"
                role="tablist"
                v-for="todo in todosByTitle"
                :key="String(todo.id)"
            >
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1 " role="tab">
                        <b-button
                            block
                            v-b-toggle="String(todo.id)"
                            variant="outline-secondary"
                            class="text-left"
                            >{{ todo.title }}</b-button
                        >
                    </b-card-header>
                    <b-collapse
                        :id="String(todo.id)"
                        accordion="my-accordion"
                        role="tabpanel"
                    >
                        <b-card-body>
                            <b-card-text>{{ todo.description }} </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
        <div v-if="super_user">
            <b-form-input
                v-model="text"
                placeholder="Enter your name"
            ></b-form-input>
            <b-button variant="secondary" class="but">Добавить</b-button>
            <b-button variant="secondary" class="but">Изменить</b-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: "",
            todos: []
        };
    },
    computed: {
        todosByTitle() {
            return this.todos.filter(
                item =>
                    item.title
                        .toLowerCase()
                        .indexOf(this.search.toLowerCase()) !== -1
            );
        }
    },
    beforeMount() {
        fetch("http://udgugas.tk/api/v1/faculties/")
            .then(response => response.json())
            .then(json => {
                this.todos = json;
            });
    }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
.but {
    margin: 1% 1% 1%;
}
</style>
