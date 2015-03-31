var Course = require("mongoose").model('Course');

exports.getCourses = function(req, res) {
  Course.find({}).exec(function(err, collection){
    if(err)
    {
      console.log("Error: getCourses - " + err.message);
    }
    res.send(collection);
  });
};

exports.getCourseById = function(req,res){
  Course.findOne({_id:req.params.id}).exec(function(err,course){
    if(err)
    {
      console.log("Error: getCourseById - " + err.message);
    }
    res.send(course);
  });
};