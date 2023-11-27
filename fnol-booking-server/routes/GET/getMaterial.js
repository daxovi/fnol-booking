const getMaterials = require("express").Router();
getMaterials.get("/get-materials", (req,res) => { 
    res.json({
        msg:"Úspěšně jsem získal suroviny",
        seznamSurovin:[
            {surovina:"Mrkev"},
            {surovina:"Celer"},
            {surovina:"Brambora"}
        ]
    });
 })

 module.exports = getMaterials;