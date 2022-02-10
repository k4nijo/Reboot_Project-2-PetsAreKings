const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model')


function authUser (req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }
      UserModel.findOne({ email: token.email })
        .then(user => {
          res.locals.user = user
          next()
        })
    })
  }
}


function authUser(req, res, next) {
    console.log(res.locals.user)
    if (res.locals.user?.role === 'admin') {
      next()
    } else {
      res.status(403).json({ error: 'User not authorized, no admin'})
    }
  }

/*function  (req, res, next) {
    if (res.locals.user.role !== '') {
      res.status(403).json({ error: 'User not authorized'})
    } else {
      next()
    }
  }*/
  

module.exports = {
  authUser,
  checkAdmin,
}