var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser')
var parseObj = require('./model.js')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static('client'))



app.post('/upload_json', (req, res) => {
  console.log("body!!!! :", typeof req.body.data)


  console.log("parseObj RESULT :", parseObj.parseObj(req.body.data))
  res.send(parseObj.parseObj(req.body.data))
  res.status(201)
  res.end()
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

