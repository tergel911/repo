var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');


router.get('/editPost/:id', function(request, response) {
    var id = request.params.id;
    connection.query('SELECT * FROM posts WHERE id = ?', [id], function (error, results, fields) {
        if (!error) {
            response.render("editPost", {blog: results[0]});
        }  else {
            console.log(error);
        }            
    })
});



router.post('/edit/post/:id', function(request, response) {
    var title = request.body.title;
    var about = request.body.about;
    var date= Date();
    var photo = request.files.picture;
    var fileName = photo.name;
    var id = request.params.id;
    connection.query('UPDATE posts SET title =?, about =?, date =?, picture =?   WHERE id = ?', [title,about,date,fileName,id], function (error, results, fields) {
        if (!error) {
            request.session.loggedin = true;
            photo.mv('/public/images/' + fileName);
            response.redirect("/post");
        }  else {
            console.log(error);
        }            
    })
});



module.exports = router;