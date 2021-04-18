
import * as fs1 from 'fs'; 

readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});

var fs = require('fs');

fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});