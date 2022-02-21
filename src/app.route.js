import express from 'express'
import StaffRouter from './modules/staff/staff.route.js'
// import UserRouter from './modules/user/user.route.js'

const AppRouter = express()

AppRouter.use('/staff', StaffRouter)
// AppRouter.use('/user', UserRouter)

export default AppRouter