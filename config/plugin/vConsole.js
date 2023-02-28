import path from "path";
import { viteVConsole } from "vite-plugin-vconsole";
import { getEnv } from "../utils/index.js";

export default function vConsole() {
	return viteVConsole({
		entry: path.resolve(__dirname, "../../src/main.js"),
		localEnabled: true,
		enabled: Number(getEnv("VITE_BUILD_VCONSOLE")) === 1,
		config: {
			maxLogNumber: 1000,
			theme: "dark"
		}
	});
}
