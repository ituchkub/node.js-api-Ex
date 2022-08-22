const express = require('express')
const app = express()
const PORT = 4000
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

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

//{  "Name": "ituchkub",    "Mail": "ituchkub@gmail.com" }
app.post('/post', (req, res) => {

   
   let name = req.body.name;
   let Mail = req.body.Mail;
   res.send('This is my Name  : ' + name+' And My E-Mail : '+Mail )
   // res.send(req.body)
})

module.exports = app