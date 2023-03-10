export default [
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/user/login/index.vue"),
		meta: {
			title: "登录", // 页面标题
			keepAlive: false, // 是否缓存
			auth: false // 是否验证登录
		}
	}
];
