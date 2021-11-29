import { useState } from "react";

const ArticleHeader = ({ setAuthor, setSortBy }) => {
  const [authorOnChange, setAuthorOnChange] = useState();
  return (
    <div className="ArticleHeader">
      <section className="sort-bar">
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            setAuthor(authorOnChange);
          }}
        >
          <label htmlFor="search-bar"></label>
          <input
            type="text"
            id="search-bar"
            className="search-bar"
            placeholder="Please enter the author"
            onChange={(e) => {
              e.preventDefault();
              setAuthorOnChange(e.target.value);
            }}
          />
          <input type="submit" value="Search" />
        </form>
        <select
          className="sort-by"
          defaultValue={"default"}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option key="sort_by" value="default" disabled>
            sort
          </option>
          <option key="created_by">created_at</option>
          <option key="comment_count">comment_counts</option>
          <option key="votes">votes</option>
        </select>
        <hr className="long-hr-line" />
      </section>
    </div>
  );
};
export default ArticleHeader;
