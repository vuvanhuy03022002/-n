import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Contact = new Schema({
    name_contact:{type: String},
    address_contact: {type:String},
    email_contact: {type:String},
    phone_contact: {type: String},
    content_contact: {type: String}
},
{
    timestamps: true,
  },
)

export const ContactModel = mongoose.model('Contact', Contact)