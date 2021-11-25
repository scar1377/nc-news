import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getCommentsByArticle } from "../utils/api";
import CommentVoter from "./CommentsComponents/CommentVoter";
import SingleArticleSection from "./ArticlesComponents/SingleArticleSection";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleArticle(article_id).then((articleFromApi) => {
      setSingleArticle(articleFromApi);
    });
  }, [article_id]);
  useEffect(() => {
    getCommentsByArticle(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);
  return (
    <main className="SingleArticle">
      <SingleArticleSection singleArticle={singleArticle} />
      <section className="comments-by-article">
        {comments.map((comment) => {
          return (
            <ul key={`${comment.comment_id}ul`} className="comment-card">
              <li key={comment.comment_id} className="comment_author">
                <span key={`${comment.comment_id}_author`}>
                  {comment.author}
                </span>
                <span
                  key={`${comment.comment_id}_created_at`}
                  className="comment-created-at"
                >
                  {comment.created_at}
                </span>
                <p key={`${comment.comment_id}_body`} className="comment-body">
                  {comment.body}
                </p>
                {/* <p
                key={`${comment.comment_id}_votes`}
                className="votes comment-votes"
              >
                {comment.votes}
              </p> */}
                <CommentVoter
                  comment_id={comment.comment_id}
                  votes={comment.votes}
                />
              </li>
            </ul>
          );
        })}
      </section>
    </main>
  );
};
export default SingleArticle;
