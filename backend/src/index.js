require('dotenv').config();
const Joi = require('joi');
const xss = require('xss');
const schema = Joi.object({
    alias: Joi.string().alphanum().max(10).required(),
    originalURL: Joi.string().uri().required()
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
      res.redirect(302,data.originalURL.S)
    } else {
      res.status(400).send('URL not found')
    }
  } catch(error){
    console.error(error)
    res.status(500).send("Server Error")
  }
})

app.post('/generateURL', async (req,res) =>{
    let {alias, originalURL} = req.body
    alias = xss(alias)
    originalURL = xss(originalURL);
    const { error } = schema.validate({alias,originalURL});
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
      const zapURL = await putItem(alias,originalURL)
      res.json({zapURL});
    }catch(error){
      console.error("Error generating URL: ", error)
      res.status(500).json({ error: 'Server error during URL generation.' });
    }
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})
