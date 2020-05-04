const express = require("express")
const app a0 express();

app.get("/" , (req , res) => {
res.send("Hello");
})

app.listen(process.env.PORT)
