import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getSingleTopic } from "../utils/api";
import ArticleCardsSection from "./ArticlesComponents/ArticleCardsSection";

const SingleTopic = () => {
  const { topic: slug } = useParams();
  const [singleTopic, setSingleTopic] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getSingleTopic(slug)
      .then((topicFromApi) => {
        setSingleTopic(topicFromApi);
      })
      .catch((err) => {
        console.dir(err, "<<<<<<<<err in SingleTopic >>>>>>getSingleTopic");
      });
  }, [slug]);
  useEffect(() => {
    getAllArticles()
      .then((articlesFromApi) => {
        const articlesByTopic = articlesFromApi.filter(
          (article) => article.topic === slug
        );
        setArticles(articlesByTopic);
      })
      .catch((err) => {
        console.log(err, "<<<<<<<<err in SingleTopic >>>>>>getAllArticles");
      });
  }, [slug]);
  return (
    <main className="SingleTopic">
      <h1 className="single-topic-title">{singleTopic.slug}</h1>
      <h2 className="single-topic-description">{singleTopic.description}</h2>
      <ArticleCardsSection articles={articles} />
    </main>
  );
};
export default SingleTopic;
