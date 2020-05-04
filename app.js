const express = require("express")
let app = express();
const pug = require('pug');
const compiledFunction = pug.compileFile('./views/index.pug');

// app.get("/" , (req , res) => {
//     res.send(compiledFunction());
// })

app.get("/" , (req , res) => {
    res.send(pug.renderFile("./Views/index.pug"));
})


app.listen(process.env.PORT || 3000 )
