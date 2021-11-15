// set new token
export const setToken = (newToken) => {
  localStorage.clear();
  localStorage.setItem("token", newToken);
};

// get new token
export const getToken = () => {
  return localStorage.getItem("token");
};
