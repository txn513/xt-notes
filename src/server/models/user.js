var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = Schema({
  _id: Schema.Types.ObjectId,
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  notes: {
    type:
  }

});
var User = mongoose.model('User', UserSchema);
module.exports = User;
