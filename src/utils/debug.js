import storage from "store";

// 初始化 vconsole，控制隐藏/显示
const init = () => {
	const vc = document.querySelector("#__vconsole");
	const debug = storage.get("pk_debug");
	if (Number(import.meta.env.VITE_BUILD_VCONSOLE) === 1 && vc) {
		vc.style.display = debug === "1" ? "" : "none";
	}
};

const config = debug => {
	if (Number(debug) === 1) {
		storage.set("pk_debug", debug);
	} else {
		storage.remove("pk_debug");
	}
	init();
};

export default { init, config };
