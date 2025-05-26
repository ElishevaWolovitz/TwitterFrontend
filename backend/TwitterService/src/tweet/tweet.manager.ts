import { Types } from 'mongoose';
import { 
    repositoryCreateTweet, 
    repositoryReadAllTweets, 
    repositoryReadTweet, 
    repositoryUpdateTweet, 
    repositoryDeleteTweet 
} from "./tweet.repository";
import { TweetType } from "../types/tweet.type";

// Create
export const manageCreateTweet = async (tweet: TweetType): 
    Promise<TweetType> => {
    return await repositoryCreateTweet(tweet); 
};

// Read All
export const manageReadAllTweets = async ():
    Promise<TweetType[]> => {
    return await repositoryReadAllTweets();
}; 

// Read One
export const manageReadTweet = async (tweetId: string | Types.ObjectId): 
    Promise<TweetType> => {
    return await repositoryReadTweet(tweetId);
};

// Update   
export const manageUpdateTweet = async ( tweetId: string | Types.ObjectId, 
    updateData: Partial<TweetType>): 
    Promise<TweetType> => {
    return await repositoryUpdateTweet(tweetId, updateData);
};

// Delete
export const manageDeleteTweet = async (tweetId: string | Types.ObjectId): 
    Promise<TweetType> => {
    return await repositoryDeleteTweet(tweetId);
};