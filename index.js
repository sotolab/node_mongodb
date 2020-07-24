let express = require("express");
let app = express();
let router = require("./router/main")(app);
let database = require("./database/config");
let port = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

let server = app.listen(port, function() {
  console.log("Express server has started on port " + port);
});
