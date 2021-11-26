import { getAllTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Topics = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getAllTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((err) => {
        console.log(err, "<<<<<<<<err in AllTopics >>>>>> getTopics");
      });
  }, []);
  return (
    <main className="Topics">
      <h1>Topics</h1>
      <section className="topic-card-section">
        {topics.map((topic) => {
          return (
            <ul key={`${topic.slug}ul`} className="topic-card">
              <li key={`${topic.slug}`} className="topic_slug">
                <p>{topic.slug}</p>
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
            </ul>
          );
        })}
      </section>
    </main>
  );
};
export default Topics;
