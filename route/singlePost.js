const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/singlePost/:id', function (request, response) {
    var id = request.params.id;
    conn.query('SELECT * FROM posts WHERE id = ?', [id], function (error, result, fields) {
        if (!error) {
            response.render('singlePost', { users: result[0] });
        } else {
            console.log(error);
        }
    })
});


module.exports = router;