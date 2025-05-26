import { ShmoozerModel }from "../models/shmoozer.model";
import { ShmoozerType } from "../types/shmoozer.types";


//Create/Post
export const repositoryCreateShmoozer = async (shmoozer: ShmoozerType): Promise<ShmoozerType> => {
    return await new ShmoozerModel(shmoozer).save();
};
 
//Read All/Get All
export const repositoryReadAllShmoozers = async (): Promise<ShmoozerType[]>  => {
    return await ShmoozerModel.find();
}