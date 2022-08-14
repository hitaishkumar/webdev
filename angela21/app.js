//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");


app.get("/", function(req, res){
    var today =  new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    
    let day = weekday[today.getDay()];
    let ajj_ka_din = ""

    if(day == 'Sunday'){
        ajj_ka_din = "Sunday hai YARAAAAAAAA";
    } else {
        ajj_ka_din = "Today is " + day;
    }

    res.render("list", 
    {aajj_ka_din_html_variable:ajj_ka_din}
    );

    
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
