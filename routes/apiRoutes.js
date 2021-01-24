//dependencies 
const express = require("express");
const databaseFunctions = require("../db/database");
const router = express.Router();


//get request
router.get("/notes", (req, res) => {
  databaseFunctions.getNotes().then((myNotes) => {
    res.json(myNotes);
  });



});
//post request
router.post("/notes", (req, res) => {
  databaseFunctions.addNote(req.body).then(() => {
    res.sendStatus(200)
  })
});
   

//delete request
router.delete("/notes/:id", (req, res) => {
  let noteId = req.params.id;
  databaseFunctions.deleteNote(req.params.id).then(() => {
    res.sendStatus(200)
  })


});
//export the router
module.exports = router;
