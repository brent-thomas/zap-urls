import { generateRandomString } from './handlers/handlers';
const express = require('express');
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/', (req,res) =>{ 
    res.send('URL Shortener API is running')
})

app.post('/', req,res=>{
    const alias = req.body.alias
    const originalURL = req.body.originalURL
    const urlString = generateRandomString() 
    const zapURL = `https://zapurls.com/${alias}/${urlString}`
})

app.listen(port, ()=> {
    console.log(`Server is runnong on port ${port}`)
})