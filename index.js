const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`API Listening on PORT ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('This is my API running...')
})

app.get('/get/:name', (req, res) => {
    let name = req.params.name;
    res.send('This is my E-mail : ' + name )
})

app.post('/post/', (req, res) => {
    let name = req.body.name;
    res.send('This is my Name ' + name )
})

module.exports = app