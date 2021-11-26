import { userContext } from "../Contexts/userContext";
import { useContext } from "react";
import { useState } from "react";
import { getSingleUser } from "../utils/api";
import { useEffect } from "react/cjs/react.development";
import NavLink from "./NavComponents/NavLink";
import NavAfterLogin from "./NavComponents/NavAfterLogin";
import NavBeforeLogin from "./NavComponents/NavBeforeLogin";

const Nav = () => {
  const [err, setErr] = useState(null);
  const { isLoggedIn, setIsLoggedIn, setCurrentUser, currentUsername } =
    useContext(userContext);

  useEffect(() => {
    setIsLoggedIn(false);
    getSingleUser(currentUsername)
      .then((userFromApi) => {
        if (currentUsername === undefined || currentUsername === "") {
          setIsLoggedIn(false);
        } else {
          setCurrentUser(userFromApi);
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setErr("error!");
        console.dir(err);
        if (err.response.status === 404) {
          setErr("User does not exist. Please sign in again!");
        } else {
          setErr("Something has gone wrong...");
        }
      });
  }, [currentUsername]);

  return (
    <nav className="Nav">
      <NavLink />
      {isLoggedIn ? (
        <NavAfterLogin />
      ) : err ? (
        <>
          <span className="err-message">{err}</span>
          <NavBeforeLogin setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <NavBeforeLogin setIsLoggedIn={setIsLoggedIn} />
      )}
    </nav>
  );
};
export default Nav;
