import express from 'express'
import {createContact, getAllContact} from '../controllers/ContactController.js'
const ContactRouter = express.Router()

ContactRouter.post('/create', createContact)
ContactRouter.get('/allContact',getAllContact)
// ContactRouter.post('/update/:id', updateContact)
// ContactRouter.get('/detail/:id', getContactById)
// ContactRouter.get('/', getAllContact)
// ContactRouter.delete('/delete/:id', DeleteContact)
export default ContactRouter