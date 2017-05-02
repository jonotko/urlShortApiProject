var express = require("express");
var isUrl = require("is-url");
var TinyURL = require("tinyurl");


var app = express();

app.get("/", function(req, res){
    
    res.send("SHORT URL API PROJECT");
});

app.get("/:urlString(*)", function(req, res){
    var jsonObject = {
        error: "URL invalid"
    };
    if(isUrl(req.params.urlString)){
       TinyURL.shorten('http://google.com', function(shurl) {
            //console.log(res); //Returns a shorter version of http://google.com - http://tinyurl.com/2tx 
            jsonObject = {
                original_url: req.params.urlString,
                short_url: shurl
            }
            res.send(jsonObject);
        });
    }else{
       res.send(jsonObject);
    }
    //console.log(req.params.urlString);
});



app.listen(process.env.PORT, function(){
    console.log("Server is runningg");
});