import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./HomeView.vue";
import AboutUsView from "./AboutUsView.vue";
import BedroomView from "./BedroomView.vue";
import DiningView from "./DiningView.vue";
import UpholsteryView from "./UpholsteryView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/about-us", component: AboutUsView },
    { path: "/bedroom", component: BedroomView },
    { path: "/dining", component: DiningView },
    { path: "/upholstery", component: UpholsteryView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
createApp(App).use(router).mount("#app");
