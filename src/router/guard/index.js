import NProgress from "nprogress";
import setupDebugGuard from "@/router/guard/debug.js";
import setupPermissionGuard from "@/router/guard/permission.js";

export default function createRouteGuard(router) {
	router.beforeEach((to, from, next) => {
		NProgress.start();
		next();
	});

	setupDebugGuard(router); // 保持调试环境
	setupPermissionGuard(router); // 登录验证

	// 路由后置拦截器
	router.afterEach(() => {
		NProgress.done(); // 完成进度栏
	});
}
