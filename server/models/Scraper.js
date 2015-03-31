var mongoose = require("mongoose");

var scraperSchema = mongoose.Schema({
  title: {type:String, required:"{PATH} is required!"},
  url: {type:String},
  active: {type:Boolean, default:true},
  scrapeDate: {type:Date, required:"{PATH} is required!"}
});

var Scraper = mongoose.model("Scraper", scraperSchema);

function createDefaultScrapers() {
  Scraper.find({}).exec(function(err, collection){
    if(collection.length === 0){
      Scraper.create({title: 'PowerBall', url: 'http://www.powerball.com/pb_home.asp', active: true, scrapeDate: new Date('2010-06-06T14:56:59.301Z')});
      Scraper.create({title: 'MegaMillons', url: 'http://www.megamillions.com/', active: true, scrapeDate: new Date('2010-06-07T04:56:59.301Z')});
      
    }
    if(err){
      console.log(err.message);
    }
  });
}

exports.createDefaultScrapers = createDefaultScrapers;