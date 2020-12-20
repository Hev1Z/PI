<template>
    <div class="container">
        <h1>Факультеты:</h1>
        <div>
            <b-navbar type="dark" variant="outline-secondary">
                <b-nav-form>
                    <b-form-input
                        class="mr-sm-2"
                        placeholder="Search"
                        v-model="search"
                    ></b-form-input>
                </b-nav-form>
                {{ search }}
            </b-navbar>
        </div>
        <div
            class="accordion"
            role="tablist"
            v-for="faculty in faculties"
            :key="faculty.id"
        >
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1 " role="tab">
                    <b-button
                        block
                        :id="faculty.id"
                        v-b-toggle.1
                        :aria-controls="faculty.id"
                        variant="outline-secondary"
                        class="text-left"
                        >{{ faculty.faculty_title }}</b-button
                    >
                </b-card-header>
                <b-collapse
                    :id="faculty.id"
                    accordion="my-accordion"
                    role="tabpanel"
                >
                    <b-card-body>
                        <b-card-text>{{
                            faculty.faculty_description
                        }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: null,
            faculties: [
                {
                    id: "1",
                    faculty_title: "Газ",
                    faculty_description: "Никита не пидор"
                },
                {
                    id: "2",
                    faculty_title: "Уголь",
                    faculty_description: "Никита не гей"
                },
                {
                    id: "3",
                    faculty_title: "Нефть",
                    faculty_description: "Никита не хуесос"
                }
            ]
        };
    }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
