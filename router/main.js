var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/about", function(req, res) {
    res.render("about.html");
  });
  app.get("/showlist", function(req, res) {
    res.render("table");
  });

  app.get("/updatelist", function(req, res) {
    // res.render("table.html");
    let resultList;

    MongoClient.connect(
      "mongodb://localhost:27017",
      { useUnifiedTopology: true },
      async function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo
          .collection("customers")
          .find({})
          .toArray(function(err, result) {
            resultList = result;
            if (err) throw err;
            console.log("find all : ", result);
            res.render("tableplace", { emp_list: resultList });
            db.close();
          });
      }
    );
  });
};
