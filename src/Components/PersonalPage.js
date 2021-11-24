import { userContext } from "../Contexts/userContext";
import { useContext } from "react";
import SingleUser from "./SingleUser";

const PersonalPage = () => {
  const { currentUser } = useContext(userContext);
  return (
    <main className="PersonalPage">
      <h1>Hello {currentUser.name}</h1>
      <SingleUser />
    </main>
  );
};
export default PersonalPage;
