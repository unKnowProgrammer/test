const app = require ("express")()

const pug = require('pug');

// Compile the source code
const compiler = pug.compileFile(index.pug');

app.get ( "/" , (res , res ) => {

res.send (compiler ({test = "Furkan "}))
}

app.listen(process.env.PORT)
