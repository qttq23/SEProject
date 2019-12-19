const db = require('../utils/database.util');
const config = require('../configs/userModelConfig.json');

module.exports = {
    all: _ => db.load('select * from user'),
    getByUsername: (username) => db.load("SELECT * FROM user WHERE (username)=" + username),
    checkAccountValidated: (username, password) => db.load("SELECT * FROM user WHERE (username)='" + username + "' AND (password)='" + password + "'")
        // '${username}'AND (password)='${password}'
};