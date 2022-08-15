// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useCallback, useEffect, useState } from 'react';
import api from '../services/api'

export default () => {
  const [user, setUser] = useState({ isLogin: false, userId: ``, phone: ``, name: ``, coin: 0, vip: 0 });
  useEffect(() => { 
    
  }, [])
  const login = useCallback(async (phone, dp) => {
    const u = ``;
    const ret = await api.postUserLogin({ data: { phone, dp, u } })
    if (ret.code === 1) {
      return `验证码不正确`
    }
    localStorage.setItem(`token`, ret.result.token.token);
    localStorage.setItem(`refreshToken`, ret.result.refreshToken.refreshToken);
    localStorage.setItem(`user`, ret.result.user);
    setUser({ isLogin: true, ...ret.result.user })
  }, []);
  const logout = useCallback(() => { }, []);
  return {
    user,
    login,
    logout,
  };
};

