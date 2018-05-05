import express from 'express'
import mongoose from 'mongoose'
import {Note} from '../models'

let router = express.Router()

router.post('/submitpost', function (req, res, next) {
  // console.log(req.body)
  Note.create({
    user_id: req.session.userid,
    content: req.body.content
  }, function (err, note) {
    if (err) {
      return next(err)
    }
    return res.json({status: true});
  })
})

router.post('/deletenote', function (req, res, next) {
  Note.deleteOne({_id: req.body.id}, function (err, notes) {
    if (err) {
      return next(err)
    }
    return res.json(notes)
  });
})

router.get('/listallnotes', function (req, res, next) {
  let userid = req.session.userid
  Note.find({user_id: userid}, null, {sort: {date: -1}}, function (err, notes) {
    if (err) {
      return next(err)
    }
    return res.json(notes)
  })
})

router.post('/notedetail', function (req, res, next) {
  let noteId = req.body.id;
  Note.findOne({_id: noteId}, function (err, note) {
    if (err) {
      return next(err)
    }
    return res.json(note)
  });
});

export default router
