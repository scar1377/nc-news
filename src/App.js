import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { userContext } from "./Contexts/userContext";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import Home from "./Components/Home";
import Articles from "./Components/AllArticles";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/AllTopics";
import SingleTopic from "./Components/SingleTopic";
import Users from "./Components/AllUsers";
import SingleUser from "./Components/SingleUser";
import PersonalPage from "./Components/PersonalPage";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentUsername, setCurrentUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <userContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          currentUsername,
          setCurrentUsername,
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:home" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topic" element={<SingleTopic />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:username" element={<SingleUser />} />
            <Route path="/my_page" element={<PersonalPage />} />
          </Routes>
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
