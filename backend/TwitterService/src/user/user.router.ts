import express, { Router } from 'express';
import { controlCreateUser, controlReadAllUsers } from './user.controller';
import { userBodySchema } from './user.validator';
import { validateBody } from '../joi/joi.functions';


const router: Router = express.Router();

router.post(
    '/', 
    validateBody(userBodySchema), 
    controlCreateUser
);
router.get(
    '/', 
    controlReadAllUsers
);

export default router;
