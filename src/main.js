import { createApp } from "vue";
import "@/assets/style/global.less";
import App from "./App.vue";
import "@/plugins/vant";
import router, { setupRouter } from "@/router";
import { setupStore } from "@/store/index";

async function bootstrap() {
	const app = createApp(App);
	// 挂载 pinia
	setupStore();
	// 挂载路由
	await setupRouter(app);
	// 监听路由准备就绪后挂载APP实例
	await router.isReady();
	// 挂载vue实例
	app.mount("#app", true);
}

// eslint-disable-next-line no-void
void bootstrap();
