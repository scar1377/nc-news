import axios from "axios";

const homeApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api",
});
const topicsApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/topics",
});
const usersApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/users",
});
const articlesApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/articles",
});
const commentsApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/comments",
});

export const getToHomePage = (home) => {
  const path = "/";
  return homeApi
    .get(`${path}${home}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getAllTopics = () => {
  return topicsApi
    .get("/")
    .then((res) => {
      return res.data.topics;
    })
    .catch((err) => {
      throw err;
    });
};

export const getArticlesByTopic = (slug) => {
  return articlesApi
    .get(`?topic=${slug}`)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      throw err;
    });
};

export const getAllUsers = () => {
  return usersApi
    .get("/")
    .then((res) => {
      return res.data.users;
    })
    .catch((err) => {
      throw err;
    });
};

export const getSingleUser = (username) => {
  return usersApi
    .get(`/${username}`)
    .then((res) => {
      return res.data.user;
    })
    .catch((err) => {
      throw err;
    });
};

export const getAllArticles = (sortBy, author) => {
  return articlesApi
    .get("/", { params: { sort_by: sortBy } })
    .then((res) => {
      const resArticles = res.data.articles;
      if (author === undefined || author === "") {
        return res.data.articles;
      } else {
        const filteredArticles = resArticles.filter((article) =>
          article.author.includes(author)
        );
        return filteredArticles;
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const getSingleArticle = (article_id) => {
  return articlesApi
    .get(`/${article_id}`)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      throw err;
    });
};

export const getCommentsByArticle = (article_id) => {
  return articlesApi
    .get(`/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      throw err;
    });
};

export const updateArticleVotes = (article_id, vote) => {
  const body = { inc_votes: vote };
  return articlesApi
    .patch(`/${article_id}`, body)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      throw err;
    });
};

export const updateCommentVotes = (comment_id, vote) => {
  const body = { inc_votes: vote };
  return commentsApi
    .patch(`/${comment_id}`, body)
    .then((res) => {
      return res.data.comment;
    })
    .catch((err) => {
      throw err;
    });
};

export const postCommentByArticle = (article_id, author, comment) => {
  return articlesApi
    .post(`/${article_id}/comments`, {
      username: author,
      body: comment,
    })
    .then((res) => {
      return res.data.comment;
    })
    .catch((err) => {
      throw err;
    });
};

export const deleteSingleComment = (comment_id) => {
  return commentsApi
    .delete(`/${comment_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
