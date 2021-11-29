import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../Contexts/userContext";
const NavAfterLogin = () => {
  const { currentUser } = useContext(userContext);
  return (
    <div className="NavAfterLogin">
      <section className="Nav-login-info">
        <Link to="/my_page" className="go-to user-page">
          <img
            className="Nav-login-img"
            src={currentUser.avatar_url}
            alt={currentUser.name}
          />
        </Link>
      </section>
    </div>
  );
};
export default NavAfterLogin;
