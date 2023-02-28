/**
 * 用于打包和输出 gzip
 * gzip压缩
 * https://github.com/anncwb/vite-plugin-compression
 */
import compressPlugin from "vite-plugin-compression";

/**
 *
 * @param compress 'gzip' | 'brotli'
 * @param deleteOriginFile
 * @returns {*[]}
 */
export default function configCompressPlugin(compress, deleteOriginFile = false) {
	const plugins = [];

	if (compress === "gzip") {
		plugins.push(
			compressPlugin({
				ext: ".gz",
				deleteOriginFile
			})
		);
	}

	if (compress === "brotli") {
		plugins.push(
			compressPlugin({
				ext: ".br",
				algorithm: "brotliCompress",
				deleteOriginFile
			})
		);
	}
	return plugins;
}
