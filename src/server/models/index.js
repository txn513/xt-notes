import mongoose from 'mongoose'
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

const Note = mongoose.model('Notebook', NoteSchema)

const User = mongoose.model('User', UserSchema);

exports.User = User
exports.Note = Note
