import express from 'express'
import StaffController from './controllers/staff.controller.js'
// import { createValidator } from 'express-joi-validation'
// import { CreateStaffDto } from './dto/create-staff.dto.js'
// import { UpdateStaffDto } from './dto/update-staff.dto.js'


const StaffRouter = express.Router()
// const validator = createValidator({})

StaffRouter.get('/', StaffController.getStaff)
StaffRouter.get('/:id', StaffController.getStaffById)
StaffRouter.post('/',StaffController.createStaff)
StaffRouter.put('/:id', StaffController.updateStaff)
StaffRouter.delete('/:id',StaffController.deleteStaff)

export default StaffRouter
