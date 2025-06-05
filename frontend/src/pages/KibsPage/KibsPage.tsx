import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import { printKib, editKib, deleteKib, filterKibs } from './functions';
import type { KibPageProps, KibType } from './types';
import { useState, useEffect } from 'react';


const KibsPage = ({api}: KibPageProps) => {
  const [kibs, setKibs] = useState<KibType[]>([]);
  //change this .then and no unnamed functions
  useEffect(() => {
    api.get('/kibs').then((res) => {
      setKibs(res.data.data);
    });
  }, [api]);
  const handleDeleteKib = (kib: KibType) => {
    deleteKib(kib, api, setKibs);
  };
  return (
    <>
      <Navbar />
      <h1>Kibs Page</h1>
      <SearchBar 
        items={kibs}
        filterItems={filterKibs}
        printItem={printKib}
        editItem={editKib}
        deleteItem={handleDeleteKib}
        />
    </>
  )
}

export { KibsPage }