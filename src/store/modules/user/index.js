import { defineStore } from "pinia";

const useUserStore = defineStore("userStore", {
	state: () => ({
		id: null
	}),
	getters: {
		userInfo(state) {
			return { ...state };
		}
	},
	actions: {
		// 设置用户信息
		setInfo(partial) {
			this.$patch(partial);
		}
	}
});

export default useUserStore;
