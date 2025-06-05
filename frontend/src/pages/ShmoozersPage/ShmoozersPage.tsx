import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import { printShmoozer } from './functions';
import type { ShmoozerPageProps, ShmoozerType } from './types';


//Q:why did i have to make type for ShmoozerPageProp here instead of the api just being of type AxiosInstance? 
// (when i did it was an error in the App where i put shmoozerpage component)
const ShmoozersPage = ({ api }: ShmoozerPageProps) => {
  const [shmoozers, setShmoozers] = useState<ShmoozerType[]>([]);
  //change this .then and no unnamed functions
  useEffect(() => {
    api.get('/shmoozers').then((res) => {
      setShmoozers(res.data.data);
    });
  }, [api]); 
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
