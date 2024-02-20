import Joi = require("joi");

export const followSchema = Joi.object({
  following: Joi.string().allow(null),
  follower: Joi.string().allow(null),
});
