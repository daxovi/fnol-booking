const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./databaze/connect");
const getMaterials = require("./routes/GET/getMaterial");
const saveMaterial = require("./routes/POST/saveMaterial");

db.connect();

// Middleware
// Povolme přijímat JSON z frontendu
app.use(express.json({extended:false}));

// GET
app.use("/", getMaterials);

// POST
app.use("/", saveMaterial);

app.get("/", (req, res) => {
    res.send("jsi na hlavní stránce");
})

app.listen(PORT, (err) => {
    console.log("Server běží na " + PORT)
})
