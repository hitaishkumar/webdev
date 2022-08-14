const express = require('express');
const app = express();

app.get('/', (request, response) => {
    // console.log(response, request);
    response.send("<h1>Hello, world!</h1>");
});
app.get('/contact', (request, response) => {    
    response.send("<a href='https://github.com/hitaishkumar/Learning'> Github Account Contact </a>  <br/> <h2>above is my Github contact</h2>"); 
});
app.get('/hobbies', (request, response) => {    
    response.send("<h1 >Welcome Github no Account Contact </h1>"); 
});

app.listen(3000, function () { 
    console.log('listening on port 3000');
});