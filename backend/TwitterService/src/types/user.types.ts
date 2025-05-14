import { ObjectId } from "mongoose";

export type UserType = { 
    _id?: ObjectId | string;
    username: string;
    displayName: string;
}