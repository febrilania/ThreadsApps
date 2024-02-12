import * as joi from "joi";
import Joi = require("joi");

export const createUserSchema = joi.object({
  username: Joi.string().required().min(8),
  full_name: Joi.string().required().max(100),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});
export const updateUserSchema = joi.object({
  username: Joi.string().required().min(8),
  full_name: Joi.string().required().max(100),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});
