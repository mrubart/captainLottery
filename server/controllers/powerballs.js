var PowerBall = require("mongoose").model("PowerBall");

exports.getPowerballDraws = function(req,res){
  PowerBall.find({}).exec(function(err,collection){
    if(err)
    {
      console.log("Error: getPowerballDraws - " + err.message);
    }
    
    res.send(collection);
  });
};

exports.getPowerballDrawById = function(req,res){
  PowerBall.findOne({_id:req.params.id}).exec(function(err, powerballDraw){
    if(err)
    {
      console.log("Error: getPowerballDrawById - " + err.message);
    }
    res.send(powerballDraw);
  });
};