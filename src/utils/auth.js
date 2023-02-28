import storage from "store";

const TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;

const isLogin = () => {
	return !!storage.get(TOKEN_KEY);
};

const getToken = () => {
	return storage.get(TOKEN_KEY);
};

const setToken = token => {
	storage.set(TOKEN_KEY, token);
};

const clearToken = () => {
	storage.remove(TOKEN_KEY);
};

export { isLogin, getToken, setToken, clearToken };
