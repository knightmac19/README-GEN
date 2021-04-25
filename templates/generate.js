const generate = (obj) => {

    return `# ${obj.title}
    
### ${obj.short}

${obj.licenseBadge}

${obj.licenseText}

`
};

module.exports = generate;