// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/:dateString?", (req, res) => {
  const dateString = req.params.dateString;
  let date;
  if(!dateString){
    date = new Date();
  }else{
    if(!isNaN(dateString)){
      date = new Date(parseInt(dateString));
    }else{
      date = new Date(dateString);
    }
  }
  comprob = date.toString();
  if(comprob==="Invalid Date"){
    res.json({error: comprob})
  }else{
    res.json({"unix":date.getTime(), "utc":date.toUTCString()})
  }
})



// listen for requests :)
var listener = app.listen(8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
