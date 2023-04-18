// Requiring module
const express = require('express');
const path = require('path');
 
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
 
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));