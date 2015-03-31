var mongoose = require("mongoose");

var megaMillionsSchema = mongoose.Schema({
  drawDate: {type:Date, required:"{PATH} is required"},
  ball1: {type:Number,required:'{PATH} is required', min:1, max:75},
  ball2: {type:Number,required:'{PATH} is required', min:1, max:75},
  ball3: {type:Number,required:'{PATH} is required', min:1, max:75},
  ball4: {type:Number,required:'{PATH} is required', min:1, max:75},
  ball5: {type:Number,required:'{PATH} is required', min:1, max:75},
  megaBall: {type:Number, required:'{PATH} is required', min:1, max:15},
  megaplier: {type:Number, required:'{PATH} is required', min:2, max:5}
});

var megaMillionsDrawing = mongoose.model("megaMillionsDrawing", megaMillionsSchema);

function seedMegaMillionsSchema(){
  megaMillionsDrawing.find({}).exec(function(err, collection){
    if(collection.length === 0){
      var tempDrawDate = new Date('2001-01-01');
      console.log(tempDrawDate);
      megaMillionsDrawing.create({drawDate: tempDrawDate,ball1:11, ball2:12, ball3:13, ball4:14, ball5:15, megaBall:10, megaplier:4});
    }
    if(err) console.log(err.message);
  });
}

exports.seedMegaMillionsSchema = seedMegaMillionsSchema;
