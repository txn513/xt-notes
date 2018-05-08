import express from 'express'
import mongoose from 'mongoose'
import {User} from '../models'

let router = express.Router()

router.post('/register', function (req, res, next) {
  var _user = req.body.user;
  if (!_user.username) {
    return next(new Error('no username property'))
  }
  User.findOne({username: _user.username}, function (err, user) {
    if (err) {
      return next(err);
    }
    if (user) {
      // 跳转登录
      return res.json({error: '该用户已注册'});
    } else {
      User.create({
        _id: new mongoose.Types.ObjectId(),
        username: _user.username,
        password: _user.password
      }, function (err, user) {
        if (err) {
          return next(err);
        }
        return res.json({isRegister: true});
      })
    }
  })
})

router.post('/login', function (req, res, next) {
  let _user = req.body.user;
  let password = _user.password;
  User.findOne({username: _user.username}, function (err, user) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.json({error: '用户名错误', userid: ''})
    } else {
      user.comparePassword(password, function (err, isMatch) {
        if (err){
          console.log(err);
        }
        if (isMatch) {
          req.session.userid = user._id; // 用户id存入session中
          return res.json({userid: req.session.userid})
        } else {
          return res.json({error: '密码错误', userid: ''})
        }
      });
      // if (user.password == _user.password) {
      //   req.session.userid = user._id
      //   console.log(req.session.userid)
      //   return res.json({userid: req.session.userid})
      // } else {
      //   return res.json({error: '密码错误', userid: ''})
      // }
    }
  })
})

router.get('/logout', function (req, res, next) {
  delete req.session.userid;
  return res.json({loginStatus: false})
})

router.get('/isLogin', function (req, res, next) {
  if (req.session && req.session.userid) {
    return res.json({loginStatus: true})
  }
  res.json({loginStatus: false})
})

export default router
