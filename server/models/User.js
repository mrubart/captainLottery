var mongoose = require("mongoose"),
  encrypt = require("../utilities/encryption");

var userSchema = mongoose.Schema({
  firstName : {type:String, required:'{PATH} is required!'},
  lastName : {type:String, required:'{PATH} is required!'},
  username: {
    type: String,
    required: '{PATH} is required!',
    unique:true
  },
  salt: {type:String, required:'{PATH} is required!'},
  hashed_pwd: {type:String, required:'{PATH} is required!'},
  roles: [String]
});
userSchema.methods = {
  authenticate: function(passwordToMatch){
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function(role){
    return this.roles.indexOf(role) > -1;
  }
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function(err, collection){
    if(collection.length === 0){
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'mrubart');
      User.create({firstName:'Mike', lastName:'Rubart', username:'mrubart', salt: salt, hashed_pwd: hash, roles:['admin']});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'BTest');
      User.create({firstName:'Bob', lastName:'Tester', username:'BTest', salt: salt, hashed_pwd: hash, roles:[]});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'JWatkins');
      User.create({firstName:'Jimmy', lastName:'Watkins', username:'JWatkins', salt: salt, hashed_pwd: hash});
    }
  });
};

exports.createDefaultUsers = createDefaultUsers;