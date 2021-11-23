import { getAllTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getAllTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);
  return (
    <main className="Topics">
      <h1>Topics</h1>
      {topics.map((topic) => {
        return (
          <ul>
            <li key={`${topic.slug}`} className="topic_slug">
              {topic.slug}
            </li>
            <li key={`${topic.slug}_description`} className="topic_description">
              {topic.description}
            </li>

            <button
              key={`${topic.slug}_articles`}
              className="topicRelatedArticles"
              // onClick={() => {
              // 	updateKudos(user.avatar_url, user.username, 1).then(() => {
              // 		setUsers(users);
              // 	});
              // }}
            >
              Related Articles
            </button>
          </ul>
        );
      })}
    </main>
  );
};
export default Topics;
