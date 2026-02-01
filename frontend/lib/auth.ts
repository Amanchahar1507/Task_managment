export const isLoggedIn = () => {
  if (typeof window === "undefined") return false;
  return Boolean(localStorage.getItem("accessToken"));
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  window.location.href = "/login";
};
