const axios = require('axios'); 

exports.handler = async (event, context) => {
  //query parameter
  const search = event.queryStringParameters.search;
  
  // //**** */.env variable --ADD TO ,gitignore file if needed *********
  // const API_SECRET = process.env.API_SECRET;
  
  //url 
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
  
  //make weather request to api 
  try {
    //axios request
    const { data } = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
      
    }

  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
}