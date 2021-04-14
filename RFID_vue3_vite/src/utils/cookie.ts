/*
 * @Author: wy
 * @Date: 2021年04月08日
 * @LastEditTime: 2021年04月14日
 */
import Cookies from 'js-cookie';
// token
const TokenKey = 'token';
// 刷新token
const RefreshTokenKey = 'refresh-token';
// 获取 值 value
export function getToken() {
    return Cookies.get(TokenKey);
}
export function getRefreshToken() {
    return Cookies.get(RefreshTokenKey);
}
// 获取 名 key
export function getTokenKey() {
    return TokenKey;
}
export function getRefreshTokenKey() {
    return RefreshTokenKey;
}
// 设置cookie
export function setToken(token: any) {
    return Cookies.set(TokenKey, token);
}
export function setRefreshToken(refreshToken: any) {
    return Cookies.set(RefreshTokenKey, refreshToken);
}
// 删除
export function removeToken() {
    Cookies.remove(TokenKey);
    Cookies.remove(RefreshTokenKey);
}
const cookiesUtil = {
    setToken,
    setRefreshToken,
    getToken,
    getTokenKey,
    getRefreshToken,
    getRefreshTokenKey,
    removeToken,
}
export default cookiesUtil;