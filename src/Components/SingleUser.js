import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getSingleUser } from "../utils/api";
import { Link } from "react-router-dom";

const SingleUser = (currentUser) => {
  const { username } = useParams();
  const [singleUser, setSingleUser] = useState([]);
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (currentUser) {
      return getSingleUser(currentUser.username)
        .then((userFromApi) => {
          setSingleUser(userFromApi);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setErr("User does not exist...");
          } else {
            setErr("Something has gone wrong...");
          }
        });
    } else {
      getSingleUser(username)
        .then((userFromApi) => {
          setSingleUser(userFromApi);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setErr("User does not exist...");
          } else {
            setErr("Something has gone wrong...");
          }
        });
    }
  }, [username, currentUser]);

  useEffect(() => {
    getAllArticles()
      .then((articlesFromApi) => {
        const articlesByUser = articlesFromApi.filter(
          (article) => article.author === username
        );
        setArticles(articlesByUser);
      })
      .catch((err) => {
        console.log(
          err,
          "<<<<<<<<<<<<<err in SingleUser>>>>>>>>>getAllArticles"
        );
      });
  }, [username]);

  return (
    <main className="SingleUser">
      <h1>{singleUser.name}</h1>
      <img
        className="single-user-avatar"
        src={singleUser.avatar_url}
        alt={singleUser.name}
      />
      <section className="articles-by-user">
        {articles.map((article) => {
          return (
            <ul
              key={`${article.article_id}_by_user_ul`}
              className="article-card"
            >
              <li
                key={`${article.article_id}_by_user`}
                className="article-by-user"
              >
                <Link
                  to={`/articles/${article.article_id}`}
                  className="go-to article-page"
                >
                  <p key={`${article.article_id}_author_by_user`}>
                    {article.author}
                  </p>
                  <p
                    key={`${article.article_id}_title_by_user`}
                    className="article-title"
                  >
                    {article.title}
                  </p>
                  <p
                    key={`${article.article_id}_votes_by_user`}
                    className="votes article-votes"
                  >
                    {article.votes}
                  </p>
                  <p
                    key={`${article.article_id}_created_at_by_user`}
                    className="article-created-at"
                  >
                    {article.created_at}
                  </p>
                </Link>
              </li>
            </ul>
          );
        })}
      </section>
    </main>
  );
};
export default SingleUser;
