import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../Contexts/userContext";
import { deleteSingleComment } from "../../utils/api";
import { convertDate } from "../../utils/utils";
import CommentVoter from "../CommentsComponents/CommentVoter";

const CommentsInArticle = ({ comments, setComments }) => {
  const { currentUser, isLoggedIn } = useContext(userContext);
  const [err, setErr] = useState(null);

  return (
    <div className="CommentsInArticle">
      <section className="comments-by-article">
        <ul className="comment-cards">
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comment-card">
                <span key={`${comment.comment_id}_author`}>
                  {comment.author}
                </span>
                <span
                  key={`${comment.comment_id}_created_at`}
                  className="comment-created-at"
                >
                  {convertDate(comment.created_at)}
                </span>
                <p key={`${comment.comment_id}_body`} className="comment-body">
                  {comment.body}
                </p>
                <CommentVoter
                  comment_id={comment.comment_id}
                  votes={comment.votes}
                />
                {!isLoggedIn ? null : currentUser.username !==
                  comment.author ? null : (
                  <>
                    <button
                      key={`${comment.comment_id}_deleteButton`}
                      className="comment-delete-button"
                      onClick={() => {
                        deleteSingleComment(comment.comment_id)
                          .then(() => {
                            setComments((preComments) => {
                              const newPreComments = [...preComments];
                              const newComments = newPreComments.filter(
                                (preComment) =>
                                  preComment.comment_id !== comment.comment_id
                              );
                              return newComments;
                            });
                          })
                          .then(() => {
                            alert("The comment has been deleted!");
                          })
                          .catch((err) => {
                            if (err.response.status === 404)
                              setErr(err.response.data.msg);
                            else setErr("Something has gone wrong...");
                          });
                      }}
                    >
                      Delete
                    </button>
                    {!!err ? (
                      <span className="inline-err-msg">{err}</span>
                    ) : null}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default CommentsInArticle;
