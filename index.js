const inquirer = require('inquirer');
const generate = require('./templates/generate');
const fs = require('fs');

const none = '';
const MIT = require('./templates/licenses/MIT');
const BSD2 = require('./templates/licenses/BSD2');
const Boost = require('./templates/licenses/Boost');
const Creative = require('./templates/licenses/Creative');
const Contributor = require('./templates/contributor');


var object = {
    title: '',
    short: '',
    languages: [],
    long:'',
    motivation: '',
    usage: '',
    challenges: '',
    // contributors: [],
    year: '',
    holder: '',
    licenseText: '',
    licenseBadge: ''
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
                name:'short',
                message: 'Please provide a one-to-two sentence description.'
            },
            {
                type:'checkbox',
                name:'languages',
                message: 'What languages / technologies were used? Select all that apply.',
                choices: [
                    'HTML5', 
                    'CSS3',
                    'SASS',
                    'JavaScript',
                    'TypeScript', 
                    'Python',
                    'Node.js', 
                    'Markdown', 
                    'Express.js',
                    'React',

                    'React Native',
                    'Vue.js',
                    'Angular',
                    'Redux',
                    'jQuery',
                    'Bootstrap', 
                    'Material UI', 
                    'Visual Studio Code',
                    'Visual Studio',
                    'Vim',
                    
                    'Sublime Text',
                    'Git',
                    'GitLab',
                    'GitHub',
                    'MySQL',
                    'Postgres',
                    'MongoDB',
                    'SQLite',
                    'Oracle',
                    'Jest',
                    'Mocha'
                ]
            },
            {
                type:'input',
                name:'long',
                message: 'Please provide a longer description of what the application does.'
            },
            {
                type:'input',
                name:'motivation',
                message: 'What was the motivation to develop the project?'
            },
            {
                type:'input',
                name:'usage',
                message: 'How can users use the application?'
            },
            {
                type:'input',
                name:'challenges',
                message: 'What were some challenges / lessons learned during the development process?'
            },
            // {
            //     type:'input',
            //     name:'contributors',
            //     message: 'Who contributed to the project?'
            // },
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
            object = a;
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