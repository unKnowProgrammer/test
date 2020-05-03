const exp = require("express")
let app  = exp ()



app.get("/" , (req , res ) => {

res.send('Hello')
}

app.listen(process.env.PORT)
