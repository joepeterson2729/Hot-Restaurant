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

var reserved = [];
var waitlist = [];

app.get("/api/tables", (req, res) => {
    res.json(reserved);
});

app.get("/api/waitlist", (req, res) => {
    res.json(waitlist);
});

app.post("/api/tables", (req, res) => {
    var newReservation = req.body;
    if (reserved.length < 5){
        reserved.push(newReservation);
        res.json(true);
    } else {
        waitlist.push(newReservation);
        res.json(false);
    }
});


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/api/tables", (req, res) => {
    var newReservation = req.body;
    if (reserved.length < 5){
        reserved.push(newReservation);
        res.json(true);
    } else {
        waitlist.push(newReservation);
        res.json(false);
    }
});
