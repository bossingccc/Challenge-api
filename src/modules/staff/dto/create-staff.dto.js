import Joi from 'joi'

export const CreateStaffDto = Joi.object({
  id: Joi.string().optional(),
  id_card_number: Joi.number().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  address: Joi.string().required(),
  mobile: Joi.string().required(),
  weight: Joi.number().required(),
  height: Joi.string().required(),
})
