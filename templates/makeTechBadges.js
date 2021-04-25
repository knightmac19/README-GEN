const makeTechBadges = (arr) => {
    let resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        let badge = ''
        switch (arr[i]) {
            case 'HTML5':
                badge = `<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'CSS3':
                badge = `<img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'SASS':
                badge = `<img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'JavaScript':
                badge = `<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
                `;
                resultArr.push(badge);
            break
            case 'TypeScript':
                badge = `<img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Python':
                badge = `<img alt="Python" src="https://img.shields.io/badge/python-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Node.js':
                badge = `<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Markdown':
                badge = `<img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Express.js':
                badge = `<img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/>
                `;
                resultArr.push(badge);
            break
            case 'React':
                badge = `<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
                `;
                resultArr.push(badge);
            break
            case 'React Native':
                badge = `<img alt="React Native" src="https://img.shields.io/badge/react_native-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
                `;
                resultArr.push(badge);
            break
            case 'Vue.js':
                badge = `<img alt="Vue.js" src="https://img.shields.io/badge/vuejs-%2335495e.svg?&style=for-the-badge&logo=vue.js&logoColor=%234FC08D"/>
                `;
                resultArr.push(badge);
            break
            case 'Angular':
                badge = `<img alt="Angular" src="https://img.shields.io/badge/angular-%23DD0031.svg?&style=for-the-badge&logo=angular&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Redux':
                badge = `<img alt="Redux" src="https://img.shields.io/badge/redux-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'jQuery':
                badge = `<img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Bootstrap':
                badge = `<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Material UI':
                badge = `<img alt="Material UI" src="https://img.shields.io/badge/materialui-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Visual Studio Code':
                badge = `<img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Visual Studio':
                badge = `<img alt="Visual Studio" src="https://img.shields.io/badge/VisualStudio-5C2D91.svg?&style=for-the-badge&logo=visual-studio&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Vim':
                badge = `<img alt="Vim" src="https://img.shields.io/badge/VIM-%2311AB00.svg?&style=for-the-badge&logo=vim&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Sublime Text':
                badge = `<img alt="Sublime Text" src="https://img.shields.io/badge/sublime_text-%23575757.svg?&style=for-the-badge&logo=sublime-text&logoColor=important"/>
                `;
                resultArr.push(badge);
            break
            case 'Git':
                badge = `<img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'GitLab':
                badge = `<img alt="GitLab" src="https://img.shields.io/badge/gitlab-%23181717.svg?&style=for-the-badge&logo=gitlab&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'GitHub':
                badge = `<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'MySQL':
                badge = `<img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Postgres':
                badge = `<img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'MongoDB':
                badge = `<img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'SQLite':
                badge = `<img alt="SQLite" src ="https://img.shields.io/badge/sqlite-%2307405e.svg?&style=for-the-badge&logo=sqlite&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Oracle':
                badge = `<img alt="Oracle" src ="https://img.shields.io/badge/oracle-%23F00000.svg?&style=for-the-badge&logo=oracle&logoColor=white" />
                `;
                resultArr.push(badge);
            break
            case 'Jest':
                badge = `<img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?&style=for-the-badge&logo=jest&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            case 'Mocha':
                badge = `<img alt="Mocha" src="https://img.shields.io/badge/-mocha-%238D6748?&style=for-the-badge&logo=mocha&logoColor=white"/>
                `;
                resultArr.push(badge);
            break
            default: 
                badge = '';
                resultArr.push(badge);
        }


    }

    return resultArr.join(' ');
}

module.exports = makeTechBadges;