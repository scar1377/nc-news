import useCount from "../Hooks/useCount";
import { updateArticleVotes } from "../utils/api";
const ArticleVoter = ({ article_id, votes }) => {
  const { count, incCount, deCount } = useCount();
  return (
    <section className="Voter">
      <button
        key={`${article_id}_vote_up_button`}
        className="article-vote-button"
        onClick={() => {
          incCount();
          updateArticleVotes(article_id, 1);
        }}
      >
        👍
      </button>
      <button
        key={`${article_id}_vote_down_button`}
        className="article-vote-button"
        onClick={() => {
          deCount();
          updateArticleVotes(article_id, -1);
        }}
      >
        👎
      </button>
      <span>{votes + count}</span>
    </section>
  );
};

export default ArticleVoter;
