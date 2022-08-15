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
    },
    postUserAutoPay: (payload) => {
        return request(base + `user/autoPay`, {
            method: `post`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    deleteUserAutoPay: (payload) => {
        return request(base + `user/autoPay`, {
            method: `delete`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    getUserAutoPay: (payload) => {
        return request(base + `user/autoPay`, {
            data: payload?.data,
            params: payload?.params,
        });
    },
    postUserSearch: (payload) => {
        return request(base + `user/search`, {
            method: `put`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    deleteUserSearch: (payload) => {
        return request(base + `user/search`, {
            method: `delete`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    getUserSearch: (payload) => {
        return request(base + `user/search`, {
            method: `get`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    getUserHot: (payload) => {
        return request(base + `user/hot`, {
            method: `get`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    getUserRecharge: (payload) => {
        return request(base + `user/recharge`, {
            method: `get`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    getUserPaylog: (payload) => {
        return request(base + `user/paylog`, {
            method: `get`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    postUserBuyChapter: (payload) => {
        return request(base + `user/buyChapter`, {
            method: `get`,
            data: payload?.data,
            params: payload?.params,
        });
    },
    getUserShareReward: (payload) => {
        return request(base + `user/shareReward`, {
            method: `get`,
            data: payload?.data,
            params: payload?.params,
        });
    },
}