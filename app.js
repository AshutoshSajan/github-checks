const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.status(200).send({hello: "world"});
});

const listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Your app is listening on port ' + process.env.PORT || 3000);
});
