import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getSingleTopic } from "../utils/api";
import { Link } from "react-router-dom";

const SingleTopic = () => {
  const { slug } = useParams();
  const [singleTopic, setSingleTopic] = useState([]);
  const [articles, setArticles] = useState([]);
  return (
    <main className="SingleTopic">
      <h1>Related Articles</h1>
    </main>
  );
};
export default SingleTopic;
