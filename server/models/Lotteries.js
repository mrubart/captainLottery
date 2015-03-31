var mongoose = require("mongoose");

var lotteriesSchema = mongoose.Schema({
  title: {type:String, required:"{PATH} is required!"},
  url: {type:String},
  active: {type:Boolean, default:true},
  drawDate: {type:Date, required:"{PATH} is required!"}
});

var Lotteries = mongoose.model("Lotteries", lotteriesSchema);

function createDefaultLotteries() {
  Lotteries.find({}).exec(function(err, collection){
    if(collection.length === 0){
      Lotteries.create({title: 'PowerBall', url: 'http://www.powerball.com/pb_home.asp', active: true, drawDate: new Date('2010-01-01') });
      Lotteries.create({title: 'MegaMillons', url: 'http://www.megamillions.com/', active: true,  drawDate: new Date('2010-01-02')});
      
    }
    if(err){
      console.log(err.message);
    }
  });
}

exports.createDefaultLotteries = createDefaultLotteries;