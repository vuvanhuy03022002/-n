import { ContactModel } from '../models/ContactModel.js'
import { generateToken } from '../untils/until.js'
import expressAsyncHandler from 'express-async-handler'

export const getAllContact = (req, res) => {
    ContactModel.find({})
        .then(contact => res.send(contact))
        .catch(err => console.log(err))
}


// export const DeleteContact = expressAsyncHandler(async (req, res) => {
//     const contact = await ContactModel.findById({_id: req.params.id})

//     if(contact){
//         await contact.remove()
//         res.send({message: 'contact deleted'})
//     }else{
//         res.send({message: 'contact not exists'})
//     }
// })



export const createContact = expressAsyncHandler(async (req, res) => {
    const contact = new ContactModel({
        name_contact: req.body.name_contact,
        phone_contact: req.body.phone_contact,
        email_contact: req.body.email_contact,
        address_contact: req.body.address_contact,
        content_contact: req.body.content_contact,
    });
    const newContact = await contact.save();

    if (newContact) {
        return res
            .status(201)
            .send({ message: "New  Created", data: newContact });
    } else {
        res.send("error add ");
    }
});