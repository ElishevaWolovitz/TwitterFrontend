import { useState, useEffect } from 'react';
import axios from "axios";
import type { ShmoozerType } from './types/shmoozer.type';


const api = axios.create({baseURL: `http://localhost:3000`});
function App() {
  const [shmoozers, setUsers] = useState<ShmoozerType[]>([]);

  const fetchUsers = () => {
    api.get('/shmoozers')
    .then((res) => {
      console.log("res", res)
      setUsers(res.data.data);
    });
  };
  useEffect(() => {
    console.log("shmoozers", shmoozers)
    console.log("data", shmoozers.map((shmoozer) => {return shmoozer}))
  }, [shmoozers]);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Users</h1>
      <button onClick={fetchUsers}>Load shmoozers</button>
      <ul>
        {shmoozers.map((shmoozer, index) => (
          <li key={shmoozer._id || index}>
            <h2>{shmoozer.shmoozerName}</h2>
            <p>{shmoozer.displayName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
