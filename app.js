const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index", { page: "index" });
});

app.get("/about", function(req, res) {
    res.render("about", { page: "about" });
});

app.get("/contact", function(req, res) {
    res.render("contact", { page: "contact" });
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");
});
