import { 
    repositoryCreateShmoozer, 
    repositoryReadAllShmoozers
} from "./shmoozer.repository";
import { ShmoozerType } from "../types/shmoozer.types";

// Create
export const manageCreateShmoozer = async (shmoozer: ShmoozerType): Promise<ShmoozerType> => {
    return await repositoryCreateShmoozer(shmoozer); 
};

//Read All
export const manageReadAllShmoozers = async (): Promise<ShmoozerType[]> => {
    return await repositoryReadAllShmoozers();
}; 