import { getAllArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState();
  const [author, setAuthor] = useState();
  let authorOnChange = "";
  useEffect(() => {
    getAllArticles(sortBy, author).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [sortBy, author]);
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
