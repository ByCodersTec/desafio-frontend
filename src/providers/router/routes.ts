export const routes = [
	{
		path: '/:pathMatch(.*)*',
		name: "default",
		component: () => import("@ui/views/default/index.vue"),
	},
    {
		path: "/",
		name: "home",
		component: () => import("@ui/views/home/index.vue"),
	},
]