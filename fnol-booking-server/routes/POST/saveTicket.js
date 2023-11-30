const saveTicket = require("express").Router();
const ticketModel = require("../../models/ticket");

saveTicket.post("/save-ticket", (req, res) => {
   const {ticket, email, date} = req.body; // jde dekonstruovat všechny vlastnosti

   const surovina = new ticketModel({
      ticket: ticket,
      email: email,
      date: date
   })
   surovina
      .save()
      .then(() => {
         res.sendStatus(200);
      })
      .catch((err) => {
         console.log("surovina nebyla uložena");
         res.sendStatus(500);
      });
})

saveTicket.get("/save-ticket", (req, res) => {
   res.send("Ano, navštívil jsi /save-ticket POSTem");
})

module.exports = saveTicket;