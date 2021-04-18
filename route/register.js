const express = require('express');
const router = express.Router();
var path = require('path');
const connection = require('../connection/connection');

router.get('/register', function(request, response) {
	response.render("register");
});

router.post('/register',function(request, response){
    var username=request.body.username;
    var password=request.body.password;
    var email=request.body.email;
    connection.query('INSERT INTO `accounts` ( `username`, `password`, `email`) VALUES (?,?,?);', [username, password, email], 
    function(error, results, fields){
        response.redirect('/login'); 
    });

}) 

module.exports = router;

