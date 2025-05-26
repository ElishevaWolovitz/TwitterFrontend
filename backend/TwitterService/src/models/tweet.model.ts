import {Document, Schema, model} from 'mongoose';
import { TweetType } from '../types/tweet.type';

const tweetSchema: Schema = new Schema({
  tweetName: { 
    type: String, 
    required: true,
    index: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'UserModel',
  },
  text: {
    type: String,
    required: true,
    maxlength: 200,
  },
  media: {
    type: String,
  },
  likes: {
    type: Number, 
    min: 0,
    default: 0,
  },
  createdAt: {
    type: Date, 
    default: Date.now,
  }
},{collection: 'tweets'});

export const TweetModel = model<TweetType & Document>('TweetModel', tweetSchema);