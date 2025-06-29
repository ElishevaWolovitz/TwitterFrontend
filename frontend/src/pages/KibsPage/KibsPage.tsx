import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import KibEditModal from '../../structures/Modals/KibEditModal';
import CreateNewModal from '../../components/Modal/CreateNewModal';
import KibCreateNewModal from '../../structures/Modals/KibCreateNewModal';
import List from '../../components/List';
import type { KibPageProps } from './types';
import type { KibType } from '../../types/kib.types';
import { getKibs, printKib, editKib, deleteKib, filterKibsByName, createNewKib } from './functions';
import Spinner from '../../components/Spinner';
import { Styles } from './styles';
import { toastifyTimer } from './const';
import { partial } from 'lodash/fp';
import { CreateNewItemButtonStyles } from '../../components/Button/CreateNewItemButton/styles';


const KibsPage = ({api}: KibPageProps) => {
  const [kibs, setKibs] = useState<KibType[]>([]);
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filteredKibs, setFilteredKibs] = useState<KibType[]>([])
  const classes = Styles();
  const createNewItemButtonClasses = CreateNewItemButtonStyles();

  useEffect(() => {
    getKibs(setKibs, setLoading, api);
  }, [api]);

  return (
    <>
      <ToastContainer autoClose={toastifyTimer}/>
      <Navbar />
      <div className={classes.pageContainer}>
        <div className={classes.headerContainer}>
          <h1 className={classes.title}>Kibs Page</h1>
        </div>
        {loading ? (<Spinner />) : (
          <>
            <SearchBar 
              items={kibs}
              filterItems={filterKibsByName}
              setFilteredItems={setFilteredKibs}
              />
            <List 
                items={filteredKibs}
                printItem={printKib}
                editItem={partial(editKib,[api, setKibs])}
                deleteItem={partial( deleteKib, [api, setKibs, kibs])}
                ModalChildrenComp={KibEditModal}
            />
            <button type="button"
              className={createNewItemButtonClasses.button}
              onClick={partial(setOpenCreateNewModal, [true])}>
              Create New Kib
            </button>
            {openCreateNewModal && (
              <CreateNewModal
                setOpenModal={setOpenCreateNewModal}
                createNewItem={partial(createNewKib,[api, setKibs])}
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