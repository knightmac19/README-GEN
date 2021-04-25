const inquirer = require('inquirer');
const generate = require('./templates/generate');
const fs = require('fs');

const none = '';

const MIT = require('./templates/licenses/MIT');
const BSD2 = require('./templates/licenses/BSD2');

const Boost = require('./templates/licenses/Boost');
const Creative = require('./templates/licenses/Creative');




var object = {
    title: 'README template',
    short: 'This is a temporary placeholder',
    year: '',
    holder: '',
    licenseText: '',
    licenseBadge: ''
};



var tableOfContents = [];

const init = () => {
    console.log('welcome to README generator');
    var licChoices = [
        'None',
        'Apache License 2.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software Licese 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
    ];

    const titlePrompt = () => {
        inquirer.prompt([
            {
                type:'input',
                name:'title',
                message: 'What is the title of your project?'
            },
            {
                type:'input',
                name:'short',
                message: 'Please provide a one-to-two sentence description.'
            },
            {
                type:'input',
                name:'year',
                message: 'Please provide the copyright year.'
            },
            {
                type:'input',
                name:'holder',
                message: 'Please provide the copyright holder.'
            },
            {
                type:'list',
                name:'license',
                message: 'Please choose a license.',
                choices: [
                    'None',
                    'MIT License',
                    'BSD 2-Clause "Simplified" License',
                    'Boost Software Licese 1.0',
                    'Creative Commons Zero v1.0 Universal'
                ]
            }
        ]).then(a => {
            let year = a.year;
            let holder = a.holder
            switch(a.license) {
                case 'None':
                    object.licenseText = none;
                case 'MIT License':
                    object.licenseText = MIT.License(year, holder);
                    object.licenseBadge = MIT.Badge();
                break
                case 'BSD 2-Clause "Simplified" License':
                    object.licenseText = BSD2.License(year, holder);
                    object.licenseBadge = BSD2.Badge();
                break
                case 'Boost Software Licese 1.0':
                    object.licenseText = Boost.License();
                    object.licenseBadge = Boost.Badge();
                break
                case 'Creative Commons Zero v1.0 Universal':
                    object.licenseText = Creative.License();
                    object.licenseBadge = Creative.Badge();
                break
                
            }
            
            object.title = a.title
            object.short = a.short
            object.year = a.year
            object.holder = a.holder
            // console.log(object)
            writeREADME(object)
        })
    };


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

