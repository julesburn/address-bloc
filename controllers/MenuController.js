const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add New Contact",
		  "View All Contacts",
		  "Search Contacts",
          "Time and Date",
          "Remind Me",
          "Exit"
        ]
      }
    ];
    this.book = new ContactController();
  }

  main(){
    console.log('Welcome to AddressBloc!');
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add New Contact":
          this.addContact();
          break;
		case "View All Contacts":
		  this.getContacts();
		  break;
		case "Search Contacts":
		  this.search();
		  break;
        case "Time and Date":
          this.getDate();
          break;
        case "Remind Me":
          this.remindMe();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clear(){
    console.log("\x1Bc");
  }

  addContact(){
    this.clear();
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
        console.log("Contact added successfully!");
        this.main();
      }).catch((err) => {
        console.log(err);
        this.main();
      });
    });
  }

      getContacts(){
      this.clear();

      this.book.getContacts().then((contacts) => {
        for (let contact of contacts) {
          console.log(`
          name: ${contact.name}
          phone number: ${contact.phone}
          email: ${contact.email}
          ---------------`
          );
        }
        this.main();
      }).catch((err) => {
        console.log(err);
        this.main();
      });
    }

	search(){
      inquirer.prompt(this.book.searchQuestions)
      .then((target) => {
       this.book.search(target.name)
       .then((contact) => {
          if(contact === null){
            this.clear();
            console.log("contact not found");
            this.search();
          } else {
            this.showContact(contact);
         }

        });
     })
     .catch((err) => {
       console.log(err);
       this.main();
     });
    }

    showContact(contact){
      this._printContact(contact);
    }

    _printContact(contact){
      console.log(`
        name: ${contact.name}
        phone number: ${contact.phone}
        email: ${contact.email}
        ---------------`
      );
	  this.main();
    }

  getDate(){
    this.clear();
    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log("It is currently "+Date());
    this.main();
  }

  remindMe(){
    this.clear();
    console.log("Learning is a lifelong pursuit.")
    this.main();
    return("Learning is a lifelong pursuit.")
  }

  exit(){
    console.log("Thanks for using AddressBloc! Goodbye!")
    process.exit();
  }

  getContactCount(){
    return this.contacts.length;
  }
}
