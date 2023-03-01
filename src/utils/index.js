/**
 * 设置页面标题
 * @param pageTitle 页面标题
 */
export function setPageTitle(pageTitle) {
	if (pageTitle) {
		document.title = `${import.meta.env.VITE_SYSTEM_NAME} - ${pageTitle}`;
	} else {
		document.title = `${import.meta.env.VITE_SYSTEM_NAME}`;
	}
}
