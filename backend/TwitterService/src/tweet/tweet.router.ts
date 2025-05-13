import express, { Router } from 'express';
import { 
    controlCreateTweet, 
    controlReadAllTweets, 
    controlReadTweet, 
    controlUpdateTweet, 
    controlDeleteTweet 
} from './tweet.controller';
import {
    tweetBodySchema,
    tweetUpdateBodySchema,
    tweetIdParamSchema
  } from './tweet.validator';
  import { validateBody, validateParams } from '../joi/joi.functions';


const router: Router = express.Router();

router.post(
    '/', 
    validateBody(tweetBodySchema), 
    controlCreateTweet
);
router.get(
    '/', 
    controlReadAllTweets
);
router.get(
    '/:id', 
    validateParams(tweetIdParamSchema), 
    controlReadTweet
);
router.put(
    '/:id', 
    validateParams(tweetIdParamSchema), 
    validateBody(tweetUpdateBodySchema), 
    controlUpdateTweet
);
router.delete(
    '/:id', 
    validateParams(tweetIdParamSchema), 
    controlDeleteTweet
);

export default router;
