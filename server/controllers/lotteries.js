var Lottery = require("mongoose").model('Lotteries');

exports.getLotteries = function(req,res) {
  Lottery.find({}).exec(function(err, collection){
    if(err)
    {
      console.log("Error: getLotteries - " + err.message);
    }
    res.send(collection);
  });
};

exports.getLotteryById = function(req, res){
  Lottery.findOne({_id:req.params.id}).exec(function(err, lottery){
    if(err)
    {
      console.log("Error: getLotteryById - " + err.message);
    }
    res.send(lottery);
  });
};