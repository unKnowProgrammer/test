const express = require("express")
let app = express();
const pug = require('pug');
const compiledFunction = pug.compileFile('./Views/index.pug');

app.get("/" , (req , res) => {
    res.send(compiledFunction());
})

app.listen(process.env.PORT || 3000 )
