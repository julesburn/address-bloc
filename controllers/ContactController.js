const inquirer = require("inquirer");
const Contact = require("../db/models").Contact;

module.exports = class ContactController {

  constructor() {
    this.contacts = [];
<<<<<<< HEAD
  }

  addContact(name, phone){
    return Contact.create({name, phone})
=======
    this.addContactQuestions = [
  {
    type: "input",
    name: "name",
    message: "Contact's name: ",
    validate(val){
      return val !== "";
    }
  },
  {
    type: "input",
    name: "phone",
    message: "Contact's phone number: ",
    validate(val){
      return val !== "";
    }
  },
  {
    type: "input",
    name: "email",
    message: "Contact's email: ",
    validate(val){
      return val !== "";
    }
  }
];
  }

  addContact(name, phone, email){
    return Contact.create({name, phone, email})
>>>>>>> d743e0337f3aa76ecf8f38c0b42b7a3d64a3c40e
  }

}
