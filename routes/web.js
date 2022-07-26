// IMPORT DEPENDENCIES
const router = require('express').Router();
const path = require('path');

// REROUTE TO INDEX.HTML
const pubPath = path.join(__dirname, '..', 'public')
router.get('/', (req, res) => {
    res.sendFile(path.join(pubPath, 'index.html'))
})

// REROUTE TO NOTES.HTML WHEN URL /NOTES
router.get('/notes', (req, res) => {
    res.sendFile(path.join(pubPath, 'notes.html'))
})

module.exports = router