const db = require('../utils/database.util');
const config = require('../configs/userModelConfig.json');

module.exports = {
    all: _ => db.load('select * from user'),
    getByUsername: (username) => db.load(`SELECT * FROM user WHERE (username)='${username}'`),
    // checkAccountValidated: (username, password) => db.load("SELECT * FROM user WHERE (username)='" + username + "' AND (password)='" + password + "'"),
    //     // '${username}'AND (password)='${password}'
    add: entity => db.add(entity, 'user'),
    singleByUserName: async username => {
        const rows = await db.load(`select * from user where username = '${username}'`);
        if (rows.length > 0)
            return rows[0];

        return null;
    },
    checkAccountValidated: async(username, password) => {
        const rows = await db.load(`select * from user where username = '${username}' and password = '${password}'`);
        if (rows.length > 0)
            return rows[0];

        return null;
    },
    checkEmailValidated: async(email) => {
        const rows = await db.load(`select * from user where email = '${email}'`);
        if (rows.length > 0)
            return rows[0];
        return null;
    }
};