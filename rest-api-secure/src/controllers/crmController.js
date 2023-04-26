import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

// Compile the ContactSchema into a model
const Contact = mongoose.model('Contact', ContactSchema);

// ---------------------------------------------------------------------- 
// Add New Contact
// ---------------------------------------------------------------------- 

export const addNewContact = (req, res) => {

  // Instantiate new contact document
  let newContact = new Contact(req.body);

  // Save contact before returning its JSON
  newContact.save()
    .then((contact) => {
      console.log("save successful");
      res.json(contact);
    })
    .catch((err) => {
      console.log("save error");
      res.send(err);
    });
};

// ---------------------------------------------------------------------- 
// Get Contacts
// ---------------------------------------------------------------------- 

export const getContacts = (req, res) => {
  Contact.find({})
    .then((contacts) => {
      console.log("got all contacts");
      res.json(contacts);
    })
    .catch((err) => {
      console.log("error getting all contacts");
      res.send(err);
    });
};

// ---------------------------------------------------------------------- 
// Get Contact
// ---------------------------------------------------------------------- 

export const getContactWithID = (req, res) => {
  Contact.findById(req.params.contactId)
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      res.send(err);
    })
};

// ---------------------------------------------------------------------- 
// Update Contact
// ---------------------------------------------------------------------- 

export const updateContact = (req, res) => {
 
  // return new contact information (new: true)
  Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true })
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      res.send(err);
    })
};

// ---------------------------------------------------------------------- 
// Delete Contact
// ---------------------------------------------------------------------- 

export const deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.contactId })
    .then(() => {
      res.json({ message: 'Successfully deleted contact' });
    })
    .catch((err) => {
      res.send(err);
    });
};
