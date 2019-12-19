const db = require('../utils/database.util');
const config = require('../configs/userModelConfig.json');

module.exports = {
    all: _ => db.load('select * from user'),
    search: (keyword) => db.load("SELECT * FROM user WHERE (username) LIKE '%" + keyword + "%'"),
    checkUser: (username, password) => db.load("SELECT * FROM user WHERE (username) = '" + username + "' AND" + "(password) = '" + password + "'"),
};