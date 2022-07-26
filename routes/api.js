const router = require('express').Router();
const fs = require('fs')
const path = require('path');

const dbPath = path.join(__dirname, '..', 'db', 'db.json')

function getNotes() {

   const content = fs.readFileSync(dbPath, 'utf-8')
   return JSON.parse(content) || []

}

router.get('/notes', (req, res) => {
    res.sendFile(path.join(dbPath, 'index.html'))
    const notes = getNotes();
    res.json(notes)
})


module.exports = router