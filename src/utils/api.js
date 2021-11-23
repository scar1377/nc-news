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
export const getSingleTopic = (slug) => {
  return topicsApi.get("/:slug").then((res) => {
    return res.data.topic;
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

export const getAllArticles = (sortBy, author) => {
  return articlesApi.get("/", { params: { sort_by: sortBy } }).then((res) => {
    const resArticles = res.data.articles;
    if (author === undefined || author === "") {
      return res.data.articles;
    } else {
      const filteredArticles = resArticles.filter(
        (article) => article.author === author
      );
      return filteredArticles;
    }
  });
};

export const getSingleArticle = (article_id) => {
  return articlesApi.get(`/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticle = (article_id) => {
  return articlesApi.get(`/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
