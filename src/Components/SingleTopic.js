import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getSingleTopic } from "../utils/api";
import { Link } from "react-router-dom";

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
      <section className="article-card-section">
        {articles.map((article) => {
          return (
            <Link
              key={`${article.article_id}_by_topic_link`}
              to={`/articles/${article.article_id}`}
              className="go-to article-page"
            >
              <ul
                key={`${article.article_id}_by_topic_ul`}
                className="article-card"
              >
                <li
                  key={`${article.article_id}_by_topic`}
                  className="article-by-topic"
                >
                  <p
                    key={`${article.article_id}_author_by_topic`}
                    className="article-card-author"
                  >
                    {article.author}
                  </p>
                  <p
                    key={`${article.article_id}_title_by_topic`}
                    className="article-title"
                  >
                    {article.title}
                  </p>
                  <fieldset
                    key={`${article.article_id}_created_at_by_topic_fieldset`}
                    className="inline-wrap"
                  >
                    <span
                      key={`${article.article_id}_created_at_by_topic`}
                      className="article-created-at"
                    >
                      {article.created_at}
                    </span>
                    <p
                      key={`${article.article_id}_votes_by_topic_number`}
                      className="comments-and-likes"
                    >
                      <span
                        key={`${article.article_id}_votes_by_topic`}
                        className="votes article-votes"
                      >
                        🤍 {article.votes}
                      </span>
                      <span
                        key={`${article.article_id}_comment_counts_by_topic`}
                        className="votes article-comments-count"
                      >
                        💬 {article.comment_counts}
                      </span>
                    </p>
                  </fieldset>
                </li>
              </ul>
            </Link>
          );
        })}
      </section>
    </main>
  );
};
export default SingleTopic;
