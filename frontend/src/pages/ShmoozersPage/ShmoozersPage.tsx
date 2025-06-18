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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../components/Spinner';
import { Styles } from './styles';

const ShmoozersPage = ({ api }: ShmoozerPageProps) => {
  //State defintions
  const [shmoozers, setShmoozers] = useState<ShmoozerType[]>([]);
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const classes = Styles();
  const fetchShmoozers = async () => {
    setLoading(true);
    setTimeout( async() => {
    const getShmoozerResults = await api.get('/shmoozers');
      if (getShmoozerResults) {
        setShmoozers(getShmoozerResults.data.data);
        setLoading(false);
      }
    },1000);
  };
  //Fetch shmoozers from API
  useEffect(() => {
    fetchShmoozers().catch((error) => {
      toast.error("Error fetching shmoozers:", error);
    });
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
        )}
      </div>
    </>
  )
}

export { ShmoozersPage }
