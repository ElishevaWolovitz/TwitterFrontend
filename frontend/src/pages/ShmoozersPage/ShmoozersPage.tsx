import { useState, useEffect } from 'react';
import type { AxiosInstance } from "axios";
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import { printShmoozer } from './functions';
import type { ShmoozerPageProps, ShmoozerType } from './types';


const fetchUsers = (api: AxiosInstance) => {
  api.get('/shmoozers')
};

//Q:why did i have to make type for ShmoozerPageProp here instead of the api just being of type AxiosInstance? 
// (when i did it was an error in the App where i put shmoozerpage component)
const ShmoozersPage = ({api}: ShmoozerPageProps) => {
  const [shmoozers, setUsers] = useState<ShmoozerType[]>([]);
  fetchUsers(api);
  useEffect(() => {
    console.log("shmoozers", shmoozers)
    console.log("data", shmoozers.map((shmoozer) => {return shmoozer}))
  }, [shmoozers]);
  return (
    <>
      <Navbar />
      <h1>Shmoozers Page</h1>
      <List 
        items={shmoozers}
        printItem={printShmoozer}
        />

    </>
  )
}

export { ShmoozersPage }
