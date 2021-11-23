import { getAllUsers } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);
  return (
    <main className="Users">
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <ul>
            <img
              key={`${user.username}_avatar`}
              className="user_avatar"
              src={user.avatar_url}
              alt={user.name}
            />
            <li key={`${user.username}_name`} className="user_name">
              {user.name}
            </li>
            <button
              key={`${user.user_id}_view_user`}
              // onClick={() => {
              // 	updateKudos(user.avatar_url, user.username, 1).then(() => {
              // 		setUsers(users);
              // 	});
              // }}
            >
              Go to their page
            </button>
          </ul>
        );
      })}
    </main>
  );
};
export default Users;
