import joi from 'joi'

const schemaPassenger = joi.object({
    firstname: joi.string().min(2).max(100).required(),
    lastname: joi.string().min(2).max(100).required(),
  });
  
export default schemaPassenger
