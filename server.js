var main = require ("markov-chain-nlg");
var path = require ("path");
var express = require ("express");
var app     = express();

const MAIN_PORT = 5050;

app.get ("/generate", (req, res) => {
  res.send (main.generate (500));
})
app.get ("/", (req, res) => {
  res.sendFile (path.join(__dirname, "./public/main.html"));
});

app.use (express.static ('./public'));

var port = MAIN_PORT;
main.trainJson ("data/weird-al.json", false, 2).then (() => {
  app.listen (port, ()=>{
    console.log (`Server is listening on port ${port}`);
  });
});
