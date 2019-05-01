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
    console.log('addContact called');
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
