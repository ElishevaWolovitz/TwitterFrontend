import { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import CreateNewButton from '../../components/Button/CreateNewButton';
import CreateNewModal from '../../components/Modal/CreateNewModal';
import ShmoozerCreateNewModal from '../../structures/Modals/ShmoozerCreateNewModal';
import type { ShmoozerPageProps } from './types';
import type { ShmoozerType } from '../../types/shmoozer.types';
import { printShmoozer, createNewShmoozer } from './functions';


const ShmoozersPage = ({ api }: ShmoozerPageProps) => {
  //State defintions
  const [shmoozers, setShmoozers] = useState<ShmoozerType[]>([]);
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  
  //Fetch shmoozers from API
  useEffect(() => {
    api.get('/shmoozers').then((res) => {
        setShmoozers(res.data.data)
    })
  }, [api]); 

  //Helper functions that need to be defined in the component scope
  const handleCreateNewShmoozer = (shmoozerDataToCreate: ShmoozerType) => {
    createNewShmoozer(shmoozerDataToCreate, api, setShmoozers);
  }

  const handleCreateNewClick = () => {
      setOpenCreateNewModal(true);
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <h1>Shmoozers Page</h1>
      <List 
        items={shmoozers}
        printItem={printShmoozer}
      />
      <CreateNewButton 
        onClick={handleCreateNewClick}
      />
      {openCreateNewModal && (
        <CreateNewModal
          setOpenModal={setOpenCreateNewModal}
          createNewItem={handleCreateNewShmoozer}
          children={ShmoozerCreateNewModal}
        />
      )}

    </>
  )
}

export { ShmoozersPage }
