import { Request } from "express";
import { Schema } from "joi";

export const validate = (schema: Schema, req: Request) => {
  const result = schema.validate(req, {
    abortEarly: false,
    allowUnknown: false,
  });
  if (result.error) {
    throw new Error(result.error.message);
  } else {
    return result.value;
  }
};
