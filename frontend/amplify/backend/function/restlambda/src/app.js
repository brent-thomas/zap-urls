
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const xss = require('xss');
const Joi = require('joi');
const app = express()
const {putItem, getURL} = require('./dynamo/config')
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

//joi schema
const schema = Joi.object({
  alias: Joi.string().alphanum().max(10).required(),
  longURL: Joi.string().uri().required()
});


/**********************
 * Example get method *
 **********************/

app.get('/api', (req,res)=>{
  res.json({success: 'URL Shortener API is running', url: req.url});
})

app.get('/r/:alias/:urlstring', async (req,res)=>{
    try {
    const data = await getURL(req.params.alias, req.params.urlstring)
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

app.get('/api/:alias', async (req,res)=>{
  res.json({success:'get url string call succedded'})
  // try {
  //   const data = await getURL(req.params.alias, req.params.urlString)
  //   if(data){
  //     res.redirect(302,data.longURL.S)
  //   } else {
  //     res.status(400).send('URL not found')
  //   }
  // } catch(error){
  //   console.error(error)
  //   res.status(500).send("Server Error")
  // }
})


// app.get('/items', function(req, res) {
//   // Add your code here
//   res.json({success: 'get call succeed!', url: req.url});
// });

// app.get('/items/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'get call succeed!', url: req.url});
// });

/****************************
* Example post method *
****************************/

app.post('/api/generateurl', async (req,res) =>{
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



app.post('/items', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/items', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/items', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
