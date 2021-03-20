const Joi = require('joi');

const validateUser = (data) => {
  const schema = Joi
    .object({
      username: Joi
        .string()
        .min(6)
        .required(),
      email: Joi
        .string()
        .min(6)
        .required()
        .email(),
      password: Joi
        .string()
        .min(6)
        .required(),
    });
  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi
      .string()
      .min(6)
      .required()
      .email(),
    password: Joi
      .string()
      .min(6)
      .required(),
  });
  return schema.validate(data);
};

module.exports = {
  validateUser,
  validateLogin,
};
