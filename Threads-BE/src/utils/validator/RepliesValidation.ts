import * as joi from "joi";
import Joi = require("joi");

export const createRepliesSchema = joi.object({
  content: joi.string().allow(null),
  image: Joi.string().allow(null),
});
