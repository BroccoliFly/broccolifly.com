var connect = require("connect");

var app = connect();

app.use(connect.static(__dirname));

app.listen(8567);
console.log("Server running on port 8567");