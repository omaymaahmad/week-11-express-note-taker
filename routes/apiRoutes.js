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
router.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteId = (data.length).toString();
    console.log(noteId);
    newNote.id = noteId;
    data.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(data), function(err) {
        if (err) throw (err);
    });

    res.json(data);
});
   

//add a delete request to it
router.delete("/api/notes/:id", (req, res) => {
  let noteId = req.params.id;
  let newId = 0;
  console.log('deleting note ${noteId}');
  data = data.filter(currentNote => {
      return currentNote.id != noteId;
  });
  for (currentNote of data) {
      currentNote.id = newId.toString();
      newId++;
  }
  fs.writeFileSync('./db/db.json', JSON.stringify(data));
  res.json(data);

});
//export the router
module.exports = router;
