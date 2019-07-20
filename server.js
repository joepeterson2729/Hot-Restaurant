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

var reserved = [{
    customerName: "asdf",
    phoneNumber: "123456789",
    customerEmail: "asdf",
    customerID: "asdf"
}];
var waitlist  = [{
    customerName: "asdf",
    phoneNumber: "123456789",
    customerEmail: "asdf",
    customerID: "asdf"
}];

app.get("/api/tables", (req, res) => {
    res.json(reserved);
});

app.get("/api/waitlist", (req, res) => {
    res.json(waitlist);
});
