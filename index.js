const inquirer = require('inquirer');



const init = () => {
    console.log('welcome to README generator');

    const writeREADME = arr => {
        false.writeFile('./dist/README.md', arr, function(err) {
            if (err) {
                console.log(err);
            }
            console.log('Please find generated file in dist folder.')
        })
    }
}

init();

