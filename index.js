const express = require('express')
const app = express()
const PORT = 4000
const BP = require('body-parser')
app.use(BP.json())
app.use(BP.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`API Listening on PORT ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('This is my API running...')
})

//https://node-api-vercel-ecru.vercel.app/get/ITuCHKub
app.get('/get/:name', (req, res) => {
    let name = req.params.name;
    res.send('This is my Name  : ' + name )
})

//{  "name": "ituchkub",    "Mail": "ituchkub@gmail.com" }
app.post('/post', (req, res) => {   
   let Name = req.body.name;  
   let mail = req.body.mail;
   res.send('This is my Name  : ' + Name+' And My E-Mail : '+mail )
   //res.send(req.body)    {"name":"Kantathus","mail":"ituchkub@gmail.com"}
})

module.exports = app