import axios from "axios";

const topicsApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/topics",
});
const usersApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/users",
});
const articlesApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/articles",
});

export const getAllTopics = () => {
  return topicsApi.get("/").then((res) => {
    return res.data.topics;
  });
};

export const getAllUsers = () => {
  return usersApi.get("/").then((res) => {
    return res.data.users;
  });
};

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

export const getSingleArticle = (article_id) => {
  return articlesApi.get(`/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticle = (article_id) => {
  return articlesApi.get(`/${article_id}/comments`).then((res) => {
    console.log(res.data.comments);
    return res.data.comments;
  });
};
