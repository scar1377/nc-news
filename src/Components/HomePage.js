import Articles from "./AllArticles";

const HomePage = () => {
  const isHome = true;
  return (
    <div className="Home" id="homepage">
      <h1>Welcome to NC news!</h1>
      <Articles isHome={isHome} />
    </div>
  );
};
export default HomePage;
