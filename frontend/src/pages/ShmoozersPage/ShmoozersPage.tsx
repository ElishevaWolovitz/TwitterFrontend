import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import { printShmoozer, createNewShmoozer } from './functions';
import type { ShmoozerPageProps } from './types';
import type { ShmoozerType } from '../../types/shmoozer.types';
import CreateNewButton from '../../components/Button/CreateNewButton';
import CreateNewModal from '../../components/Modal/CreateNewModal';
import ShmoozerCreateNewModal from '../../structures/Modals/ShmoozerCreateNewModal';
import { ToastContainer} from 'react-toastify';


const ShmoozersPage = ({ api }: ShmoozerPageProps) => {
  const [shmoozers, setShmoozers] = useState<ShmoozerType[]>([]);
  useEffect(() => {
    api.get('/shmoozers').then((res) => {
        setShmoozers(res.data.data)
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
