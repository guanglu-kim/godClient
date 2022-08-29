import { request } from 'umi';
const base = process.env.BASE_URL;

export default {
    postUserDb: (payload) => {
        return request(base + `user/dp`, {
            method: `post`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    postUserLogin: (payload) => {
        return request(base + `user/login`, {
            method: `post`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    postUserForceLogin: (payload) => {
        return request(base + `user/forceLogin`, {
            method: `post`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    postUserToken: (payload) => {
        return request(base + `user/token`, {
            method: `post`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    getUserInfo: (payload) => {
        return request(base + `user/info`, {
            data: payload?.data,
            params: payload?.params,
        });
    },
    putUserName: (payload) => {
        return request(base + `user/name`, {
            method: `put`,
            data: payload?.data,
            params: payload?.params,
        });
    }
}