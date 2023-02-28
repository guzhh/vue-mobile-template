import { mergeConfig } from "vite";
import eslint from "vite-plugin-eslint";
import baseConfig from "./vite.config.base";
import { getEnv } from "./utils/index.js";

export default mergeConfig(
	{
		plugins: [
			eslint({
				cache: false,
				include: ["src/**/*.js", "src/**/*.jsx", "src/**/*.vue"],
				exclude: ["node_modules"]
			})
		],
		server: {
			host: "0.0.0.0",
			port: 3300,
			open: false,
			https: false,
			fs: {
				strict: true
			},
			proxy: {
				[getEnv("VITE_API_BASE_URL")]: {
					target: `http://127.0.0.1:9999`, // 要使用 url 模块解析的 url 字符串
					changeOrigin: true, // 是否将发送请求头中host设置为target
					secure: false, // 是否验证SSL证书
					ws: true // 是否代理websocket
					// rewrite: (urlPath) => urlPath.replace(/^\/api/, `/`)
				}
			}
		}
	},
	baseConfig
);
