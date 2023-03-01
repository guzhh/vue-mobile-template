export default [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/home/index.vue"),
		meta: {
			title: "首页", // 页面标题
			keepAlive: false, // 是否缓存
			auth: true // 是否验证登录
		}
	}
];
