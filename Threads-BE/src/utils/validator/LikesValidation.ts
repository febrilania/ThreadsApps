import Joi = require("joi");

export const postLikeSchema = Joi.object({
  threads: Joi.number().allow(null),
  user: Joi.string().allow(null),
});
