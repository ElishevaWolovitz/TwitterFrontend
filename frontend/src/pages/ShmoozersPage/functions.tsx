import type { ShmoozerType } from "../../types/shmoozer.types";
import type { AxiosInstance } from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrintShmoozer from '../../structures/Print/PrintShmoozer';
import { handleError } from "../../functions";

export const printShmoozer = (shmoozer: ShmoozerType) => {
  return (<PrintShmoozer shmoozer={shmoozer} />);
}

const appendShmoozer = (newShmoozer: ShmoozerType) => (shmoozers: ShmoozerType[]) => 
  [...shmoozers, newShmoozer]

export const createNewShmoozer = async (
  shmoozerDataToCreate: ShmoozerType,
  api: AxiosInstance,
  setShmoozers: React.Dispatch<React.SetStateAction<ShmoozerType[]>>) => {
    const createNewShmoozerResults = await api.post("/shmoozers", shmoozerDataToCreate)
    .catch(handleError("Failed to create new shmoozer. Please try again."));
  if (createNewShmoozerResults) {
    const newShmoozer = createNewShmoozerResults.data.data; 
    setShmoozers(appendShmoozer(newShmoozer));
    console.log("New shmoozer created:", newShmoozer);
    toast.success("New shmoozer created successfully!");
  } 
}

