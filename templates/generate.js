const makeTechBadges = require('./makeTechBadges');

const generate = (obj) => {

    return `# ${obj.title}
    
### ${obj.short}

${obj.licenseBadge}  

## <a name="languages"></a> Languages
[Contents](#contents)  
${makeTechBadges(obj.languages)}

## <a name="contents"></a>  Contents
- [Languages](#languages)
- [Description](#description)
- [Motivation](#motivation)
- [Usage](#usage)
- [Challenges](#challenges)
- [Contributors](#contributors)  
- [License](#license)


## <a name="description"></a> Description
[Contents](#contents)  
${obj.long}

## <a name="motivation"></a> Motivation
[Contents](#contents)  
${obj.motivation}

## <a name="usage"></a> Usage
[Contents](#contents)  
${obj.usage}

## <a name="challenges"></a> Challenges & Lessons Learned
[Contents](#contents)  
${obj.challenges}

## <a name="contributors"></a> Contributors
[Contents](#contents)  
${obj.contributors}

## <a name="license"></a> License
[Contents](#contents)  
${obj.licenseText}`
};

module.exports = generate;