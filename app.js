const express = require("express")
let app = express();
const pug = require('pug');
const compiledFunction = pug.compileFile('./views/index.pug');

app.get("/" , (req , res) => {
    res.send(compiledFunction());
})

app.listen(process.env.PORT)
