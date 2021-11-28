import { Link } from "react-router-dom";
import { useContext, useState } from "react/cjs/react.development";
import { userContext } from "../../Contexts/userContext";
import { postCommentByArticle } from "../../utils/api";

const SingleArticleSection = ({
  singleArticle,
  newComment,
  setNewComment,
  setComments,
}) => {
  const { currentUser, isLoggedIn } = useContext(userContext);
  const [err, setErr] = useState(null);

  return (
    <div className="SingleArticleSection">
      <section className="single-article-section">
        <h1>{singleArticle.title}</h1>
        <span>{singleArticle.created_at}</span>
        <span>{singleArticle.comment_count}</span>
        <Link
          to={`/users/${singleArticle.author}`}
          className="link-to-category"
        >
          <p>{singleArticle.author}</p>
        </Link>
        <Link
          to={`/topics/${singleArticle.topic}`}
          className="link-to-category"
        >
          <p>{singleArticle.topic}</p>
        </Link>
        <p className="article-text">{singleArticle.body}</p>
        {!!isLoggedIn ? (
          <>
            <form
              className="post-comment-form"
              onSubmit={(e) => {
                e.preventDefault();
                postCommentByArticle(
                  singleArticle.article_id,
                  currentUser.username,
                  newComment
                )
                  .then((comment) => {
                    setComments((preComments) => {
                      const newPreComments = [comment, ...preComments];
                      return newPreComments;
                    });
                  })
                  .catch((err) => {
                    if (err.response.status === 400)
                      setErr("Oops! Empty comment doesn't count...");
                  });
              }}
            >
              <label htmlFor="comment-box">Leave a comment</label>
              {!!err ? <span className="post-err-msg">{err}</span> : null}
              <br></br>
              <textarea
                id="comment-box"
                name="comment-box"
                rows="4"
                cols="50"
                placeholder="Less than 200 letters"
                onChange={(e) => {
                  e.preventDefault();
                  if (e.target.value !== "" || e.target.value !== undefined)
                    setNewComment(e.target.value);
                }}
              ></textarea>
              <br></br>
              <input type="submit" value="Submit" />
            </form>
          </>
        ) : null}
      </section>
    </div>
  );
};
export default SingleArticleSection;
