/*
 * @Descripttion:
 * @version:
 * @Author: wy
 * @Date: 2021年04月07日 22:05:35
 * @LastEditors: wy
 * @LastEditTime: 2021年04月07日 22:05:51
 */
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
