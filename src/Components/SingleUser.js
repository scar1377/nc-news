import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getSingleUser } from "../utils/api";
import ArticleCardsSection from "./ArticlesComponents/ArticleCardsSection";
import ErrorSection from "./ErrorSection";

const SingleUser = ({ currentUser }) => {
  const { username } = useParams();
  const [singleUser, setSingleUser] = useState([]);
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);

  let thisUsername = username;
  useEffect(() => {
    if (!!currentUser) thisUsername = currentUser.username;
    getSingleUser(thisUsername)
      .then((userFromApi) => {
        setSingleUser(userFromApi);
        getAllArticles().then((articlesFromApi) => {
          const articlesByUser = articlesFromApi.filter(
            (article) => article.author === thisUsername
          );
          setArticles(articlesByUser);
        });
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setErr("User does not exist...");
        } else {
          setErr("Something has gone wrong...");
        }
      });
  }, [thisUsername, currentUser]);

  return (
    <main className="SingleUser">
      {!!err ? (
        <ErrorSection err={err} />
      ) : (
        <>
          <h1>{singleUser.name}</h1>
          <img
            className="single-user-avatar"
            src={singleUser.avatar_url}
            alt={singleUser.name}
          />
          <ArticleCardsSection articles={articles} />
        </>
      )}
    </main>
  );
};
export default SingleUser;
