let express = require('express');
let app = express();

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
  res.json({ "message": "Hello json" })
})

































 module.exports = app;
