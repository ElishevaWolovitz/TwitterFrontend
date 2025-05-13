import mongoose, {Document, Schema, model } from 'mongoose';
import { UserType } from '../types/user.types';

const userSchema: Schema = new Schema({
  username: { 
    type: String, 
    required: true,
    unique: true,
    index: true,
  },
  displayName: {
    type: String,
    required: true
  }
},{collection: 'users'});

export const UserModel = model<UserType & Document>('UserModel', userSchema);