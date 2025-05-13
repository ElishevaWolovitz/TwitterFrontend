import { Request, Response } from 'express';
import { TweetModel } from "../models/tweet.model";
import { 
    manageCreateTweet, 
    manageReadAllTweets, 
    manageReadTweet, 
    manageUpdateTweet, 
    manageDeleteTweet 
} from "./tweet.manager";
import { TweetType } from "../types/tweet.type";
import {errorHandler } from '../handler/error.handler';
import {successHandler} from '../handler/success.handler';

// Create
export const controlCreateTweet = async (req: Request, res: Response) => {
    const tweet = new TweetModel(req.body as TweetType);
    const createTweetResult = await manageCreateTweet(tweet).catch(errorHandler(res, 400));
    if(createTweetResult)
        successHandler(res, 'Created new tweet (in controller)', createTweetResult, 200);
};

// Read All
export const controlReadAllTweets = async (req: Request, res: Response) => {
    const tweets = await manageReadAllTweets().catch(errorHandler(res, 400));
    if(tweets)
        successHandler(res, 'Read all tweets (in controller)', tweets, 200);
};

// Read One
export const controlReadTweet = async (req: Request, res: Response) => {
    const { id: tweetId } = req.params;
    const tweet = await manageReadTweet(tweetId).catch(errorHandler(res, 400));
    if(tweet) 
        successHandler(res, 'Read 1 tweet (in controller)', tweet, 200);
};

// Update
export const controlUpdateTweet = async (req: Request, res: Response) => {
    const { id: tweetId } = req.params;
    const updateData = req.body as Partial<TweetType>;
    const updatedTweet = await manageUpdateTweet(tweetId, updateData).catch(errorHandler(res, 400));
    if(updatedTweet) 
        successHandler(res, 'Updated 1 tweet (in controller)', updatedTweet, 200);
};

// Delete
export const controlDeleteTweet = async (req: Request, res: Response) => {
    const { id: tweetId } = req.params;
    const deleteTweetResult = await manageDeleteTweet(tweetId).catch(errorHandler(res, 400));
    if(deleteTweetResult)
        successHandler(res, 'Deleted 1 tweet (in controller)', deleteTweetResult, 200);
}

