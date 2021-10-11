import { Joi, Segments, celebrate } from 'celebrate';

export const createClientValidation = celebrate({
  [Segments.BODY]: {
    cnpj: Joi.string().required().length(14),
    fantasy_name: Joi.string().required(),
    corporate_name: Joi.string().required(),
    zip_code: Joi.string().required(),
    address: Joi.string().required(),
    number: Joi.string().required(),
    complement: Joi.string().required(),
    neighbourhood: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
  },
});

export const idParamsValidate = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});
