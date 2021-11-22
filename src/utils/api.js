import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/users",
});
const articlesApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/articles",
});

export const getSingleUser = (username) => {
  return usersApi.get(`/${username}`).then((res) => {
    return res.data.user;
  });
};

export const getAllArticles = () => {
  return articlesApi.get("/").then((res) => {
    return res.data.articles;
  });
};
