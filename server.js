var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

var reserved = [];
var waitlist = [];

app.get("/api/tables", (req, res) => {
    res.json(reserved);
});

app.get("/api/waitlist", (req, res) => {
    res.json(waitlist);
});

<<<<<<< HEAD

//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);



=======
<<<<<<< HEAD
>>>>>>> a0b25ea59565d3b9426cd13e50e86cf4a921ad3c
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
=======
app.post("/api/tables", (req, res) => {
    var newReservation = req.body;
    if (reserved.length < 5){
        reserved.push(newReservation);
        res.json(true);
    } else {
        waitlist.push(newReservation);
        res.json(false);
    }
>>>>>>> 7e20db705c4404b4dda624cf6de7f78fb6a143ce
});