const removeCookie = (cookieName) => {
  return localStorage.removeItem(cookieName);
};
export default removeCookie;
