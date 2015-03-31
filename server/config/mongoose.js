var mongoose = require("mongoose"),
  userModel = require("../models/User"),
  courseModel = require('../models/Course'),
  powerBallModel = require('../models/PowerBall'),
  megaMillionsModel = require('../models/MegaMillions'),
  lotteriesModel = require('../models/Lotteries'),
  scraperModel = require('../models/Scraper');
  
module.exports = function(config){
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error',console.error.bind(console, 'connection error...'));
    db.once('open',function callback() {
    	console.log('CaptLottery db opened');
    });

  userModel.createDefaultUsers();
  //courseModel.createDefaultCourses();
  powerBallModel.seedPowerballSchema();
  megaMillionsModel.seedMegaMillionsSchema();
  lotteriesModel.createDefaultLotteries();  
  scraperModel.createDefaultScrapers();
};

