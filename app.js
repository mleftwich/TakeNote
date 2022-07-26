const express = require('express');
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'))
app.use(webRoutes);
app.use('/api', apiRoutes);
app.get("*", (req, res) => {
    res.status(404).send('Page not found')
})

app.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`)
})

