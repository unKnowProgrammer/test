const app = require("express")()



app.get( "/" , (req , res ) => {

res.send('compiler({test : "Furkan "})')
}

app.listen(process.env.PORT)
