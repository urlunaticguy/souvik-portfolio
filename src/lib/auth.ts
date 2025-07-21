// lib/auth.ts
import Cookies from 'js-cookie';

const COOKIE_KEY = 'auth_token';

export const setAuthCookie = (token: string) => {
  Cookies.set(COOKIE_KEY, token, {
    expires: 7,
    path: '/',
  });
};

export const getAuthToken = () => {
  return Cookies.get(COOKIE_KEY);
};

export const clearAuthCookie = () => {
  Cookies.remove(COOKIE_KEY, { path: '/' });
};

export const isLoggedIn = () => {
  return !!getAuthToken();
};
