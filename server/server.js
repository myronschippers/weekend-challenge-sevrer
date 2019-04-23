const express = require('express');
const app = express();
// local IP Address 216.21.164.135

// create public folder
app.use(express.static('server/public'));
// create folders in server/public
// - create 'scripts' child folder
// - create 'vendor' child folder
// - create 'styles' child folder

app.listen(5000, function() {
    console.log('Hey! The server is up and running!');
});
