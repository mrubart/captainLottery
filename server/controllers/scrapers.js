var Scraper = require("mongoose").model('Scraper');
var request = require("request");

exports.getScrapers = function(req,res) {
  Scraper.find({}).exec(function(err, collection){
    if(err)
    {
      console.log("Error: getScrapers - " + err.message);
    }
    res.send(collection);
  });
};

exports.getScraperById = function(req, res){
  Scraper.findOne({_id:req.params.id}).exec(function(err, scraper){
    if(err)
    {
      console.log("Error: getScraperById - " + err.message);
    }
    res.send(scraper);
  });
};

exports.scrapePowerballs = function(req,res){
  var url = "http://data.ny.gov/resource/d6yy-54nr.json";
  request({url: url,json: true}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      for(var i = 0; i < body.length; i++){
        var drawDeets = body[i];
        var drawDate = new Date(drawDeets.draw_date);
        var arrNumbers = drawDeets.winning_numbers.split(" ");
        var whiteball_1 = arrNumbers[0];
        var whiteball_2 = arrNumbers[1];
        var whiteball_3 = arrNumbers[2];
        var whiteball_4 = arrNumbers[3];
        var whiteball_5 = arrNumbers[4];
        var powerball = arrNumbers[5];
        var multiplier = drawDeets.multiplier;
       
      }
      res.send("total of " + body.length + " drawings retrieved");
    }
    if(error)
    {
      console.log(error.message);
    }
  });
};