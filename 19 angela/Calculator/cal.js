const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
    // res.send(" <h1>Thanks for Submission</h1>");
    var one = Number(req.body.h)
    var two = Number(req.body.w)
    
    res.send("<h1>The Floored BMI is </h1> "+ Math.floor(one/two) );
    
}); 

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');  
});