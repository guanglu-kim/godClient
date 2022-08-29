import user from './core/user'

export async function getInitialState() {
  return { name: '@umijs/max' };
}

export const request = {
  requestInterceptors: [user.requestInterceptor],
  responseInterceptors: [user.responseInterceptors]
};

