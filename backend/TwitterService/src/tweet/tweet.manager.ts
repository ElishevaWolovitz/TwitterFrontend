import { Types } from 'mongoose';
import { 
    reposCreateTweet, 
    reposReadAllTweets, 
    reposReadTweet, 
    reposUpdateTweet, 
    reposDeleteTweet 
} from "./tweet.repository";
import { TweetType } from "../types/tweet.type";

// Create
export const manageCreateTweet = async (tweet: TweetType): 
    Promise<TweetType> => {
    return await reposCreateTweet(tweet); 
};

// Read All
export const manageReadAllTweets = async ():
    Promise<TweetType[]> => {
    return await reposReadAllTweets();
}; 

// Read One
export const manageReadTweet = async (tweetId: string | Types.ObjectId): 
    Promise<TweetType> => {
    return await reposReadTweet(tweetId);
};

// Update   
export const manageUpdateTweet = async ( tweetId: string | Types.ObjectId, 
    updateData: Partial<TweetType>): 
    Promise<TweetType> => {
    return await reposUpdateTweet(tweetId, updateData);
};

// Delete
export const manageDeleteTweet = async (tweetId: string | Types.ObjectId): 
    Promise<TweetType> => {
    return await reposDeleteTweet(tweetId);
};