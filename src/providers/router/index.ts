import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@providers/router/routes";


const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "router-active",
});

export default router
