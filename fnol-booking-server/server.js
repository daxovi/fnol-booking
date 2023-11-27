const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./databaze/connect");
db.connect();

app.get("/", (req,res) => { 
    res.send("jsi na hlavní stránce");
 })

 app.listen(PORT, (err) => {
    console.log("Server běží na " + PORT)
 })