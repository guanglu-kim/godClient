// 全局共享数据示例
import { useCallback, useEffect, useState } from 'react';
import coreUser from '../core/user'

export default () => {
    const [user, setUser] = useState({ isLogin: false, userId: ``, phone: ``, name: ``, coin: 0, vip: 0 });
    useEffect(() => {
        if (coreUser.isLogin()) {
            setUser({ isLogin: true, ...coreUser.getUser() })
        }
    }, [])
    const login = useCallback(async (phone, dp) => {
        // TODO: 没有获取分享连接
        const u = ``;
        const ret = await coreUser.login(phone, dp, u);
        if (ret) {
            setUser({ isLogin: true, ...coreUser.getUser() })
        }
    }, []);
    const logout = useCallback(() => { }, []);
    return {
        user,
        login,
        logout,
    };
};
