const inquirer = require('inquirer');
const generate = require('./templates/generate');
const fs = require('fs');

const none = '';
const ApacheLic = require('./templates/licenses/apache.js');
const MIT = require('./templates/licenses/MIT');
const BSD2 = require('./templates/licenses/BSD2');
const BSD3 = require('./templates/licenses/BSD3');
const Boost = require('./templates/licenses/Boost');
const Creative = require('./templates/licenses/Creative');
const Eclipse = require('./templates/licenses/Eclipse');


var object = {
    title: 'README template',
    description: 'This is a temporary placeholder',
    year: '',
    holder: '',
    licenseText: '',
    licenseBadge: ''
};

var licChoices = [
    'None',
    'Apache License 2.0',
    'GNU Gneral Public License v3.0',
    'MIT License',
    'BSD 2-Clause "Simplified" License',
    'BSD 3-Clause "New" or "Revised" License',
    'Boost Software Licese 1.0',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
];

var tableOfContents = [];

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
                name:'short-description',
                message: 'Please provide a one-to-two sentence description.'
            },
            {
                type:'list',
                name:'license',
                message: 'Please choose a license.',
                choices: []
            },
            {
                type:'input',
                name:'deployed',
                message: 'Please provide the deployed link.'
            },

        ]).then(a => {
            console.log(a)
            object = a
            writeREADME(object)
        })
    };


    const descriptionPrompt = () => {
        inquirer.prompt([
            {
                type:'input',
                name:'description',
                message:'What ?',
                choices: ['Description', 'Usage', '']
            }
        ])

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

