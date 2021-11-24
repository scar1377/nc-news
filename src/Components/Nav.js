import { Link } from "react-router-dom";
import { userContext } from "../Contexts/userContext";
import { useContext } from "react";
import { useState } from "react";
import { getSingleUser } from "../utils/api";
import { useNavigate } from "react-router";
import { useEffect } from "react/cjs/react.development";
const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [thisUsername, setThisUsername] = useState();
  const { setCurrentUser } = useContext(userContext);
  let usernameOnChange = "";

  // let personalInfo = "";
  // if (user.name) {
  //   personalInfo = `Hello ${user.name}`;
  // }
  useEffect(() => {
    setIsLoggedIn(false);
    getSingleUser(thisUsername).then((userFromApi) => {
      if (thisUsername === undefined || thisUsername === "") {
        setIsLoggedIn(false);
      } else {
        setUser(userFromApi);
        setCurrentUser(userFromApi);
        setIsLoggedIn(true);
      }
    });
    // .catch((err) => {
    //   alert("User doesn't exist");
    //   setIsLoggedIn(false);
    // });
  }, [thisUsername]);

  if (isLoggedIn) {
    return (
      <nav className="Nav">
        <section className="Nav-link-section">
          <Link to="/articles" className="Nav-link">
            <span>Articles</span>
          </Link>
          <Link to="/topics" className="Nav-link">
            <span>Topics</span>
          </Link>
          <Link to="/users" className="Nav-link">
            <span>Users</span>
          </Link>
        </section>
        <section className="Nav-login-info">
          <Link to="/my_page" className="go-to user-page">
            <img
              className="Nav-login-img"
              src={user.avatar_url}
              alt={user.name}
            />
          </Link>
        </section>
      </nav>
    );
  }

  return (
    <nav className="Nav">
      <section className="Nav-link-section">
        <Link to="/articles" className="Nav-link">
          <span>Articles</span>
        </Link>
        <Link to="/topics" className="Nav-link">
          <span>Topics</span>
        </Link>
        <Link to="/users" className="Nav-link">
          <span>Users</span>
        </Link>
      </section>
      <form
        className="Nav-login"
        onSubmit={(e) => {
          e.preventDefault();

          if (usernameOnChange !== "" && usernameOnChange !== undefined) {
            setThisUsername(usernameOnChange);
            // getSingleUser(usernameOnChange).then(() => {
            //   setThisUsername(usernameOnChange);
            // });
            //   .then((userFromApi) => {
            //     if (thisUsername === undefined || thisUsername === "") {
            //     } else {
            //       console.log(userFromApi, "<<<<<<<<<<<<<<<<<userFromApi");
            //       setCurrentUser(userFromApi);
            //       setIsLoggedIn(true);
            //       console.log(currentUser, "<<<<<<currentUser");
            //     }
            //   })
          } else {
            alert("Please log into your account");
          }
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
        {/* <Link to="/my_account" className="Nav-link"> */}
        <input className="Nav-login" type="submit" value="Login" />
        {/* </Link> */}
      </form>
    </nav>
  );
};
export default Nav;
