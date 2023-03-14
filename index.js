const express = require("express");
const contacts = require("./contacts");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Express.js server");
})

app.get("/contacts", (req,res) => {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(contacts));
})

app.get("/about", (req,res) => {
    res.send("<h1> You have navigated to about </h1>");
})

app.listen(3000, ()=>{
    console.log("Node server started on port 3000");
})