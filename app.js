const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");
});
