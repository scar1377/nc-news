import Articles from "./AllArticles";

const HomePage = () => {
  return (
    <div className="Home" id="homepage">
      {/* <h1>Welcome to NC news!</h1>
      <h2>Articles</h2> */}
      <Articles className="at-home-articles" />
    </div>
  );
};
export default HomePage;
