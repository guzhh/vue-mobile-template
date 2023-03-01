import { isLogin } from "@/utils/auth.js";

export default function setupPermissionGuard(router) {
	router.beforeEach(async (to, from, next) => {
		if (to.meta?.auth) {
			if (isLogin()) {
				next();
			} else {
				next({ name: "Login", replace: true, query: { ...to.query, redirectPath: to.path } });
			}
		} else {
			next();
		}
	});
}
