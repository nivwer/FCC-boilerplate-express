let express = require('express');
let app = express();
let dotenv = require('dotenv').config()

// Solution 1:
// console.log('Hello World')


// Solution 2:
// app.get('/', (req, res) => {
//    res.send('Hello Express');
//  });


// Solution 3:
app.get('/', (req, res) => {
  const Path = __dirname + "/views/index.html"
  res.sendFile(Path);
});
  
// Solution 4:
app.use('/public', express.static(__dirname + "/public"));

// Solution 5:
app.get('/json', (req, res) => {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ "message": message })
})

































 module.exports = app;
