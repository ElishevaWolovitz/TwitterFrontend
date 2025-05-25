import { useState, useEffect } from 'react';
import axios from "axios";
import type { UserTypeFront } from './types/user.type';


const api = axios.create({baseURL: `http://localhost:3000`});
function App() {
  const [users, setUsers] = useState<UserTypeFront[]>([]);

  const fetchUsers = () => {
    api.get('/users')
    .then((res) => {
      console.log("res", res)
     // const data = Array.isArray(res.data) ? res.data : [res.data];

      setUsers(res.data.data);
    });
  };
  useEffect(() => {
    console.log("users", users)
    console.log("data", users.map((user) => {return user}))
  }, [users]);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Users</h1>
      <button onClick={fetchUsers}>Load users</button>
      <ul>
        {users.map((user, index) => (
          <li key={user._id || index}>
            <h2>{user.username}</h2>
            <p>{user.displayName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
