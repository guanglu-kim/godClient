import api from './api';
import { history } from 'umi'
import { request } from 'umi';
import { message } from 'antd';
import moment from 'moment'

function saveToken(token, refreshToken) {
    localStorage.setItem(`token`, token);
    localStorage.setItem(`refreshToken`, refreshToken);
}

function loadToken() {
    return localStorage.getItem(`token`);
}

function loadRefreshToken() {
    return localStorage.getItem(`refreshToken`);
}

async function refreshToken() {
    const ret = await api.postUserToken({ data: { refreshToken: loadRefreshToken() } })
    if (ret.result) {
        saveToken(ret.result.token.token, ret.result.refreshToken.refreshToken);
        return true
    } else {
        return false;
    }
}

function isLogin() {
    const token = loadToken();
    if (token) return true;
    return false;
}

function saveUser(user) {
    localStorage.setItem(`user`, JSON.stringify(user));
}

function getUser() {
    const obj = JSON.parse(localStorage.getItem(`user`))
    let diff = moment(obj.vip).diff(moment(), `day`);
    if (diff < 0) diff = 0;
    obj.vip = diff;
    return obj;
}

async function login(phone, dp, u) {
    const ret = await api.postUserLogin({ data: { phone, dp, u } })
    if (ret.code === 1) {
        message.error(`验证码不正确`)
        return false;
    }
    saveToken(ret.result.token.token, ret.result.refreshToken.refreshToken);
    saveUser(user);
    return true;
}

const responseInterceptors = [res => res, async (error) => {
    if (error.response && error.response.status === 401) {
        if (!await refreshToken()) {
            history.push(`./login`);
            return;
        }

        // 重新发送请求
        const response = await request(error.config.url, {
            method: error.config.method,
            data: error.config.data,
        });
        return Promise.resolve(response)
    }
}]

const requestInterceptor = (config) => {
    config.headers[`Authorization`] = `Bearer ` + loadToken();
    return { ...config };
}

export default {
    responseInterceptors,
    requestInterceptor,
    isLogin,
    login,
    getUser,
}