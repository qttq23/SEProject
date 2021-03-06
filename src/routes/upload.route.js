var express = require('express');
var router = express.Router();
var moment = require('moment');

const bookModel = require('../models/book.model');

router.get('/upload', async function(req, res) {
    if (req.session.authUser === null || req.session.authUser === undefined) {

        res.status(404) // HTTP status 404: NotFound
            .render('empty', { message: 'Login as a merchant to upload' });
        return;
    }

    if (req.session.authUser.type === 0 || req.session.authUser.type === undefined) {

        res.status(404) // HTTP status 404: NotFound
            .render('empty', { message: 'Register as a merchant to upload' });
        return;
    }

    res.render('merchant/uploadBook', { title: 'Upload a book:', err: req.statusCode === 400 });
});

router.post('/upload', async function(req, res) {
    if (req.session.authUser === null || req.session.authUser.type === "0" || req.session.authUser.type === undefined) {
        res.status(404) // HTTP status 404: NotFound
            .send('Not found');
        return;
    }

    const multer = require('multer');
    var fs = require('fs');

    var lastBook = (await bookModel.getLastId());
    var lastId;

    if (lastBook.length === 0) {
        lastId = 1;
    } else {
        lastId = lastBook[0].id + 1;
    }

    var newId = lastId.toString(10);
    var dir = `./public/images/books/${newId}/`;
    var showDir = `images/books/${newId}/`;
    var pictureDir = [];

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    const storage = multer.diskStorage({
        filename: function(req, file, cb) {
            if (!req.headers.index)
                req.headers.index = 0
            var filename = (req.headers.index++) + "." + file.originalname.split('.').pop();
            pictureDir.push(showDir + filename);
            cb(null, filename);
        },
        destination: function(req, file, cb) {
            cb(null, dir);
        },
    });

    const upload = multer({ storage });

    upload.array('images', 5)(req, res, async function(err) {
        if (err) {
            res.render('merchant/uploadBook', { title: 'Upload a product:' });
        } else {
            if (pictureDir.length > 0) {
                var nowDate = Date.now();
                //Init the params here
                var book = {
                    "title": mysql_real_escape_string(req.body.title),
                    "created_at": moment(nowDate).format('YYYY-MM-DD hh:mm:ss'),
                    "description": mysql_real_escape_string(req.body.description),
                    "original_publication_year": req.body.published,
                    "note": mysql_real_escape_string(req.body.price),
                    "username": req.session.authUser.username,
                    "author": mysql_real_escape_string(req.body.author),
                    "img_url": pictureDir[0],
                    "img_url1": pictureDir[1],
                    "img_url2": pictureDir[2],
                }
                if (await bookModel.add(book))
                    res.redirect('/all');
                else
                    res.status(400).redirect('merchant/uploadBook', { title: 'Upload a product:', err: true });
            }

        }
    });
});

router.get('/upload/policy', async function(req, res) {
    res.render('policy');
});

function mysql_real_escape_string(str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function(char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\" + char;
        }
    });
}


module.exports = router;