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
    res.send('This is my Name  : ' + name)
})

//{  "name": "ituchkub",    "Mail": "ituchkub@gmail.com" }
app.post('/post', (req, res) => {
    let Name = req.body.name;
    let mail = req.body.mail;
    res.send('This is my Name  : ' + Name + ' And My E-Mail : ' + mail)
    //res.send(req.body)    {"name":"Kantathus","mail":"ituchkub@gmail.com"}
})

app.post('/Author', async (req, res) => {
    const axios = require('axios');
    let reqe = await axios.post('https://third-party-authentication-sit.sritrangfriends.com/api/restful/v1/third-party/authentication', {
        clientID: "6cfbcf8f-45ed-4a14-b37f-7438eedbdd36",
        clientSecret: "MTE3MmNhNzctODA5NS00MTg4LWE0YTYtNDNlNjg4YzU1YTMy",
        grantType: "client_credentials"
    });
    let ress = {
        status: true,
        data: reqe.data
    }
})

app.post('/axios', async (req, res) => {

    var JDataA = {
        "activity": "1",
        "contractNo": "221234567",
        "subContractNo": "22123456701",
        "vPassDocumentNo": "SMR-22-1060-000001",
        "vPassDateIn": "2022-12-01",
        "vPassTimeIn": "07:29",
        "receivePlantCode": "1030"
    };
    let reqe = await axios.post('https://rubber-purchasing-integration-sit.sritrangfriends.com/api/restful/v1/rubber-trading/delivery/checked-in', JDataA, {
        headers: {
            'Authorization': 'Bearer Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJRCI6IjZjZmJjZjhmLTQ1ZWQtNGExNC1iMzdmLTc0MzhlZWRiZGQzNiIsImNyZWF0ZWRBdCI6IjIwMjItMTAtMjVUMDU6NDk6NDQuMjIzODc2NDIxWiIsImV4cGlyZXNJbiI6IjIwMjItMTAtMjVUMTM6NDk6NDQuMjIzODc1NjI4WiIsImlzcyI6ImNvbS5zcml0YW5nZnJpZW5kbmV4dCJ9.FoaYU4_U2JI_tLS2LN8rC11tnZfSkHurOdfoEDqrQAr4r2RqwZwxMIIKAhEss6VHuSYvaWfHK5c9JJcaTUVBDQ'
        }
    });
    let data = reqe.data;
    console.log(data)

})

app.post('/receiveQualityResult', (req, res) => {

    var JDataA = {
        "activity": "1",
        "contractNo": "221234567",
        "subContractNo": "22123456701",
        "materialCode": "FLTX002FSC100",
        "sclaeBillNo": "2205250032",
        "scaleNo": "2201016316",
        "dateTruckIn": "2022-12-01",
        "timeTruckIn": "07:00:01",
        "dateTruckOut": "2022-12-01",
        "timeTruckOut": "07:00:01",
        "dateDrainedWaterIn": "2022-12-01",
        "timeDrainedWaterIn": "08:00:01",
        "dateDrainedWaterOut": "2022-12-01",
        "timeDrainedWaterOut": "16:20:21",
        "vPassDateCheckOut": "2022-12-01",
        "vPassTimeCheckOut": "16:02",
        "weightIn": 4350,
        "weightOut": 2050,
        "goodsWeight": 2300,
        "createdBy": "John Doe",
        "qcTime": "15:40",
        "rejectType": "",
        "testResult": "A",
        "vfaResult": 0.070,
        "drcResult": 62.2,
        "nh3Result": 0.25,
        "formaldehydeResult": "0",
        "sulfateResult": "0",
        "contaminationBillURL": "",
        "complaintNo": "N-1030-2022000001",
        "contaminateValue": 2500,
        "contaminateDiscount": 500,
        "contaminateOutstanding": 2000,
        "qualityCheck": "0",
        "drcLabResult": 62.50
    };
    var request = require('request');
    request.post({
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJRCI6IjZjZmJjZjhmLTQ1ZWQtNGExNC1iMzdmLTc0MzhlZWRiZGQzNiIsImNyZWF0ZWRBdCI6IjIwMjItMTAtMjVUMDU6NDk6NDQuMjIzODc2NDIxWiIsImV4cGlyZXNJbiI6IjIwMjItMTAtMjVUMTM6NDk6NDQuMjIzODc1NjI4WiIsImlzcyI6ImNvbS5zcml0YW5nZnJpZW5kbmV4dCJ9.FoaYU4_U2JI_tLS2LN8rC11tnZfSkHurOdfoEDqrQAr4r2RqwZwxMIIKAhEss6VHuSYvaWfHK5c9JJcaTUVBDQ'
        },
        url: 'https://rubber-purchasing-integration-sit.sritrangfriends.com/api/restful/v1/rubber-trading/delivery/quality-result',
        body: JDataA,
        json: true
    }, function (error, response, body) {
        console.log(body);
        res.send(body);
    });

})
module.exports = app