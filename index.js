const inquirer = require('inquirer');
const generate = require('./templates/generate');
const fs = require('fs');


var object = {
    title: 'README template',
    description: 'This is a temporary placeholder',

};

const init = () => {
    console.log('welcome to README generator');

    const titlePrompt = () => {
        inquirer.prompt([
            {
                type:'input',
                name:'title',
                message: 'What is the title of your project?'
            },
            {
                type:'input',
                name:'description',
                message: 'Please provide a one-to-two sentence description.'
            }
        ]).then(a => {
            console.log(a)
            object = a
            writeREADME(object)
        })
    };


    const mainMenu = () => {
        
    }


    const writeREADME = obj => {
        fs.writeFile('./dist/README.md', generate(obj), function(err) {
            if (err) {
                console.log(err);
            }
            console.log('Please find generated file in dist folder.')
        })
    }

    titlePrompt();
}

init();

