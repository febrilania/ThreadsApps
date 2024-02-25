import Joi = require("joi");

export const followSchema = Joi.object({
  following: Joi.number().allow(null),
  follower: Joi.number().allow(null),
});
