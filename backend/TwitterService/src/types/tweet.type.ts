import { Types } from 'mongoose';

export type TweetType = {
    _id?: Types.ObjectId;
    tweetName: string;
    userId: Types.ObjectId;
    text: string;
    media?: string;
    likes?: number;
    createdAt?: Date;
}