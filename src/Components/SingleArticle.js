import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getCommentsByArticle } from "../utils/api";
import SingleArticleSection from "./ArticlesComponents/SingleArticleSection";
import CommentsInArticle from "./ArticlesComponents/CommentsInArticle";
import ErrorSection from "./ErrorSection";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState();
  const [err, setErr] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setSingleArticle(articleFromApi);
        getCommentsByArticle(article_id).then((commentsFromApi) => {
          setComments(commentsFromApi);
        });
      })
      .catch((err) => {
        if (err.response.status === 404) setErr(err.response.data.msg);
        else if (err.response.status === 400)
          setErr("Invalid input. Please check the article id...");
        else setErr("Something has gone wrong...");
      });
  }, [article_id]);

  return (
    <main className="SingleArticle">
      {!!err ? (
        <ErrorSection err={err} />
      ) : (
        <SingleArticleSection
          singleArticle={singleArticle}
          newComment={newComment}
          setNewComment={setNewComment}
          setComments={setComments}
        />
      )}
      <CommentsInArticle comments={comments} setComments={setComments} />
    </main>
  );
};
export default SingleArticle;
