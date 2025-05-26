import express, { Router } from 'express';
import { controlCreateShmoozer, controlReadAllShmoozers } from './shmoozer.controller';
import { shmoozerBodySchema } from './shmoozer.validator';
import { validateBody } from '../joi/joi.functions';


const router: Router = express.Router();




router.post(
    '/', 
    validateBody(shmoozerBodySchema), 
    controlCreateShmoozer
);
router.get(
    '/', 
    controlReadAllShmoozers
);

export default router;
