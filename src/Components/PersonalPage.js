import { userContext } from "../Contexts/userContext";
import { useContext, isLoggedIn } from "react";
import SingleUser from "./SingleUser";
import { useNavigate } from "react-router";

const PersonalPage = () => {
  const { currentUser, setIsLoggedIn } = useContext(userContext);
  const navigate = useNavigate();
  return (
    <main className="PersonalPage">
      {isLoggedIn === false || !currentUser ? (
        <div className="false">
          <h1>Hello! Please log in to your account!</h1>
        </div>
      ) : (
        <div className="true">
          <h1>Hello {currentUser.name}</h1>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              navigate("./my_page");
            }}
            className="log-out-button"
          >
            Log Out
          </button>
          <SingleUser currentUser={currentUser} />
        </div>
      )}
    </main>
  );
};
export default PersonalPage;
