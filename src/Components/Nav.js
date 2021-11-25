import { Link } from "react-router-dom";
import { userContext } from "../Contexts/userContext";
import { useContext } from "react";
import { useState } from "react";
import { getSingleUser } from "../utils/api";
import { useNavigate } from "react-router";
import { useEffect } from "react/cjs/react.development";
import NavLink from "./NavComponents/NavLink";
import NavAfterLogin from "./NavComponents/NavAfterLogin";
import NavBeforeLogin from "./NavComponents/NavBeforeLogin";

const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [thisUsername, setThisUsername] = useState();
  const { setCurrentUser } = useContext(userContext);

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
  }, [thisUsername]);

  return (
    <nav className="Nav">
      <NavLink />
      {isLoggedIn ? (
        <NavAfterLogin user={user} />
      ) : (
        <NavBeforeLogin setThisUsername={setThisUsername} />
      )}
    </nav>
  );
};
export default Nav;
