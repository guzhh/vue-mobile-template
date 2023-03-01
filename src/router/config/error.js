export default [
	{
		path: "/wxAuthErr",
		name: "wxAuthErr",
		component: () => import("@/views/error/wxAuthErr.vue"),
		meta: {
			title: "认证失败",
			keepAlive: false,
			auth: false
		}
	},
	{
		path: "/commonError",
		name: "commonError",
		component: () => import("@/views/error/commonError.vue"),
		meta: {
			title: "错误",
			keepAlive: false,
			auth: false
		}
	},
	// 替代vue2中的'*'通配符路径
	{
		path: "/:pathMatch(.*)*",
		component: () => import("@/views/error/notFound.vue"),
		meta: {
			title: "notFound",
			keepAlive: false,
			auth: false
		}
	}
];
