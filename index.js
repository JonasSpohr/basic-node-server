const express = require('express')  
const app = express()  
const port = 3000;


app.get('/', (request, response) => {  
  response.send('Hello world using express!')
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('oops, something went wrong :(', err)
  }

  console.log(`listening on ${port}`);
});