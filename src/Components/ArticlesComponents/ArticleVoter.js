import useCount from "../../Hooks/useCount";
import { updateArticleVotes } from "../../utils/api";
import { useState } from "react";

const ArticleVoter = ({ article_id, votes }) => {
  const { count, incCount, deCount } = useCount();
  const [err, setErr] = useState(null);
  const [oneClick, setOneClick] = useState(false);
  return (
    <>
      <section className="Voter">
        <button
          key={`${article_id}_vote_up_button`}
          className="vote-button article-vote-button"
          onClick={() => {
            if (!oneClick) {
              incCount();
              setOneClick(true);
            }

            updateArticleVotes(article_id, 1).catch((err) => {
              setErr("Something has gone wrong...");
            });
          }}
        >
          <i className="far fa-thumbs-up"></i>
        </button>
        <span> {votes + count} </span>
        <button
          key={`${article_id}_vote_down_button`}
          className="vote-button article-vote-button"
          onClick={() => {
            if (!oneClick) {
              deCount();
              setOneClick(true);
            }
            updateArticleVotes(article_id, -1).catch((err) => {
              setErr("Something has gone wrong...");
            });
          }}
        >
          <i className="far fa-thumbs-down"></i>
        </button>
        {!!err ? <span className="inline-err-msg">{err}</span> : null}
      </section>
    </>
  );
};

export default ArticleVoter;
