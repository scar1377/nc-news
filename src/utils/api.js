import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://nc-marketplace.herokuapp.com/api/users",
});

export const getSingleUser = (username) => {
  return usersApi.get(`/${username}`).then((res) => {
    return res.data.user;
  });
};
