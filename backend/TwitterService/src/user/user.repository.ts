import { UserModel }from "../models/user.model";
import { UserType } from "../types/user.types";


//Create/Post
export const reposCreateUser = async (user: UserType): Promise<UserType> => {
    return await new UserModel(user).save();
};
 
//Read All/Get All
export const reposReadAllUsers = async (): Promise<UserType[]>  => {
    return await UserModel.find();
}