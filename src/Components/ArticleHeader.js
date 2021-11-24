const ArticleHeader = ({ setAuthor, setSortBy }) => {
  let authorOnChange = "";
  return (
    <div className="ArticleHeader">
      <h1 key="articles-h1">Articles</h1>
      <section className="sort-bar">
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            setAuthor(authorOnChange);
          }}
        >
          <input
            type="text"
            className="search-bar"
            placeholder="Please enter the author"
            onChange={(e) => {
              authorOnChange = e.target.value;
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
      </section>
    </div>
  );
};
export default ArticleHeader;
