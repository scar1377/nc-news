import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getToHomePage } from "../utils/api";
import Articles from "./AllArticles";
import ErrorSection from "./ErrorSection";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
const Home = () => {
  const [err, setErr] = useState(null);
  const [greeting, setGreeting] = useState("Hello");
  const { home } = useParams();

  useEffect(() => {
    getToHomePage(home)
      .then(() => {
        setGreeting("Welcome to NC news!");
      })
      .catch((err) => {
        if (err.response.status === 404) setErr("Have you got lost?");
        else setErr("Something has gone wrong...");
      });
  });
  return (
    <main className="Home">
      {!!err ? (
        <>
          <ErrorSection err={err} />
          <Link to="/" className="Home-re-direct">
            <h2>Try again</h2>
          </Link>
        </>
      ) : (
        <>
          <h1>{greeting}</h1>
          <Articles />
        </>
      )}
    </main>
  );
};
export default Home;
