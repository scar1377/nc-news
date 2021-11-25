import { Link } from "react-router-dom";
const NavAfterLogin = ({ user }) => {
  return (
    <div className="NavAfterLogin">
      <section className="Nav-login-info">
        <Link to="/my_page" className="go-to user-page">
          <img
            className="Nav-login-img"
            src={user.avatar_url}
            alt={user.name}
          />
        </Link>
      </section>
    </div>
  );
};
export default NavAfterLogin;
