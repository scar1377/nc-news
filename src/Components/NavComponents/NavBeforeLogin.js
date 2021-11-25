const NavBeforeLogin = ({ setThisUsername }) => {
  let usernameOnChange = "";
  return (
    <div className="NavBeforeLogin">
      <form
        className="Nav-login"
        onSubmit={(e) => {
          e.preventDefault();

          if (usernameOnChange !== "" && usernameOnChange !== undefined) {
            setThisUsername(usernameOnChange);
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
    </div>
  );
};
export default NavBeforeLogin;
