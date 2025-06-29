import { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import CreateNewModal from '../../components/Modal/CreateNewModal';
import ShmoozerCreateNewModal from '../../structures/Modals/ShmoozerCreateNewModal';
import type { ShmoozerPageProps } from './types';
import type { ShmoozerType } from '../../types/shmoozer.types';
import { getShmoozers, printShmoozer, createNewShmoozer } from './functions';
import Spinner from '../../components/Spinner';
import { Styles } from './styles';
import { toastifyTimer } from './consts'
import { partial } from 'lodash/fp';
import { CreateNewItemButtonStyles } from '../../components/Button/CreateNewItemButton/styles';

const ShmoozersPage = ({ api }: ShmoozerPageProps) => {
  const [shmoozers, setShmoozers] = useState<ShmoozerType[]>([]);
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const classes = Styles();
  const createNewItemButtonClasses = CreateNewItemButtonStyles();
  
  useEffect(() => {
    getShmoozers(setShmoozers, setLoading, api)
  }, [api]); 

  return (
    <>
      <ToastContainer autoClose={toastifyTimer}/>
      <Navbar />
      <div className={classes.pageContainer}>
        <div className={classes.headerContainer}>
          <h1 className={classes.title}>Shmoozers Page</h1>
        </div>
        {loading ? 
          (
            <Spinner />
          ) : ( 
          <>
            <List
              items={shmoozers}
              printItem={printShmoozer}
            />
            <button type="button"
              className={createNewItemButtonClasses.button}
              onClick={partial(setOpenCreateNewModal, [true])}>
              Create New Shmoozer
            </button>
            {openCreateNewModal && (
              <CreateNewModal
                setOpenModal={setOpenCreateNewModal}
                createNewItem={partial(createNewShmoozer, [api, setShmoozers])}
                children={ShmoozerCreateNewModal}
              />
            )}
          </>
        )}
      </div>
    </>
  )
}

export { ShmoozersPage }
