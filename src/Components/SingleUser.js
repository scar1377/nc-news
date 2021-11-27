import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getSingleUser } from "../utils/api";
import ArticleCardsSection from "./ArticlesComponents/ArticleCardsSection";

const SingleUser = ({ currentUser }) => {
  const { username } = useParams();
  const [singleUser, setSingleUser] = useState([]);
  const [articles, setArticles] = useState([]);
  const [thisUsername, setThisUsername] = useState(username);
  const [err, setErr] = useState(null);

  //let thisUsername = username;
  useEffect(() => {
    if (!!currentUser) setThisUsername(currentUser.username);
    getSingleUser(thisUsername)
      .then((userFromApi) => {
        setSingleUser(userFromApi);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setErr("User does not exist...");
        } else {
          setErr("Something has gone wrong...");
        }
      });
  }, [thisUsername, currentUser]);

  useEffect(() => {
    getAllArticles()
      .then((articlesFromApi) => {
        const articlesByUser = articlesFromApi.filter(
          (article) => article.author === thisUsername
        );
        setArticles(articlesByUser);
      })
      .catch((err) => {
        console.log(
          err,
          "<<<<<<<<<<<<<err in SingleUser>>>>>>>>>getAllArticles"
        );
      });
  }, [thisUsername]);

  return (
    <main className="SingleUser">
      <h1>{singleUser.name}</h1>
      <img
        className="single-user-avatar"
        src={singleUser.avatar_url}
        alt={singleUser.name}
      />
      <ArticleCardsSection articles={articles} />
    </main>
  );
};
export default SingleUser;
