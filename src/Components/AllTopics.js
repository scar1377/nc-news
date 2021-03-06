import { getAllTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ErrorSection from "./ErrorSection";

const Topics = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getAllTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((err) => {
        setErr("Something has gone wrong...");
      });
  }, []);
  return (
    <main className="Topics">
      <h1>Topics</h1>
      {!!err ? (
        <ErrorSection err={err} />
      ) : (
        <>
          <section className="topic-card-section">
            <ul className="topic-cards">
              {topics.map((topic) => {
                return (
                  <li key={`${topic.slug}`} className="topic-card">
                    <h2 className="topics-title">{topic.slug}</h2>
                    <p>{topic.description}</p>
                    <button
                      className="goto topic-related-articles"
                      onClick={() => {
                        navigate(`/topics/${topic.slug}`);
                      }}
                    >
                      Related Articles
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </main>
  );
};
export default Topics;
