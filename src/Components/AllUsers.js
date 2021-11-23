import { getAllUsers } from "../utils/api";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { userContext } from "../Contexts/userContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Users = () => {
  const { username, setUsername } = useContext(userContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);
  return (
    <main className="Users">
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={`${user.username}`} className="user-container">
              <Link to={`/users/${user.username}`} className="go-to user-page">
                <p>
                  <img
                    key={`${user.username}_avatar`}
                    className="user-avatar"
                    src={user.avatar_url}
                    alt={user.name}
                  />
                </p>
                <h2 className="user-name">{user.name}</h2>
                {/* <div className="middle">Go to their page</div> */}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Users;
