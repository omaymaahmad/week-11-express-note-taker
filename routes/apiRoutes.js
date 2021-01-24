//create a router
const express = require("express");
const databaseFunctions = require("../db/database");
const router = express.Router();

const fs = require("fs");

//add a get request to it
router.get("/api/notes", (req, res) => {
  databaseFunctions.getNotes().then((myNotes) => {
    res.json(myNotes);
  });

  router.get("/api/notes/:id", function (req, res) {
    res.json(myNotes[Number(req.params.id)]);
  });
  // Should read the `db.json` file and return all saved notes as JSON
});
//add a post request to it
router.post("/api/notes", (req, res) => {});
   

//add a delete request to it
router.delete("/api/notes", (req, res) => {
  let noteId = req.params;
});
//export the router
module.exports = router;
