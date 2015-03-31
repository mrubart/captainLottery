var mongoose = require("mongoose");

var powerballSchema = mongoose.Schema({
  drawDate: {type:Date, required:"{PATH} is required"},
  ball1: {type:Number,required:'{PATH} is required', min:1, max:59},
  ball2: {type:Number,required:'{PATH} is required', min:1, max:59},
  ball3: {type:Number,required:'{PATH} is required', min:1, max:59},
  ball4: {type:Number,required:'{PATH} is required', min:1, max:59},
  ball5: {type:Number,required:'{PATH} is required', min:1, max:59},
  powerBall: {type:Number, required:'{PATH} is required', min:1, max:35},
  powerPlay: {type:Number, required:'{PATH} is required', min:2, max:5}
});

var PowerBall = mongoose.model("PowerBall", powerballSchema);

function seedPowerballSchema(){
  PowerBall.find({}).exec(function(err, collection){
    if(collection.length === 0){
      var tempDrawDate = new Date('2001-01-01');
      PowerBall.create({drawDate:tempDrawDate,ball1:1, ball2:2, ball3:3, ball4:4, ball5:5, powerBall:6, powerPlay:3});
    }
    if(err) console.log(err.message);
  });
}

exports.seedPowerballSchema = seedPowerballSchema;
