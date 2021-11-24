import { getAllArticles, updateArticleVotes } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCount from "../Hooks.js/useCount";
import Voter from "./Voter";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState();
  const [author, setAuthor] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { count, incCount, deCount } = useCount();
  let authorOnChange = "";
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
        <h1 key="articles-h1">Articles</h1>
        <section className="sort-bar">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setAuthor(authorOnChange);
              console.log(authorOnChange, "authorOnChange");
              console.log(author, "<<<<<<author");
            }}
          >
            <input
              type="text"
              className="search-bar"
              placeholder="Please enter the author"
              onChange={(e) => {
                authorOnChange = e.target.value;
                console.log(authorOnChange, "authorOnChange");
              }}
            />
            <input type="submit" value="Search" />
          </form>
          <select
            className="sort-by"
            defaultValue={"default"}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option key="sort_by" value="default" disabled>
              sort
            </option>
            <option key="created_by">created_at</option>
            <option key="comment_count">comment_counts</option>
            <option key="votes">votes</option>
          </select>
        </section>
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
      <h1 key="articles-h1">Articles</h1>
      <section className="article-search-bar">
        <section className="sort-bar">
          <form
            className="search-form"
            onSubmit={(e) => {
              e.preventDefault();
              setAuthor(authorOnChange);
              console.log(authorOnChange, "authorOnChange");
              console.log(author, "<<<<<<author");
            }}
          >
            <input
              type="text"
              className="search-bar"
              placeholder="Please enter the author"
              onChange={(e) => {
                authorOnChange = e.target.value;
                console.log(authorOnChange, "authorOnChange");
              }}
            />
            <input type="submit" value="Search" />
          </form>
          <select
            className="sort-by"
            defaultValue={"default"}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option key="sort_by" value="default" disabled>
              sort
            </option>
            <option key="created_by">created_at</option>
            <option key="comment_count">comment_counts</option>
            <option key="votes">votes</option>
          </select>
        </section>
      </section>
      <section className="article-card-section">
        {articles.map((article) => {
          return (
            <ul className="article-card">
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
                <Voter article_id={article.article_id} votes={article.votes} />
              </li>
            </ul>
          );
        })}
      </section>
    </main>
  );
};
export default Articles;
