var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.render('index' {test : "Furkan "});
});

http.listen(process.env.PORT, () => {
  console.log('listening on *:3000');
});
