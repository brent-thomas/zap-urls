const { v4: uuidv4 } = require('uuid');
const { DynamoDBClient, PutItemCommand, GetItemCommand } = require('@aws-sdk/client-dynamodb');
const {generateRandomString} = require('../handlers/handlers')
require('dotenv').config();

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const putItem = async (alias, longURL) => {
  const urlString = generateRandomString() 
  const zapURL = `https://zapurls.com/${alias}/${urlString}`
  const id = uuidv4(); // Generate a new UUID
  const params = {
    TableName: 'Zappies',
    Item: {
      id: { S: id }, // Use the UUID as the 'id' attribute
      alias: { S: alias },
      longURL: { S: longURL },
      urlString: {S:urlString},
      zapURL: {S:zapURL},
      timestamp: { N: `${Date.now()}` },
      clickCount: { N: '0' },
    }
  };

  try {
    const data = await client.send(new PutItemCommand(params));
    console.log("Item added:", data);
    console.log(zapURL)
    return zapURL
  } catch (err) {
    console.error("Error:", err);
  }
};


async function getURL(alias,urlString) {
  const params = {
    TableName: 'Zappies',
    Key: {
      alias: {S: alias},
      urlString: {S:urlString}
    }
  }

  try {
    const {Item} = await client.send(new GetItemCommand(params))
    return Item
  } catch(err){
      console.log("Error fetching URL", err)
      return null
  }
}


module.exports = {
  putItem,
  getURL
}



// const putItem = async () => {
//   const id = uuidv4(); // Generate a new UUID
//   const params = {
//     TableName: 'ZapURLs',
//     Item: {
//       id: { S: id }, // Use the UUID as the 'id' attribute
//       alias: { S: 'exampleAlias' },
//       originalURL: { S: 'https://example.com' },
//       timestamp: { N: `${Date.now()}` },
//       clickCount: { N: '0' }
//     }
//   };

//   try {
//     const data = await client.send(new PutItemCommand(params));
//     console.log("Item added:", data);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// };

// putItem();