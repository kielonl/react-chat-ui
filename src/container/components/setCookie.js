import Cookies from "js-cookie";

const setCookie = (cookieName, value) => {
  Cookies.set(cookieName, value, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
export default setCookie
