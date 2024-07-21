import { Cookies } from "react-cookie";

/**
 * cookie에 저장하기 위한 util
 */

const cookies: Cookies = new Cookies();

export const setCookie = (name: string, value: string, option: any) => {
  return cookies.set(name, value, option);
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
