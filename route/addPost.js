var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');

router.get('/addPost', function (request, response) {
    response.render("addPost");
});
router.post('/addPost', function (request, response) {
    var title = request.body.title;
    var about = request.body.about;
    var date = request.body.date;
    var photo = request.files.photo;
    var fileName = photo.name;
    
    photo.mv('/public/images/' + fileName);

        connection.query('INSERT INTO `posts` ( title, about, date, picture) VALUES (?,?,?,?)', [ title, about, date, fileName],
        function (error, results, fields) {
                if (!error) {
                    response.redirect('/post');
                }  else {
                    console.log(error);
                }           
            });
        
    });

module.exports = router;


