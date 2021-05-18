/*
 * @Descripttion:
 * @version:
 * @Author: wy
 * @Date: 2021年04月07日 22:05:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年05月18日
 */
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import router from '../router';

export interface State {
	isLogin: boolean;
}

// export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
	state() {
		return {
			isLogin: false,
		};
	},
	// getters: {
	// 	activePath: (state: State) => state.activePath,
	// },
});
