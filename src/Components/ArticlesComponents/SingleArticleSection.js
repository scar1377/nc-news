import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { userContext } from "../../Contexts/userContext";
import { postCommentByArticle } from "../../utils/api";
const SingleArticleSection = ({
  singleArticle,
  setPosted,
  newComment,
  setNewComment,
}) => {
  const { currentUser, isLoggedIn } = useContext(userContext);
  return (
    <div className="SingleArticleSection">
      <section className="single-article-section">
        <h1>{singleArticle.title}</h1>
        <span>{singleArticle.created_at}</span>
        <span>{singleArticle.comment_count}</span>
        <Link to={`/users/${singleArticle.author}`}>
          <p>{singleArticle.author}</p>
        </Link>
        <Link to={`/topics/${singleArticle.topic}`}>
          <p>{singleArticle.topic}</p>
        </Link>
        <p>{singleArticle.body}</p>
        {!!isLoggedIn ? (
          <form
            className="post-comment-form"
            onSubmit={(e) => {
              e.preventDefault();
              setPosted(true);
              postCommentByArticle(
                singleArticle.article_id,
                currentUser.username,
                newComment
              ).catch((err) => {
                console.log(
                  err,
                  "<<<<<<<<err in SingleArticleSection >>>>>>postCommentsByArticle"
                );
              });
            }}
          >
            <label htmlFor="comment-box">Leave a comment</label>
            <br></br>
            <textarea
              id="comment-box"
              name="comment-box"
              rows="4"
              cols="50"
              placeholder="Less than 200 letters"
              onChange={(e) => {
                setNewComment(e.target.value);
              }}
            ></textarea>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};
export default SingleArticleSection;
