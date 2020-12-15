import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Enrollment from "../views/Enrollment.vue";
import Registration from "../views/Registration.vue";
import Education from "../views/Education.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    //  }
    component: Login
  },
  {
    path: "/enrollment",
    name: "Enrollment",
    component: Enrollment
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration
  },
  {
    path: "/education",
    name: "Education",
    component: Education
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
