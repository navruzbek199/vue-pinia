
import Cookies from "js-cookie";


// User
const accessTokenKey = "access_token";
export const getAccessToken = () => Cookies.get(accessTokenKey);
export const setAccessToken = (token: string) =>
  Cookies.set(accessTokenKey, token);
export const removeAccessToken = () => Cookies.remove(accessTokenKey);

// User
const refreshTokenKey = "refresh_token";
export const getRefreshToken = () => Cookies.get(refreshTokenKey);
export const setRefreshToken = (token: string) =>
    Cookies.set(refreshTokenKey, token);
export const removeRefreshToken = () => Cookies.remove(refreshTokenKey);


