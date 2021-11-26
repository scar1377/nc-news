import { useContext } from "react/cjs/react.development";
import { userContext } from "../../Contexts/userContext";
import { deleteSingleComment } from "../../utils/api";
import CommentVoter from "../CommentsComponents/CommentVoter";

const CommentsInArticle = ({ comments, posted, setPosted, newComment }) => {
  const { currentUser, isLoggedIn } = useContext(userContext);

  return (
    <div className="CommentsInArticle">
      <section className="comments-by-article">
        {posted === true ? (
          <div>
            {setPosted(false)}
            <ul className="comment-card">
              <li className="comment_author">
                <span>{currentUser.username}</span>
                {/* <span className="comment-created-at">{currentUser.created_at}</span> */}
                <p className="comment-body">{newComment}</p>
                <CommentVoter comment_id={0} votes={0} />
              </li>
            </ul>
            ;
          </div>
        ) : null}
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
                <CommentVoter
                  comment_id={comment.comment_id}
                  votes={comment.votes}
                />
                {currentUser.username === comment.author && !!isLoggedIn ? (
                  <button
                    key={`${comment.comment_id}_deleteButton`}
                    className="comment-delete-button"
                    onClick={() => {
                      deleteSingleComment(comment.comment_id).catch((err) => {
                        console.log(
                          err,
                          "<<<<<<<<err in CommentsInArticle >>>>>>deleteSingleComment"
                        );
                      });
                      alert("The comment has been deleted!");
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          );
        })}
      </section>
    </div>
  );
};
export default CommentsInArticle;
