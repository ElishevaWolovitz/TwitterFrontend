import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import KibEditModal from '../../structures/Modals/KibEditModal';
import CreateNewButton from '../../components/Button/CreateNewButton';
import CreateNewModal from '../../components/Modal/CreateNewModal';
import KibCreateNewModal from '../../structures/Modals/KibCreateNewModal';
import type { KibPageProps } from './types';
import type { KibType } from '../../types/kib.types';
import { printKib, editKib, deleteKib, filterKibs, createNewKib } from './functions';
import Spinner from '../../components/Spinner';
import { Styles } from './styles';


const KibsPage = ({api}: KibPageProps) => {
  const [kibs, setKibs] = useState<KibType[]>([]);
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const classes = Styles();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      api.get('/kibs')
        .then((res) => {
          setKibs(res.data.data);
        })
        .finally(() => {
          setLoading(false);
        });
      }, 1500);
  }, [api]);
  const handleDeleteKib = (kib: KibType) => {
    deleteKib(kib, api, setKibs);
  };
  const handleEditKib = (kib: KibType) => {
    editKib(kib, api, setKibs)
  };

  const handleCreateNewClick = () => {
      setOpenCreateNewModal(true);
  };
  const handleCreateNewItem = (kibDataToCreate: KibType) => {
    createNewKib(kibDataToCreate, api, setKibs);
  }
  return (
    <>
      <ToastContainer autoClose={1000}/>
      <Navbar />
      <div className={classes.pageContainer}>
        <div className={classes.headerContainer}>
          <h1 className={classes.title}>Kibs Page</h1>
        </div>
        {loading ? (<Spinner />) : (
          <>
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
            {openCreateNewModal && (
              <CreateNewModal
                setOpenModal={setOpenCreateNewModal}
                createNewItem={handleCreateNewItem}
                children={KibCreateNewModal}
              />
            )}
          </>
      )}
    </div>
    </>
  )
}

export { KibsPage }