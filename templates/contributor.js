class Contributor {
    constructor(name, email, github) {
        this.name = name,
        this.email = email,
        this.github = github
    }

    getName() {
        return this.name;
    };

    getEmail() {
        return this.email;
    };

    getGithub() {
        return this.github;
    };
    
}

module.exports = Contributor;