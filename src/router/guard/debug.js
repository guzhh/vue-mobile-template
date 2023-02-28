/** 保持调试环境 */
export default function setupDebugGuard(router) {
	router.beforeEach(async (to, from, next) => {
		if (Number(to.query.debug) === 1) {
			next();
		} else if (Number(from.query.debug) === 1) {
			next({ ...to, query: { ...to.query, debug: 1 } });
		} else {
			next();
		}
	});
}
