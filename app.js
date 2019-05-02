<<<<<<< HEAD
for (let arg of process.argv){
  if (arg([0] !== '/') {
    console.log(arg);
  })
}
=======
const inquirer = require('inquirer');

const MenuController = require('./controllers/MenuController');
const menu = new MenuController();

menu.clear();
menu.main();
>>>>>>> d3ad65552568da03b2e92c0b706708330258056e
