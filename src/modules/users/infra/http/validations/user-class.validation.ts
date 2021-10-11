import { Joi, Segments, celebrate } from 'celebrate';

export const createUserValidation = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    surname: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  },
});

export const UpdateUserValidation = celebrate({
  [Segments.BODY]: {
    name: Joi.string(),
    surname: Joi.string(),
    phone: Joi.string(),
    email: Joi.string().email(),
    old_password: Joi.string(),
    password: Joi.string().min(6).when('old_password', {
      is: Joi.exist(),
      then: Joi.required(),
    }),
  },
});

export const sessionValidation = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

export const idParamsValidate = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});
