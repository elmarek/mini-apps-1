const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, './client/dist')));

app.get('/', (req, res) => {
  console.log("successful connection")
  res.end()
})

app.listen(port, () =>  {
  console.log(`Hey guess what! Im listening on http://localhost:${port}!`);

})