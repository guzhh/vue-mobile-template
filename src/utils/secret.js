import cryptoJs from "crypto-js";

export const generatekey = num => {
	const library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let key = "";
	for (let i = 0; i < num; i++) {
		const randomPoz = Math.floor(Math.random() * library.length);
		key += library.substring(randomPoz, randomPoz + 1);
	}
	return key;
};

// DES(CBC)加密
export const encryptByCBC = ({ message, key1 = import.meta.env.VITE_SECRET_KEY, iv1 = import.meta.env.VITE_SECRET_IV }) => {
	const key = cryptoJs.enc.Utf8.parse(key1);
	const iv = cryptoJs.enc.Utf8.parse(iv1);
	const srcs = cryptoJs.enc.Utf8.parse(message);
	// 加密模式为AES，
	const encrypted = cryptoJs.AES.encrypt(srcs, key, {
		iv,
		mode: cryptoJs.mode.CBC,
		padding: cryptoJs.pad.ZeroPadding
	});
	return cryptoJs.enc.Base64.stringify(encrypted.ciphertext); // 返回base64
};

// DES(CBC)解密
export const decryptByCBC = ({ message, key1 = import.meta.env.VITE_SECRET_KEY, iv1 = import.meta.env.VITE_SECRET_IV }) => {
	// 如果传入的不是加密字符串，直接转为json字符串返回
	if (typeof message !== "string") {
		return JSON.stringify(message);
	}
	const key = cryptoJs.enc.Utf8.parse(key1);
	const iv = cryptoJs.enc.Utf8.parse(iv1);
	const base64 = cryptoJs.enc.Base64.parse(message);
	const src = cryptoJs.enc.Base64.stringify(base64);
	// 解密模式为CBC，
	const decrypt = cryptoJs.AES.decrypt(src, key, {
		iv,
		mode: cryptoJs.mode.CBC,
		padding: cryptoJs.pad.ZeroPadding
	});
	const decryptedStr = decrypt.toString(cryptoJs.enc.Utf8);
	return decryptedStr.toString();
};

export default {
	encryptByCBC,
	decryptByCBC
};
