const app = require("express")()

// const pug = require('pug');

// Compile the source code
// const compiler = pug.compileFile('./views/index.pug');

app.get( "/" , (req , res ) => {

res.send('compiler({test : "Furkan "})')
}

app.listen(process.env.PORT)
