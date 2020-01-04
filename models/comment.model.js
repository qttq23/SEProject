const db = require('../utils/database.util');

module.exports = {
    getByBookId: (id) => db.load(`select * from comment WHERE (book_id)=${id}`),
    add: (info) => {
        var query = "INSERT INTO comment (";

        for (var key in info) {
            if (info.hasOwnProperty(key)) {
                query = query + "`" + key + "`,";
            }
        }

        query = query.substring(0, query.length - 1) + ") VALUES (";

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
            console.log("can't add comment");
            return false;
        }
        return true;
    },
};