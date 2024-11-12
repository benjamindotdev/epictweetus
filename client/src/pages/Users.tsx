import { useState, useEffect } from "react";
import { PageContainer } from "../components/PageContainer.tsx";
import axios from "axios";
import type { User } from "../../global.d.ts";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const clientUrl = import.meta.env.VITE_CLIENT_URL;

  useEffect(() => {
    const userFetch = async () => {
      const response = await axios.get("/users");
      setUsers(response.data);
    };
    userFetch();
  }, []);
  return (
    <PageContainer pageName="Users">
      {users ? (
        users.map((user: User) => {
          return (
            <Link to={`${clientUrl}/${user.username}`} key={user.id}>
              <h2>{user.username}</h2>
              <p>{user.email}</p>
            </Link>
          );
        })
      ) : (
        <p>No users found</p>
      )}
    </PageContainer>
  );
};

export default Users;
