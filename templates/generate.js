const makeTechBadges = require('./makeTechBadges');
// const makeTechBadges = require('./makeTechBadges');

const generate = (obj) => {

    return `# ${obj.title}
    
### ${obj.short}

${obj.licenseBadge}  

## <a name="languages"></a> Languages & Technologies
[Contents](#contents)  
${makeTechBadges(obj.languages)}

## <a name="contents"></a>  Contents
- [Languages](#languages)
- [Description](#description)
- [Motivation](#motivation)
- [Usage](#usage)
- [Screenshots](#screenshots)
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

## <a name="screenshots"></a> Screenshots
[Contents](#contents)  

## <a name="challenges"></a> Challenges & Lessons Learned
[Contents](#contents)  
${obj.challenges}

## <a name="contributors"></a> Contributors
[Contents](#contents)  
- Patrick Dunn // [pmdunn78@gmail.com](mailto:pmdunn78@gmail.com) // [github.com/knightmac19](https://github.com/knightmac19)  <br>
- Patrick Dunn // [pmdunn78@gmail.com](mailto:pmdunn78@gmail.com) // [github.com/knightmac19](https://github.com/knightmac19)  <br>

## <a name="license"></a> License
[Contents](#contents)  
${obj.licenseText}`
};

module.exports = generate;