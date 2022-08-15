import api from './services/api'

export async function getInitialState() {
  return { name: '@umijs/max' };
}

const responseInterceptor = async (response, options) => {
  if (response && response.status === 401 && localStorage.getItem(`refreshToken`)) {
    //TOKEN过期刷新TOKEN
    const reqToken = await api.postUserToken({
      data: { refreshToken: localStorage.getItem(`refreshToken`) },
    });

    console.log(reqToken);

    if (reqToken.code === 0) {
      //新的token和refreshToken存入localStorage

      localStorage.setItem('token', reqToken.token.token);
      localStorage.setItem('refreshToken', reqToken.refreshToken.refreshToken);
      options.headers.Authorization = 'Bearer ' + reqToken.token.token;

      //重新发送请求

      return new Promise((resolve) => {
        //设置新的请求头token发送请求

        options.headers.Authorization = 'Bearer ' + reqToken.token.token;
        resolve(api_login.again(options.url, options));
      });
    } else {
      //refreshToken 过期或异常 跳转 login

      localStorage.clear();
      history.push('/login');
      return '';
    }
  }

  return response;
};

export const request = {
  middlewares: [
    async (ctx, next) => {
      ctx.req.options.headers = {
        Authorization: localStorage.getItem(`token`)
          ? 'Bearer ' + localStorage.getItem(`token`)
          : '',
      };

      await next();
    },
  ],
  responseInterceptors: [responseInterceptor],
};

