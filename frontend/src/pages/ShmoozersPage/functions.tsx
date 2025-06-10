import type { ShmoozerType } from "../../types/shmoozer.types";
import type { AxiosInstance } from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const printShmoozer = (shmoozer: ShmoozerType) => {
    const printable = <>
        <p>id: {shmoozer._id}</p>
        <p>shmoozer name: {shmoozer.shmoozerName}</p>
        <p>display name: {shmoozer.displayName}</p>
    </>
    return printable;
}

export const createNewShmoozer = async (
  shmoozerDataToCreate: ShmoozerType,
  api: AxiosInstance,
  setShmoozers: React.Dispatch<React.SetStateAction<ShmoozerType[]>>
) => {
  try {
    const response = await api.post("/shmoozers", shmoozerDataToCreate);
    const newShmoozer = response.data.data; 
    setShmoozers(prev => [...prev, newShmoozer]);
    console.log("New shmoozer created:", newShmoozer);
    toast.success("New shmoozer created successfully!");
  } catch (error) {
    console.error("Failed to create new shmoozer:", error);
    toast.error("Failed to create new shmoozer. Please try again.");
  }
}