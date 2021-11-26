import useCount from "../../Hooks/useCount";
import { updateCommentVotes } from "../../utils/api";
const CommentVoter = ({ comment_id, votes }) => {
  const { count, incCount, deCount } = useCount();
  return (
    <section className="Voter">
      <button
        key={`${comment_id}_vote_up_button`}
        className="comment-vote-button"
        onClick={() => {
          incCount();
          updateCommentVotes(comment_id, 1).catch((err) => {
            console.log(
              err,
              "<<<<<<<<err in CommentVoter >>>>>>updateCommentVotes"
            );
          });
        }}
      >
        👍
      </button>
      <button
        key={`${comment_id}_vote_down_button`}
        className="comment-vote-button"
        onClick={() => {
          deCount();
          updateCommentVotes(comment_id, -1).catch((err) => {
            console.log(
              err,
              "<<<<<<<<err in CommentVoter >>>>>>updateCommentVotes"
            );
          });
        }}
      >
        👎
      </button>
      <span>{votes + count}</span>
    </section>
  );
};
export default CommentVoter;
