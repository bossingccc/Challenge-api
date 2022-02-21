import Joi from 'joi'

export const UpdateStaffDto = Joi.object({
  id_card_number: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  address: Joi.string().optional(),
  mobile: Joi.string().optional(),
  weight: Joi.string().required(),
  height: Joi.string().required(),
})
