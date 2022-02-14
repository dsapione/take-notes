const router = require("express").Router();
const { findById, createNewNotes, validateNotes} = require("../../lib/notes");
const { notes } = require("../../data/notes");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.delete("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);

  if (result) {
	notes.splice(result, 1)
    res.json(notes);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNotes(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNotes(req.body, notes);
    res.json(note);
  }
});

module.exports = router;