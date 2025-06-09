import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import { printKib, editKib, deleteKib, filterKibs, createNewKib } from './functions';
import type { KibPageProps } from './types';
import type { KibType } from '../../types/kib.types';
import { useState, useEffect } from 'react';
import KibEditModal from '../../ModalStructures/KibEditModal';
import CreateNewButton from '../../components/Button/CreateNewButton';
import KibCreateNewModal from '../../ModalStructures/KibCreateNewModal';
import CreateNewModal from '../../components/Modal/CreateNewModal';


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
  const handleEditKib = (kib: KibType) => {
    editKib(kib, api, setKibs)
  };
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);

  const handleCreateNewClick = () => {
      setOpenCreateNewModal(true);
  };
  const handleCreateNewItem = (kibDataToCreate: KibType) => {
    createNewKib(kibDataToCreate, api, setKibs);
  }
  return (
    <>
      <Navbar />
      <h1>Kibs Page</h1>
      <SearchBar 
        items={kibs}
        filterItems={filterKibs}
        printItem={printKib}
        editItem={handleEditKib}
        deleteItem={handleDeleteKib}
        ModalChildrenComp={KibEditModal}
        />
      <CreateNewButton 
        onClick={handleCreateNewClick}
        />
      <CreateNewModal
        openModal={openCreateNewModal}
        setOpenModal={setOpenCreateNewModal}
        createNewItem={handleCreateNewItem}
        children={KibCreateNewModal}
      />
    </>
  )
}

export { KibsPage }