import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bodyParser from 'body-parser'
import path from 'path'
import config from '../../build/webpack.dev.conf'
import api from './router'
import user from './router/user'


// Database Name

let app = express()

app.use(session({
  secret: 'keyboard cat',
  cookie: { maxAge: 600000 }
}))


// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

//
// if (app.get('env') === 'development') {
//   const compiler = webpack(config)
//
//   app.use(webpackDevMiddleware(compiler, {
//     hot: true,
//     publicPath: '/',
//     stats: { colors: true }
//   }))
//
//   app.use(webpackHotMiddleware(compiler))
// }


app.use('/user', user)
app.use(function (req, res, next) {
  if (req.session && req.session.userid) {
    next()
  } else {
    return res.status(401).send()
  }
})

app.use('/api', api)



app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  // console.log(res.locals.error)
  // console.error(err.stack)
  // res.status(500).send('someting wrong')
})

const port = process.env.PORT || 4000
app.listen(port)

export default app
