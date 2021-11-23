import { Link } from "react-router-dom";
import { userContext } from "../Contexts/userContext";
import { useContext } from "react";
import { getSingleUser } from "../utils/api";
import { useNavigate } from "react-router";
const Nav = () => {
  const navigate = useNavigate();
  const { setUsername } = useContext(userContext);
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
          <input
            className="Nav-login"
            placeholder="username"
            type="text"
            id="usernameLogin"
            onChange={(e) => {
              usernameOnChange = e.target.value;
            }}
          />
          <input className="Nav-login" type="submit" value="Login" />
        </form>
      </Link>
    </nav>
  );
};
export default Nav;
