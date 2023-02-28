import path, { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import vueJsx from "@vitejs/plugin-vue-jsx";
import DefineOptions from "unplugin-vue-define-options/vite";
import { createHtmlPlugin } from "vite-plugin-html";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { getEnv } from "./utils/index.js";
import packageJson from "../package.json";
import vConsole from "./plugin/vConsole.js";

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vConsole(),
		DefineOptions(),
		Components({ resolvers: [VantResolver()] }), // 按需引入vite
		svgLoader({ svgoConfig: {} }), // 将svg当做组件使用
		createHtmlPlugin({
			// 为index插入
			inject: {
				data: {
					title: getEnv("VITE_SYSTEM_NAME") // 项目标题
				}
			}
		})
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "../src")
		}
	},
	extensions: [".js"], // 导入省略 .js 后缀
	define: {
		"process.env": {} // 将项目中 process.env 置为空
	},
	css: {
		// 全局使用自定义变量
		preprocessorOptions: {
			less: {
				modifyVars: {
					hack: `true; @import (reference) "${resolve("src/assets/style/breakpoint.less")}";`
				},
				javascriptEnabled: true
			}
		}
	},
	base: `/${packageJson.name}/`
});
