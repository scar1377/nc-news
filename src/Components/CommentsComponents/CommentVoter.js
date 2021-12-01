import { useState } from "react";
import useCount from "../../Hooks/useCount";
import { updateCommentVotes } from "../../utils/api";
const CommentVoter = ({ comment_id, votes }) => {
  const { count, incCount, deCount } = useCount();
  const [err, setErr] = useState(null);
  const [oneClick, setOneClick] = useState(false);
  return (
    <section className="Voter">
      <button
        key={`${comment_id}_vote_up_button`}
        className="vote-button comment-vote-button"
        onClick={() => {
          if (!oneClick) {
            incCount();
            setOneClick(true);
          }
          updateCommentVotes(comment_id, 1).catch((err) => {
            setErr("Something has gone wrong...");
          });
        }}
      >
        <i className="far fa-thumbs-up"></i>
      </button>
      <span> {votes + count} </span>
      <button
        key={`${comment_id}_vote_down_button`}
        className="vote-button comment-vote-button"
        onClick={() => {
          if (!oneClick) {
            deCount();
            setOneClick(true);
          }

          updateCommentVotes(comment_id, -1).catch((err) => {
            setErr("Something has gone wrong...");
          });
        }}
      >
        <i className="far fa-thumbs-down"></i>
      </button>
      {!!err ? <span className="inline-err-msg">{err}</span> : null}
    </section>
  );
};
export default CommentVoter;
