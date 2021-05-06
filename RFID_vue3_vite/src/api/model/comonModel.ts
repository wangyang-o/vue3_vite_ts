/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年05月05日
 * @LastEditTime: 2021年05月05日
 */
export interface comonModel<T> {
	code: number;
	msg: string;
	error?: string;
	data?: T;
}
