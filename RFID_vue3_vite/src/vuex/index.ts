/*
 * @Descripttion:
 * @version:
 * @Author: wy
 * @Date: 2021年04月07日 22:05:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月28日
 */
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
export interface State {
	isSideOpen: boolean;
	activePath: string;
}

// export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
	state() {
		return {
			isSideOpen: true,
			activePath: '',
		};
	},
	getters: {
		activePath: (state: State) => state.activePath,
	},
	mutations: {
		changeActivePath(state: State, newPath: string) {
			state.activePath = newPath;
		},
		changeIsSideOpen(state: State) {
			state.isSideOpen = !state.isSideOpen;
		},
	},
});
