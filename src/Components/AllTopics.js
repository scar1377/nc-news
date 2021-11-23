import { getAllTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Topics = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getAllTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);
  return (
    <main className="Topics">
      <h1>Topics</h1>
      <ul>
        {topics.map((topic) => {
          return (
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
          );
        })}
      </ul>
    </main>
  );
};
export default Topics;
