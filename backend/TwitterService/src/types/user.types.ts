import { ObjectId } from "mongoose";

export type UserType = { 
    _id?: ObjectId;
    username: string;
    displayName: string;
}