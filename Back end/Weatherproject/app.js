const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
    const city = req.body.city;
    const appid = "13bebab2b3d6d1275c3ff29b188b2d80";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appid+"&units="+units;
    https.get(url,(response) => {
        response.on("data", (data) => {
            const weather = JSON.parse(data);
            const temp = weather.main.temp;
            const weatherDescription = weather.weather[0].description;
            const icon = weather.weather[0].icon;
            const imageurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<h1>The temperature in "+city+" is " + temp + " degrees Celcius.</h1>");
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<img src=" + imageurl+">");
            res.send();
        }); 
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});