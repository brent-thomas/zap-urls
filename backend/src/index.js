require('dotenv').config();
const Joi = require('joi');
const xss = require('xss');
const serverless = require('serverless-http');
const schema = Joi.object({
    alias: Joi.string().alphanum().max(10).required(),
    longURL: Joi.string().uri().required()
});
const {putItem, getURL} = require('./config/dynamodb-utils')
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000



app.use(bodyParser.json())
app.use(cors());
app.get('/', (req,res) =>{ 
    res.send('URL Shortener API is running')
})

app.get('/:alias/:urlString', async (req,res)=>{
  try {
    const data = await getURL(req.params.alias, req.params.urlString)
    if(data){
      res.redirect(302,data.longURL.S)
    } else {
      res.status(400).send('URL not found')
    }
  } catch(error){
    console.error(error)
    res.status(500).send("Server Error")
  }
})

app.post('/generateurl', async (req,res) =>{
    let {alias, longURL} = req.body
    alias = xss(alias)
    longURL = xss(longURL);
    const { error } = schema.validate({alias,longURL});
    if (error) {
        console.log('schema validate error')
        console.log(error)
        return res.status(400).json({ error: 'Please provide a valid URL that includes HTTP:// or HTTPS://' });
    }
    try {
      const zapURL = await putItem(alias,longURL)
      res.json({zapURL});
    }catch(error){
      console.error("Error generating URL: ", error)
      res.status(500).json({ error: 'Server error during URL generation.' });
    }
})

module.exports.handler = serverless(app);