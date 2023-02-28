import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import config from "./config/index";
import createRouteGuard from "@/router/guard/index.js";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: config,
	// strict: true, // 不允许路由末尾为/ 斜杠
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export function setupRouter(app) {
	NProgress.configure({ showSpinner: false }); // NProgress 配置
	app.use(router);

	// 路由拦截器
	createRouteGuard(router);
}

export default router;
