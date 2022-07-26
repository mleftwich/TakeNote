// IMPORT DEPENDENCIES
const router = require("express").Router();
const { doesNotMatch } = require("assert");
const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

// DEFINE DATABASE PATH
const dbPath = path.join(__dirname, "..", "db", "db.json");

// FUNCTION TO RETRIEVE EXISTING NOTES
function getNotes() {
  const content = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(content) || [];
}

// FUNCTION TO CREATE NEW NOTE
function saveNote(title, text) {
  const newNote = {
    id: uuid.v4(),
    title,
    text,
  };
  const notes = getNotes();
  notes.push(newNote);
  fs.writeFileSync(dbPath, JSON.stringify(notes), "utf-8");
  return newNote;
}

// FUNCTION TO DELETE NOTE
function deleteNote(id) {
    const notes = getNotes()
    const filtered = notes.filter((note) => note.id != id)
    fs.writeFileSync(dbPath, JSON.stringify(filtered), 'utf-8');
}

// GET REQUEST POPULATES TABLE WITH NOTES
router.get("/notes", (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

// POST REQUEST SAVES A NEW NOTE
router.post("/notes", (req, res) => {
  const output = saveNote(req.body.title, req.body.text);
  res.json(output);
});

// DELETE EXISTING NOTE
router.delete("/notes/:id", (req, res) => {
    deleteNote(req.params.id);
    res.json({
        data: 'done'
    })
  });

module.exports = router;
