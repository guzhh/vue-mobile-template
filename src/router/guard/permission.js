import { isLogin } from "@/utils/auth.js";

export default function setupPermissionGuard(router) {
	router.beforeEach(async (to, from, next) => {
		console.log("--------", isLogin());
		if (to.meta?.auth) {
			if (isLogin()) {
				next();
			} else {
				next({ name: "Login", query: { redirectPath: to.path, redirectQuery: JSON.stringify(to.query) } });
			}
		} else {
			next();
		}
	});
}
