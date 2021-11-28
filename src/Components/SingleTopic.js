import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllTopics, getArticlesByTopic } from "../utils/api";
import ArticleCardsSection from "./ArticlesComponents/ArticleCardsSection";
import ErrorSection from "./ErrorSection";

const SingleTopic = () => {
  const { topic: slug } = useParams();
  const [singleTopic, setSingleTopic] = useState([]);
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticlesByTopic(slug)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        getAllTopics().then((topicFromApi) => {
          setSingleTopic(topicFromApi);
        });
      })
      .catch((err) => {
        if (err.response.status === 404) setErr(err.response.data.msg);
        else if (err.response.status === 400)
          setErr("Invalid input. Please check the article id...");
        else setErr("Something has gone wrong...");
      });
  }, [slug]);

  return (
    <main className="SingleTopic">
      {!!err ? (
        <ErrorSection err={err} />
      ) : (
        <>
          <h1 className="single-topic-title">{singleTopic.slug}</h1>
          <h2 className="single-topic-description">
            {singleTopic.description}
          </h2>
          <ArticleCardsSection articles={articles} />
        </>
      )}
    </main>
  );
};
export default SingleTopic;
