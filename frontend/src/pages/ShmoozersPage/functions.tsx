import type { ShmoozerType } from "../../types/shmoozer.types";
import type { AxiosInstance } from "axios";

export const printShmoozer = (shmoozer: ShmoozerType) => {
    return (<>
        <p>id: {shmoozer._id}</p>
        <p>shmoozer name: {shmoozer.shmoozerName}</p>
        <p>display name: {shmoozer.displayName}</p>
    </>)
}

export const createNewShmoozer = async (
  shmoozerDataToCreate: ShmoozerType,
  api: AxiosInstance,
  setShmoozers: React.Dispatch<React.SetStateAction<ShmoozerType[]>>
) => {
  try {
    const response = await api.post("/shmoozers", shmoozerDataToCreate);
    const newShmoozer = response.data.data; 
    console.log("New shmoozer created:", newShmoozer);
    setShmoozers(prev => [...prev, newShmoozer]);
    console.log("New shmoozer created:", newShmoozer);
  } catch (error) {
    console.error("Failed to create new shmoozer:", error);
  }
}