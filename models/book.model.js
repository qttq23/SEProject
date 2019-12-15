const db = require('../utils/database.util');
const config = require('../configs/bookModelConfig.json');

module.exports = {
    all: _ => db.load('select * from book'),
    //search: (keyword) => db.load("select * from book where match (title) against('-" + keyword + "')"),
    search: (keyword) => db.load("SELECT * FROM book WHERE (title) LIKE '%" + keyword + "%'"),

};