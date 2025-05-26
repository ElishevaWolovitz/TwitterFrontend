import { Request, Response } from 'express';
import { 
    manageCreateUser, 
    manageReadAllUsers
} from "./user.manager";
import { UserType } from "../types/user.types";
import { errorHandler } from '../handler/error.handler';
import { successHandler } from '../handler/success.handler';

// Create
export const controlCreateUser = async (req: Request, res: Response) => {
    const user = req.body as UserType;
    const createUserResult = await manageCreateUser(user).catch(errorHandler(res, 400));
    if(createUserResult)
        successHandler(res, `Created new user (user id: ${user._id}).`, createUserResult, 200);
};

// Read All
export const controlReadAllUsers = async (req: Request, res: Response) => {
    const users = await manageReadAllUsers().catch(errorHandler(res, 400));
    if(users)
        successHandler(res, `Read all users.`, users, 200);
};