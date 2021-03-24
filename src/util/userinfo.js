import Cookies from 'js-cookie';

export function setCookie(info) {
  const arr = Object.entries(info);
  for (let index = 0; index < arr.length; index += 1) {
    Cookies.set(arr[index][0], arr[index][1]);
  }
}

/**
 * 获取用户登录信息
 */
export function getCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}

/**
 * 删除用户登入信息
 */
export function removeCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
  return true;
}
