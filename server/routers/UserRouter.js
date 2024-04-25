import express from 'express'
import {getAllUser, registerUser, login, DeleteUser, createUser, updateUser, getUserById} from '../controllers/UserController.js'
const UserRouter = express.Router()
import {isAuth, isAdmin} from '../untils/until.js'

UserRouter.post('/register', registerUser)
UserRouter.post('/login', login)
UserRouter.post('/create', createUser)
UserRouter.post('/update/:id', updateUser)
UserRouter.get('/detail/:id', getUserById)

UserRouter.get('/', getAllUser)
UserRouter.delete('/delete/:id', DeleteUser)


export default UserRouter
