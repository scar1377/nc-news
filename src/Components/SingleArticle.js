import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getCommentsByArticle } from "../utils/api";
import SingleArticleSection from "./ArticlesComponents/SingleArticleSection";
import CommentsInArticle from "./ArticlesComponents/CommentsInArticle";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState();

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setSingleArticle(articleFromApi);
      })
      .catch((err) => {
        console.log(err, "<<<<<<<<err in SingleArticle, getSingleArticle");
      });
  }, [article_id]);
  useEffect(() => {
    getCommentsByArticle(article_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
      })
      .catch((err) => {
        console.log(err, "<<<<<<<<err in SingleArticle, getCommentsByArticle");
      });
  }, [article_id]);
  return (
    <main className="SingleArticle">
      <SingleArticleSection
        singleArticle={singleArticle}
        newComment={newComment}
        setNewComment={setNewComment}
        setComments={setComments}
      />
      <CommentsInArticle comments={comments} setComments={setComments} />
    </main>
  );
};
export default SingleArticle;
