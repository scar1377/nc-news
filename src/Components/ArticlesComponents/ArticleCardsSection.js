import ArticleVoter from "./ArticleVoter";
import { Link } from "react-router-dom";
import { convertDate } from "../../utils/utils";

const ArticleCardsSection = (prop) => {
  const { articles, isInAllArticle } = prop;

  return (
    <section className="article-card-section">
      <ul className="article-cards">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article-card">
              <Link
                to={`/articles/${article.article_id}`}
                className="go-to article-page"
              >
                <h2
                  key={`${article.article_id}_title`}
                  className="article-title"
                >
                  {article.title}
                </h2>
                <p key={`${article.article_id}_author`}>{article.author}</p>
                <p
                  key={`${article.article_id}_created_at`}
                  className="article-created-at"
                >
                  {convertDate(article.created_at)}
                </p>
                <p
                  key={`${article.article_id}_votes_by_user_number`}
                  className="comments-and-likes"
                >
                  {!!isInAllArticle ? null : (
                    <span
                      key={`${article.article_id}_votes_by_user`}
                      className="votes article-votes"
                    >
                      🤍 {article.votes}
                    </span>
                  )}
                  <span
                    key={`${article.article_id}_comment_counts_by_user`}
                    className="votes article-comments-count"
                  >
                    💬 {article.comment_counts}
                  </span>
                </p>
              </Link>
              <ArticleVoter
                article_id={article.article_id}
                votes={article.votes}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleCardsSection;
