const generate = (obj) => {

    return `# ${obj.title}
    
### ${obj.short}

${obj.licenseBadge}  

## <a name="languages"></a> Languages
[Contents](#contents)  

## <a name="contents"></a>  Contents
- [Languages](#languages)
- [Description](#description)
- [Motivation](#motivation)
- [Usage](#usage)
- [Challenges](#challenges)
- [License](#license)
- [Contributors](#contributors)  

${obj.licenseText}

`
};

module.exports = generate;