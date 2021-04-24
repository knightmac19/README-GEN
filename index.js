const inquirer = require('inquirer');
const generate = require('./templates/generate');
const fs = require('fs');


const object = {
    title: 'README template',
    description: 'This is a temporary placeholder'
};

const init = () => {
    console.log('welcome to README generator');

    const writeREADME = obj => {
        fs.writeFile('./dist/README.md', generate(obj), function(err) {
            if (err) {
                console.log(err);
            }
            console.log('Please find generated file in dist folder.')
        })
    }

    writeREADME(object)
}

init();

