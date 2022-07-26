const router = require('express').Router();
const path = require('path');

const pubPath = path.join(__dirname, '..', 'public')
router.get('/', (req, res) => {
    res.sendFile(path.join(pubPath, 'index.html'))
})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(pubPath, 'notes.html'))
})

module.exports = router