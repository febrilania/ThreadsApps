import * as joi from "joi";
import Joi = require("joi");

export const createThreadsSchema = joi.object({
  content: Joi.string().allow(null),
  image: Joi.string().allow(null),
});
export const updateThreadsSchema = joi.object({
  content: Joi.string().allow(null),
  image: Joi.string().allow(null),
});
