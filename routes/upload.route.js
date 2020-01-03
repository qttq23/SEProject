var express = require('express');
var router = express.Router();
var moment = require('moment');

const bookModel = require('../models/book.model');

router.get('/upload', async function(req, res) {
    if (req.session.authUser === null || req.session.authUser.type === "0" || req.session.authUser.type === undefined) {
        res.status(404) // HTTP status 404: NotFound
            .send('Not found');
        return;
    }
    res.render('merchant/uploadBook', { title: 'Upload a book:' });
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
                    "title": req.body.title,
                    "created_at": moment(nowDate).format('YYYY-MM-DD hh:mm:ss'),
                    "description": req.body.description,
                    "original_publication_year": req.body.published,
                    "price": req.body.price,
                    "author": req.body.author,
                    "img_url": pictureDir[0],
                    "img_url1": pictureDir[1],
                    "img_url2": pictureDir[2],
                }
                if (await bookModel.add(book))
                    res.render('index');
                else
                    res.render('merchant/uploadBook', { title: 'Upload a product:' });
            }

        }
    });
});
module.exports = router;