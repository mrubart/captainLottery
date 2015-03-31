var request = require("request");

var url = "http://data.ny.gov/resource/d6yy-54nr.json";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body); // Print the json response
    }
    if(error)
    {
      console.log(error.message);
    }
});


/*

megamillions url
http://data.ny.gov/resource/5xaw-6ayf.json

https://data.ny.gov/Government-Finance/Lottery-Mega-Millions-Winning-Numbers-Beginning-20/5xaw-6ayf?


power ball url
http://data.ny.gov/resource/d6yy-54nr.json

https://data.ny.gov/Government-Finance/Lottery-Powerball-Winning-Numbers-Beginning-2010/d6yy-54nr?
*/