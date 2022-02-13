const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {

  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function createNewNotes(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/notes.json'),
    JSON.stringify({notes: notesArray}, null, 2)
  );
  return note;
}

module.exports = {
  filterByQuery,
  findById,
  createNewNotes
};