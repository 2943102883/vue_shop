const express = require('express');
const compression = require('compression');

const app = express();

// 这一行代码要写在静态资源托管之前
app.use(compression())

app.use(express.static('./dist'));


app.listen(3001, function () {
    console.log('Express server running at http://localhost:3001');
})