import { 
    repositoryCreateUser, 
    repositoryReadAllUsers
} from "./user.repository";
import { UserType } from "../types/user.types";

// Create
export const manageCreateUser = async (user: UserType): Promise<UserType> => {
    return await repositoryCreateUser(user); 
};

//Read All
export const manageReadAllUsers = async (): Promise<UserType[]> => {
    return await repositoryReadAllUsers();
}; 