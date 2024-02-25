import * as joi from "joi";

export const createRepliesSchema = joi.object({
  content: joi.string().allow(null),
  image: joi.string().allow(null),
});
