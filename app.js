const app = require("express")()



app.get( "/" , (req , res ) => {

res.send('Hello')
}

app.listen(process.env.PORT)
