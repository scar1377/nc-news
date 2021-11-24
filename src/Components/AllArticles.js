import { getAllArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleVoter from "./ArticleVoter";
import ArticleHeader from "./ArticleHeader";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState();
  const [author, setAuthor] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sortBy, author).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [sortBy, author]);
  if (isLoading === true) {
    return (
      <main key="articles-main" className="Articles">
        <ArticleHeader setAuthor={setAuthor} setSortBy={setSortBy} />
        <img
          className="is-loading-img"
          src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
          alt="Loading"
        />
        <h2 className="is-loading">On the way...</h2>
      </main>
    );
  }

  return (
    <main key="articles-main" className="Articles">
      <ArticleHeader setAuthor={setAuthor} setSortBy={setSortBy} />
      <section className="article-card-section">
        {articles.map((article) => {
          return (
            <ul key={`${article.article_id}ul`} className="article-card">
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
                <ArticleVoter
                  article_id={article.article_id}
                  votes={article.votes}
                />
              </li>
            </ul>
          );
        })}
      </section>
    </main>
  );
};
export default Articles;
