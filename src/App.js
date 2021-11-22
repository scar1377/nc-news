import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./Contexts/UserContext";
import { useContext } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Articles from "./Components/AllArticles";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/AllTopics";
import CommentsByArticle from "./Components/CommentsByArticle";
import SingleComment from "./Components/SingleComment";
import Users from "./Components/AllUsers";
import SingleUser from "./Components/SingleUser";
import PersonalPage from "./Components/PersonalPage";

function App() {
  const [username, setUsername] = useState("");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ username, setUsername }}>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/topics" element={<Topics />} />
            <Route
              path="/articles/:article_id/comments"
              element={<CommentsByArticle />}
            />
            <Route
              path="/articles/:article_id/comments/:comment_id"
              element={<SingleComment />}
            />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:username" element={<SingleUser />} />
            <Route path="/my_account" element={<PersonalPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
