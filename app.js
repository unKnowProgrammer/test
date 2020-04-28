const express = require('express');
let app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get("/:name" , (req , res) => {
	res.render("index" , {test : req.params.name});
})

app.listen(process.env.PORT || 3000)