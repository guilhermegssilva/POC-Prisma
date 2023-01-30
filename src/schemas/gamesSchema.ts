import Joi from "joi";

const GameRatingSchemas = Joi.object({
    imgUrl: Joi.string().required(),
    title: Joi.string().required(),
    platform: Joi.string().required(),
    genre: Joi.string().required()
})

export default GameRatingSchemas;
