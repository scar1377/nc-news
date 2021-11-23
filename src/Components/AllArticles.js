import { getAllArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);
  return (
    <main key="articles-main" className="Articles">
      <h1 key="articles-h1">Articles</h1>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article_author">
              <Link
                to={`/articles/${article.article_id}`}
                className="go-to article-page"
              >
                <p key={`${article.article_id}_author`}>{article.author}</p>
                <p
                  key={`${article.article_id}_title`}
                  className="article-title"
                >
                  {article.title}
                </p>
                <p
                  key={`${article.article_id}_votes`}
                  className="votes article-votes"
                >
                  {article.votes}
                </p>
                <p
                  key={`${article.article_id}_created_at`}
                  className="article-created-at"
                >
                  {article.created_at}
                </p>
              </Link>

              <button
                key={`${article.article_id}_vote_up_button`}
                className="article-vote-button"
                // onClick={() => {
                // 	updateKudos(user.avatar_url, user.username, 1).then(() => {
                // 		setUsers(users);
                // 	});
                // }}
              >
                Vote +1
              </button>
              <button
                key={`${article.article_id}_vote_down_button`}
                className="article-vote-button"
                // onClick={() => {
                // 	updateKudos(user.avatar_url, user.username, 1).then(() => {
                // 		setUsers(users);
                // 	});
                // }}
              >
                Vote -1
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Articles;
