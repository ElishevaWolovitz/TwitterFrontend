import { UserModel }from "../models/user.model";
import { UserType } from "../types/user.types";


//Create/Post
export const repositoryCreateUser = async (user: UserType): Promise<UserType> => {
    return await new UserModel(user).save();
};
 
//Read All/Get All
export const repositoryReadAllUsers = async (): Promise<UserType[]>  => {
    return await UserModel.find();
}