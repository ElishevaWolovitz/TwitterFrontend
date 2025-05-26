import Joi from 'joi';

export const shmoozerBodySchema = Joi.object({
    shmoozerName: Joi.string().required(),
    displayName: Joi.string().required()
})
