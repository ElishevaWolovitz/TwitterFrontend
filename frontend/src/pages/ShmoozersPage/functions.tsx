import type { ShmoozerType } from "../../types/shmoozer.types";
import type { AxiosInstance } from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrintShmoozer from '../../structures/Print/PrintShmoozer';

export const printShmoozer = (shmoozer: ShmoozerType) => {
  return (<PrintShmoozer shmoozer={shmoozer} />);
}

export const createNewShmoozer = async (
  shmoozerDataToCreate: ShmoozerType,
  api: AxiosInstance,
  setShmoozers: React.Dispatch<React.SetStateAction<ShmoozerType[]>>) => {
    const createNewShmoozerResults = await api.post("/shmoozers", shmoozerDataToCreate).catch((error) => {
      console.error("Error creating new shmoozer:", error);
      toast.error("Failed to create new shmoozer. Please try again.");
    });
  if (createNewShmoozerResults) {
    const newShmoozer = createNewShmoozerResults.data.data; 
    setShmoozers(prev => [...prev, newShmoozer]);
    console.log("New shmoozer created:", newShmoozer);
    toast.success("New shmoozer created successfully!");
  } 
}

