import { useState } from "react";
import useCount from "../../Hooks/useCount";
import { updateCommentVotes } from "../../utils/api";
const CommentVoter = ({ comment_id, votes }) => {
  const { count, incCount, deCount } = useCount();
  const [err, setErr] = useState(null);
  const [oneClick, setOneClick] = useState(false);
  const [votedUp, setVotedUp] = useState(false);
  const [votedDown, setVotedDown] = useState(false);
  return (
    <section className="Voter">
      <button
        key={`${comment_id}_vote_up_button`}
        className="vote-button comment-vote-button"
        onClick={() => {
          if (!oneClick) {
            setVotedUp(false);
            incCount();
            setOneClick(true);
            setVotedUp(true);
          }
          updateCommentVotes(comment_id, 1).catch((err) => {
            setErr("Something has gone wrong...");
          });
        }}
      >
        <i
          className={
            !votedUp ? "far fa-thumbs-up" : "voted-up far fa-thumbs-up"
          }
        ></i>
      </button>
      <span> {votes + count} </span>
      <button
        key={`${comment_id}_vote_down_button`}
        className="vote-button comment-vote-button"
        onClick={() => {
          if (!oneClick) {
            setVotedDown(false);
            deCount();
            setOneClick(true);
            setVotedDown(true);
          }

          updateCommentVotes(comment_id, -1).catch((err) => {
            setErr("Something has gone wrong...");
          });
        }}
      >
        <i
          className={
            !votedDown ? "far fa-thumbs-down" : "voted-down far fa-thumbs-down"
          }
        ></i>
      </button>
      {!!err ? <span className="inline-err-msg">{err}</span> : null}
    </section>
  );
};
export default CommentVoter;
