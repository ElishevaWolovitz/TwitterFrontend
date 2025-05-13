import Joi from 'joi';

export const userBodySchema = Joi.object({
    username: Joi.string().required(),
    displayName: Joi.string().required()
})
