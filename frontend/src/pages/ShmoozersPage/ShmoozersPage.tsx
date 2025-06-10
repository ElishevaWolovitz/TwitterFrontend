import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import { printShmoozer, createNewShmoozer } from './functions';
import type { ShmoozerPageProps } from './types';
import type { ShmoozerType } from '../../types/shmoozer.types';
import CreateNewButton from '../../components/Button/CreateNewButton';
import CreateNewModal from '../../components/Modal/CreateNewModal';
import ShmoozerCreateNewModal from '../../structures/Modals/ShmoozerCreateNewModal';


//Q:why did i have to make type for ShmoozerPageProp here instead of the api just being of type AxiosInstance? 
// (when i did it was an error in the App where i put shmoozerpage component)
const ShmoozersPage = ({ api }: ShmoozerPageProps) => {
  const [shmoozers, setShmoozers] = useState<ShmoozerType[]>([]);
  const [loading, setLoading] = useState(true)
  //change this .then and no unnamed functions
  useEffect(() => {
    api.get('/shmoozers').then((res) => {
      setTimeout(()=> {
        setShmoozers(res.data.data)
        setLoading(false);},2000);
    })
  }, [api]); 


  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);

  const handleCreateNewClick = () => {
      setOpenCreateNewModal(true);
  };
  const handleCreateNewShmoozer = (shmoozerDataToCreate: ShmoozerType) => {
    createNewShmoozer(shmoozerDataToCreate, api, setShmoozers);
  }
  return (
    <>
      <Navbar />
      <h1>Shmoozers Page</h1>
      <List 
        items={shmoozers}
        loading={loading} 
        printItem={printShmoozer}
      />
      <CreateNewButton 
        onClick={handleCreateNewClick}
        />
      <CreateNewModal
        openModal={openCreateNewModal}
        setOpenModal={setOpenCreateNewModal}
        createNewItem={handleCreateNewShmoozer}
        children={ShmoozerCreateNewModal}
      />

    </>
  )
}

export { ShmoozersPage }
