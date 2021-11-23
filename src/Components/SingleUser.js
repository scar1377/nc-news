import { useEffect, useState } from "react";
import { useContext } from "react";
import { userContext } from "../Contexts/userContext";
import { useParams } from "react-router-dom";
import { getAllArticles, getSingleUser } from "../utils/api";
import { Link } from "react-router-dom";
import Articles from "./AllArticles";

const SingleUser = () => {
  // const { username } = useContext(userContext);
  const { username } = useParams();
  const [singleUser, setSingleUser] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getSingleUser(username).then((userFromApi) => {
      setSingleUser(userFromApi);
    });
  }, [username]);

  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      const articlesByUser = articlesFromApi.filter(
        (article) => article.author === username
      );
      setArticles(articlesByUser);
    });
  }, []);

  return (
    <main className="SingleUser">
      <h1>SingleUser</h1>
      <h2>{singleUser.name}</h2>
      <img src={singleUser.avatar_url} alt={singleUser.name} />
      <section className="articles-by-user">
        <ul>
          {articles.map((article) => {
            return (
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
            );
          })}
        </ul>
      </section>
    </main>
  );
};
export default SingleUser;
