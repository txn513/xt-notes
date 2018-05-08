import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

let SALT_WORK_FACTOR = 5
const Schema = mongoose.Schema;

let mongoDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mynote'
mongoose.connect(mongoDB)

const NoteSchema = Schema({
  user_id: String,
  content: String,
  date: {
    type: Date,
    default: Date.now
  }
})

const UserSchema = Schema({
  _id: Schema.Types.ObjectId,
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', function(next){
  var user = this;
  console.log('salt');
  if (!user.isModified('password')) return next();
  // 产生一个salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    //  结合salt产生新的hash
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // 使用hash覆盖明文密码
      user.password = hash;
      next();
    });
  });
})

UserSchema.methods = {
  comparePassword: function (_password, cb) {
    bcrypt.compare(_password, this.password, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    })
  }
};

const Note = mongoose.model('Notebook', NoteSchema)

const User = mongoose.model('User', UserSchema);

exports.User = User
exports.Note = Note
