import { getAllUsers } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then((usersFromApi) => {
        setUsers(usersFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "<<<<<<<<err in AllUsers >>>>>>getAllUsers");
      });
  }, []);
  if (isLoading === true) {
    return (
      <main className="Users">
        <h1>Users</h1>
        <img
          className="is-loading-img"
          src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
          alt="Loading"
        />
        <h2 className="is-loading">On the way...</h2>
      </main>
    );
  }
  return (
    <main className="Users">
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <ul key={`${user.username}ul`}>
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
              </Link>
            </li>
          </ul>
        );
      })}
    </main>
  );
};
export default Users;
