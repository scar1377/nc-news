import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  //   const { currantUser } = useContext(UserContext);
  //   if (currantUser.username) {
  //     return (
  //       <Link to="/my_account" className="Nav-link">
  //         <span>Hello, {currantUser.name}!</span>
  //       </Link>
  //     );
  //   }
  return (
    <div className="sign-in">
      <span className="greeting">Hello!</span>
      <button aria-expanded="false" aria-haspopup="true" id="USER_DROPDOWN_ID">
        Login
        <i class="icon icon-user"></i>
        <i class="icon icon-caret_down"></i>
      </button>
    </div>
  );
};
export default Login;
