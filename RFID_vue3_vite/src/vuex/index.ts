/*
 * @Descripttion:
 * @version:
 * @Author: wy
 * @Date: 2021年04月07日 22:05:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月26日
 */
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import getters from './getters';
export interface State {
	activePath: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
	state() {
		return {
			activePath: '',
		};
	},
	getters,
	mutations: {
		changeActivePath(state, newPath:string) {
			state.activePath = newPath;
		},
	},
});
