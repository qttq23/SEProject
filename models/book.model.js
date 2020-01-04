const db = require('../utils/database.util');
const config = require('../configs/bookModelConfig.json');

module.exports = {
    all: _ => db.load('select * from book'),
    //search: (keyword) => db.load("select * from book where match (title) against('-" + keyword + "')"),
    search: (keyword) => db.load("SELECT * FROM book WHERE (title) LIKE '%" + keyword + "%'"),
    getById: (id) => db.load("SELECT * FROM book WHERE (id)=" + id),
    getLastId: () => db.load('SELECT id FROM book ORDER BY id DESC LIMIT 1'),
    add: (info) => {
        var query = "INSERT INTO book (id,";

        for (var key in info) {
            if (info.hasOwnProperty(key)) {
                query = query + "`" + key + "`,";
            }
        }

        query = query.substring(0, query.length - 1) + ") VALUES (NULL,";

        for (var key in info) {
            if (info.hasOwnProperty(key)) {

                query = query + "'" + info[key] + "',";
            }
        }

        console.log(query);
        query = query.substring(0, query.length - 1) + ");";

        try {
            db.load(query);
        } catch {
            console.log("can't add device");
            return false;
        }
        return true;
    },
};