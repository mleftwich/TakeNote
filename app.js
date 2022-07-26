// IMPORT DEPENDENCIES
const express = require('express');
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const PORT = process.env.PORT || 3001;

const app = express();

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(webRoutes);
app.use('/api', apiRoutes);

// LISTEN IN TO PORT NOTIFY USER
app.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`)
})

