import { remove } from "./storageManager";

export const logout = () => {
  remove("user");
  remove("channel");
  window.location.href = "/";
};
