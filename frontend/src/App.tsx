import { useState } from 'react'
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

function App() {
  const [users, setUsers] = useState<{ _id: string, username: string, displayName: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = () => {
    setLoading(true);
    setError("");
    axios
      .get(`${baseUrl}/users`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users");
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Items</h1>
      <button onClick={fetchUsers}>Load users</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
