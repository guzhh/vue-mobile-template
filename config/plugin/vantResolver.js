import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

export default function configVantResolverPlugin() {
	const plugins = [
		AutoImport({
			imports: [
				"vue",
				"vue-router",
				{
					vant: ["showToast", "showDialog", "showNotify", "showImagePreview"]
				}
			],
			eslintrc: {
				enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
				filepath: "./.eslintrc-auto-import.json", // 生成json文件
				globalsPropValue: true
			},
			dts: "src/auto-imports.d.ts"
		}),
		Components({
			dirs: ["src/components1"], // 指定组件位置，默认是src/components
			resolvers: [VantResolver()], // ui库解析器
			dts: "src/components.d.ts" // 配置文件生成位置
		})
	];
	return plugins;
}
