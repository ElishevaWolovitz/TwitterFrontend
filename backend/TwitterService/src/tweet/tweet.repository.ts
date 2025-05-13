import { Types } from "mongoose";
import { TweetModel } from "../models/tweet.model";
import { TweetType } from "../types/tweet.type";

// Create
export const reposCreateTweet = async (tweet: TweetType): Promise<TweetType> => {
    return await new TweetModel(tweet).save(); 
};

// Read All
export const reposReadAllTweets = async (): Promise<TweetType[]>  => {
    return await TweetModel.find(); 
};

// Read One
export const reposReadTweet = async (tweetId: string | Types.ObjectId): Promise<TweetType> => {
    const readTweet = await TweetModel.findById(tweetId); 
    if(!readTweet)
        throw new Error('Tweet not found in DB (in reposReadTweet)');
    return readTweet;
};

// Update   
export const reposUpdateTweet = async ( tweetId: string | Types.ObjectId, updateData: Partial<TweetType>): Promise<TweetType> => {
    const updatedTweet = await TweetModel.findByIdAndUpdate(tweetId, updateData, { new: true });
    if(!updatedTweet)
        throw new Error('Tweet not found in DB (in reposUpdateTweet)');
    return updatedTweet;
};

// Delete
export const reposDeleteTweet = async (tweetId: string | Types.ObjectId): Promise<TweetType> => {
    const deletedTweet = await TweetModel.findByIdAndDelete(tweetId); 
    if(!deletedTweet)
        throw new Error('Tweet not found in DB (in reposDeleteTweet)');
    return deletedTweet; 
};