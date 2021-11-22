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
    <main className="Articles">
      <h1>Articles</h1>
      {articles.map((article) => {
        return (
          <ul>
            <li key={article.author} className="article_author">
              {article.author}
            </li>
            <li key={article.title} className="article_title">
              {article.title}
            </li>
            <li key={article.vote} className="article_title">
              {article.vote}
            </li>
            <li key={article.body} className="article_title">
              {article.body.slice(20)}
            </li>
            <li key={article.created_at} className="created_at">
              {article.created_at}
            </li>
            <button
              key={`${article.article_id}kudosUpButton`}
              // onClick={() => {
              // 	updateKudos(user.avatar_url, user.username, 1).then(() => {
              // 		setUsers(users);
              // 	});
              // }}
            >
              Vote +1
            </button>
            <button
              key={`${article.article_id}kudosDownButton`}
              // onClick={() => {
              // 	updateKudos(user.avatar_url, user.username, 1).then(() => {
              // 		setUsers(users);
              // 	});
              // }}
            >
              Vote -1
            </button>
          </ul>
        );
      })}
    </main>
  );
};
export default Articles;
