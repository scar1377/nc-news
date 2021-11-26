import { useContext } from "react/cjs/react.development";
import { userContext } from "../../Contexts/userContext";

const NavBeforeLogin = () => {
  const { currentUsername, setCurrentUsername } = useContext(userContext);
  return (
    <div className="NavBeforeLogin">
      <form
        className="Nav-login"
        onSubmit={(e) => {
          e.preventDefault();
          if (currentUsername === "" && currentUsername === undefined) {
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
            setCurrentUsername(e.target.value);
          }}
        />
        <input className="Nav-login" type="submit" value="Login" />
      </form>
    </div>
  );
};
export default NavBeforeLogin;
