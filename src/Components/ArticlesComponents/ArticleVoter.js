import useCount from "../../Hooks/useCount";
import { updateArticleVotes } from "../../utils/api";
import { useState } from "react";

const ArticleVoter = ({ article_id, votes }) => {
  const { count, incCount, deCount } = useCount();
  const [err, setErr] = useState(null);
  return (
    <>
      <section className="Voter">
        <button
          key={`${article_id}_vote_up_button`}
          className="article-vote-button"
          onClick={() => {
            incCount();
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
          className="article-vote-button"
          onClick={() => {
            deCount();
            updateArticleVotes(article_id, -1).catch((err) => {
              setErr("Something has gone wrong...");
            });
          }}
        >
          <i class="far fa-thumbs-down"></i>
        </button>
        {!!err ? <span className="inline-err-msg">{err}</span> : null}
      </section>
    </>
  );
};

export default ArticleVoter;
