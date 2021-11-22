import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { getSingleUser } from "../utils/api";
import { useNavigate } from "react-router";
const Nav = () => {
  const navigate = useNavigate();
  const { setUsername } = useContext(UserContext);
  let usernameOnChange = "";
  // let personalInfo = "";
  // if (user.name) {
  //   personalInfo = `Hello ${user.name}`;
  // }

  return (
    <nav className="Nav">
      <Link to="/articles" className="Nav-link">
        <span>Articles</span>
      </Link>
      <Link to="/topics" className="Nav-link">
        <span>Topics</span>
      </Link>
      <Link to="/users" className="Nav-link">
        <span>Users</span>
      </Link>
      <Link to="/my_account" className="Nav-link">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getSingleUser(usernameOnChange)
              .then((res) => {
                if (res.username === undefined) {
                  alert("Please log into your account");
                } else {
                  setUsername(res.username);
                }
              })
              .then((e) => {
                navigate(`/${usernameOnChange}`);
              });
          }}
        >
          <label htmlFor="usernameLogin">Username: </label>
          <input
            type="text"
            id="usernameLogin"
            onChange={(e) => {
              usernameOnChange = e.target.value;
            }}
          />
          <input type="submit" value="Login" />
        </form>
      </Link>
    </nav>
  );
};
export default Nav;
