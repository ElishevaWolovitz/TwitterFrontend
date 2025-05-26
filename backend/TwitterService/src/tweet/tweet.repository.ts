import { Types } from "mongoose";
import { TweetModel } from "../models/tweet.model";
import { TweetType } from "../types/tweet.type";

// Create
export const repositoryCreateTweet = async (tweet: TweetType): Promise<TweetType> => {
    return await new TweetModel(tweet).save(); 
};

// Read All
export const repositoryReadAllTweets = async (): Promise<TweetType[]>  => {
    return await TweetModel.find(); 
};

// Read One
export const repositoryReadTweet = async (tweetId: string | Types.ObjectId): Promise<TweetType> => {
    const readTweet = await TweetModel.findById(tweetId); 
    if(!readTweet)
        throw new Error(`Tweet (${tweetId}) not able to be read.`);
    return readTweet;
};

// Update   
export const repositoryUpdateTweet = async ( tweetId: string | Types.ObjectId, updateData: Partial<TweetType>): Promise<TweetType> => {
    const updatedTweet = await TweetModel.findByIdAndUpdate(tweetId, updateData, { new: true });
    if(!updatedTweet)
        throw new Error(`Tweet (${tweetId}) not able to be updated.`);
    return updatedTweet;
};

// Delete
export const repositoryDeleteTweet = async (tweetId: string | Types.ObjectId): Promise<TweetType> => {
    const deletedTweet = await TweetModel.findByIdAndDelete(tweetId); 
    if(!deletedTweet)
        throw new Error(`Tweet (${tweetId}) not able to be deleted.`);
    return deletedTweet; 
};