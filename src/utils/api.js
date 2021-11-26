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
const commentsApi = axios.create({
  baseURL: "https://szanews.herokuapp.com/api/comments",
});

export const getAllTopics = () => {
  return topicsApi
    .get("/")
    .then((res) => {
      return res.data.topics;
    })
    .catch((err) => {
      console.log(err, "<<<<<<<getAllTopics---api");
    });
};
export const getSingleTopic = (slug) => {
  return topicsApi
    .get(`/${slug}`)
    .then((res) => {
      return res.data.topic;
    })
    .catch((err) => {
      console.dir(err, "<<<<<<<getSingleTopics---api");
    });
};

export const getAllUsers = () => {
  return usersApi
    .get("/")
    .then((res) => {
      return res.data.users;
    })
    .catch((err) => {
      console.log(err, "<<<<<<<getAllUsers---api");
    });
};

export const getSingleUser = (username) => {
  return usersApi
    .get(`/${username}`)
    .then((res) => {
      return res.data.user;
    })
    .catch((err) => {
      if (err) throw err;
      console.dir(err, "<<<<<<<getSingleUser---api");
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
        const filteredArticles = resArticles.filter(
          (article) => article.author === author
        );
        return filteredArticles;
      }
    })
    .catch((err) => {
      console.log(err, "<<<<<<<getAllArticles---api");
    });
};

export const getSingleArticle = (article_id) => {
  return articlesApi
    .get(`/${article_id}`)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      console.log(err, "<<<<<<<getSingleArticle---api");
    });
};

export const getCommentsByArticle = (article_id) => {
  return articlesApi
    .get(`/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      console.log(err, "<<<<<<<getCommentsByArticle---api");
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
      console.log(err, "<<<<<<<updateArticleVotes---api");
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
      console.log(err, "<<<<<<<updateCommentVotes---api");
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
      console.log(err, "<<<<<<<postCommentByArticle---api");
    });
};

export const deleteSingleComment = (comment_id) => {
  return commentsApi
    .delete(`/${comment_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err, "<<<<<<<deleteSingleComment---api");
    });
};
