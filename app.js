
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var conn = require('./connection/connection');
var login = require('./route/login');
var mysql = require('mysql');
var dotenv = require('dotenv');
var ejs = require('ejs');

var fileUpload = require('express-fileUpload');

var blog = require('./route/blog');
var login = require('./route/login');
var register = require('./route/register');
var admin = require('./route/admin');
var createuser = require('./route/createuser');
var edituser = require('./route/edituser');
var deleteuser = require('./route/deleteuser');
var post = require('./route/post');
var addPost = require('./route/addPost');
var deletePost = require('./route/deletePost');
var editPost = require('./route/editPost');
var singlePost = require('./route/singlePost');


dotenv.config();


var app = express();

app.use(express.static(__dirname + '/public'));

app.use(fileUpload(__dirname + '/public/css'));

app.set("views", path.join(__dirname + '/view'));
app.set('view engine', 'ejs');


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/', login);
app.use('/', register);
app.use('/', blog);
app.use('/', admin);
app.use('/', createuser);
app.use('/', edituser);
app.use('/', deleteuser);
app.use('/', post);
app.use('/', addPost);
app.use('/', deletePost);
app.use('/', editPost);
app.use('/', singlePost);










//app.get('/home', function(request, response) {
//	if (request.session.loggedin) {
//		response.send('Welcome back, ' + request.session.username + '!');
//	} else {
//		response.send('Please login to view this page!');
//	}
//	response.end();
//});
app.listen(process.env.SERVER_PORT, () => console.log('Server start ${process.env.SERVER_PORT} '));