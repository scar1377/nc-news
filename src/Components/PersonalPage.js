import { userContext } from "../Contexts/userContext";
import { useContext } from "react";
import SingleUser from "./SingleUser";
import { useNavigate } from "react-router";

const PersonalPage = () => {
  const { currentUser, isLoggedIn, setIsLoggedIn } = useContext(userContext);
  const navigate = useNavigate();
  return (
    <main className="PersonalPage">
      {!isLoggedIn && !currentUser ? (
        <div className="false">
          <h1>Hello! Please log in to your account!</h1>
        </div>
      ) : (
        <div className="true">
          <h1>Hello {currentUser.name}</h1>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              navigate("/");
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
