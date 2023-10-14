const express = require("express");
const app = express();
const port = 3000;
const path = require('path')
app.use(express.static('./public'));
app.use(express.static('./views'));
// app.use(express.static(path.join('/public', '/css' , '/js' , '/data' , '/images')));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '/views/indx.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

