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

router.get('/listallnotes', function (req, res, next) {
  let userid = req.session.userid
  Note.find({user_id: userid}, function (err, notes) {
    if (err) {
      return next(err)
    }
    return res.json(notes)
  })
})


export default router
