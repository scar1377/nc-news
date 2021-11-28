import { getAllArticles } from "../utils/api";
import { useEffect, useState } from "react";
import ArticleHeader from "./ArticlesComponents/ArticleHeader";
import ArticleCardsSection from "./ArticlesComponents/ArticleCardsSection";
import ErrorSection from "./ErrorSection";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState();
  const [author, setAuthor] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const isInAllArticle = true;

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sortBy, author)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.data.status === 404) setErr("Path not found...");
        else setErr("Something has gone wrong...");
      });
  }, [sortBy, author]);
  if (isLoading === true) {
    return (
      <main key="articles-main" className="Articles">
        {!!err ? (
          <ErrorSection err={err} />
        ) : (
          <>
            <ArticleHeader setAuthor={setAuthor} setSortBy={setSortBy} />
            <img
              className="is-loading-img"
              src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
              alt="Loading"
            />
            <h2 className="is-loading">On the way...</h2>
          </>
        )}
      </main>
    );
  }

  return (
    <main key="articles-main" className="Articles">
      <ArticleHeader setAuthor={setAuthor} setSortBy={setSortBy} />
      {!!err ? (
        <div className="err">
          <img
            src="https://thumbs.gfycat.com/TiredEmbellishedLeopard-size_restricted.gif"
            alt="Crying girl"
          />
          <p className="err-message">{err}</p>
        </div>
      ) : (
        <ArticleCardsSection
          articles={articles}
          isInAllArticle={isInAllArticle}
        />
      )}
    </main>
  );
};
export default Articles;
