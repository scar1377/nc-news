import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <div className="LoginSection">
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
    </div>
  );
};
export default NavLink;
