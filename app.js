const express = require("express")
let app = express();
const pug = require('pug');

app.get("/" , (req , res) => {
    res.send(pug.renderFile("./views/index.pug"));
})

app.listen(process.env.PORT)
