var auth = require("./auth"),
  users = require("../controllers/users"),
  courses = require('../controllers/courses'),
  mongoose = require("mongoose"),
  User = mongoose.model('User'),
  lotteries = require('../controllers/lotteries'),
  scrapers = require("../controllers/scrapers"),
  powerball = require("../controllers/powerballs");

module.exports = function(app){
    
  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);
  
  app.get('/api/courses', courses.getCourses);
  app.get('/api/courses/:id', courses.getCourseById);
  
  app.get('/api/lotteries', lotteries.getLotteries);
  app.get('/api/lotteries/:id', lotteries.getLotteryById);
  
  app.get('/api/scrapers', auth.requiresRole('admin'), scrapers.getScrapers);
  app.get('/api/scrapers/:id', auth.requiresRole('admin'), scrapers.getScraperById);
  
  app.get('/api/scrapePowerballs',scrapers.scrapePowerballs);
  
  app.get('/api/powerball', powerball.getPowerballDraws);
  app.get('/api/powerball/:id', powerball.getPowerballDrawById);
  
  app.get('/partials/*', function (req, res) {
      res.render('../../public/app/' + req.params[0]);
  });
  
  app.post('/login', auth.authenticate);
  
  app.post('/logout', function(req, res){
    req.logout();
    res.end();
  });
  
  app.all('/api/*', function(req, res){
    res.sendStatus(404);
  } );
  
  app.get('*', function (req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
}