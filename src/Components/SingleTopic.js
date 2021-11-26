import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getSingleTopic } from "../utils/api";
import { Link } from "react-router-dom";

const SingleTopic = () => {
  const { topic: slug } = useParams();
  const [singleTopic, setSingleTopic] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log(slug, "<<<<<slug");
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
      <h1>{singleTopic.slug} Related Articles</h1>
      <p>{singleTopic.slug}</p>
      <p>{singleTopic.description}</p>
      <section className="article-card-section">
        {articles.map((article) => {
          return (
            <ul className="article-card">
              <li
                key={`${article.article_id}_by_topic`}
                className="article-by-topic"
              >
                <Link
                  to={`/articles/${article.article_id}`}
                  className="go-to article-page"
                >
                  <p key={`${article.article_id}_author_by_topic`}>
                    {article.author}
                  </p>
                  <p
                    key={`${article.article_id}_title_by_topic`}
                    className="article-title"
                  >
                    {article.title}
                  </p>
                  <p
                    key={`${article.article_id}_votes_by_topic`}
                    className="votes article-votes"
                  >
                    {article.votes}
                  </p>
                  <p
                    key={`${article.article_id}_created_at_by_topic`}
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
export default SingleTopic;
