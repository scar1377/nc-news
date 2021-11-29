import { useContext } from "react";
import { userContext } from "../../Contexts/userContext";

const NavBeforeLogin = () => {
  const { setCurrentUsername } = useContext(userContext);
  return (
    <div className="NavBeforeLogin">
      <select
        className="Nav-login"
        defaultValue={"default"}
        onChange={(e) => {
          e.preventDefault();
          setCurrentUsername(e.target.value);
        }}
      >
        <option key="default_user" value="default" disabled>
          Please choose a user to login
        </option>
        <option key="tickle122">tickle122</option>
        <option key="grumpy19">grumpy19</option>
        <option key="happyamy2016">happyamy2016</option>
        <option key="cooljmessy">cooljmessy</option>
        <option key="weegembump">weegembump</option>
        <option key="jessjelly">jessjelly</option>
      </select>
    </div>
  );
};
export default NavBeforeLogin;
