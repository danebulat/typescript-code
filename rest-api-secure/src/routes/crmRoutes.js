import { addNewContact
       , getContacts
       , getContactWithID
       , updateContact
       , deleteContact } from '../controllers/crmController';
import { login 
       , register
       , loginRequired } from '../controllers/userControllers';

const routes = (app) => {

  // -------------------------------------------------- 
  // Authentication Required Routes
  // -------------------------------------------------- 

  app.route('/contacts')
    // get all contacts
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next(); 
    }, loginRequired, getContacts)

    // post a new contact
    .post(loginRequired, addNewContact);

  app.route('/contact/:contactId')
    // get specific contact
    .get(loginRequired, getContactWithID)
    // update a contact
    .put(loginRequired, updateContact)
    // delete a contact
    .delete(loginRequired, deleteContact);

  // -------------------------------------------------- 
  // User Routes
  // -------------------------------------------------- 

  // registration route
  app.route('/auth/register')
    .post(register);

  // login route
  app.route('/login')
    .post(login);
}

export default routes;
