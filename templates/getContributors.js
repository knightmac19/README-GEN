const getContributors = (arr) => {
    let resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        let string = `- ${arr[i].name} // [${arr[i].email}](mailto:${arr[i].email}) // [github.com/${arr[i].github}](https://github.com/${arr[i].github})  `;
        resultArr.push(string);
    }

    return resultArr.join('\n');

};


module.exports = getContributors;