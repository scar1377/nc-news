import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleArticle,
  getCommentsByArticle,
  updateCommentVotes,
} from "../utils/api";
import useCount from "../Hooks.js/useCount";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const { count, setCount, incCount, deCount } = useCount();
  let vote = 0;

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
      <h1>{singleArticle.title}</h1>
      <span>{singleArticle.created_at}</span>
      <span>{singleArticle.comment_count}</span>
      <p>{singleArticle.author}</p>
      <p>{singleArticle.topic}</p>
      <p>{singleArticle.body}</p>
      <section className="comments-by-article">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment_author">
              <span key={`${comment.comment_id}_author`}>{comment.author}</span>
              <span
                key={`${comment.comment_id}_created_at`}
                className="comment-created-at"
              >
                {comment.created_at}
              </span>
              <p key={`${comment.comment_id}_body`} className="comment-body">
                {comment.body}
              </p>
              <p
                key={`${comment.comment_id}_votes`}
                className="votes comment-votes"
              >
                {comment.votes}
              </p>

              <button
                key={`${comment.comment_id}_vote_up_button`}
                className="comment-vote-button"
                onClick={() => {
                  incCount();
                  updateCommentVotes(comment.comment_id, 1);
                }}
              >
                👍
              </button>
              <button
                key={`${comment.comment_id}_vote_down_button`}
                className="comment-vote-button"
                onClick={() => {
                  deCount();
                  updateCommentVotes(comment.comment_id, 11);
                }}
              >
                👎
              </button>
              <span>{comment.votes + count}</span>
            </li>
          );
        })}
      </section>
    </main>
  );
};
export default SingleArticle;
