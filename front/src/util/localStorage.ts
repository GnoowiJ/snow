import { getCookie, removeCookie } from "./cookies.ts";

/**
 * localStorage user 정보 불러오기
 * @returns
 */
export const getUser = () => {
  // cookie와 localStorage의 정보 비교
  return localStorage.getItem("userInfo") && getCookie("x-auth-jwt")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
};

/**
 * cookie와 localStorage 정보 제거 => 로그아웃 시 사용
 */
export const removeUser = () => {
  removeCookie("x-auth-jwt");
  localStorage.clear();
};
