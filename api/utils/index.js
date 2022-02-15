const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model')


function authUser (req, res, next) {
  try {
    if (!req.headers.token) {
      return res.status(403).json({ error: 'No Token found' })
    } else {
      jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
        if (err) { return res.status(403).json({ error: 'Token not valid' }) }
        UserModel.findOne({ email: token.email })
          .then(user => {
            res.locals.user = user
            next()
          })
      })
    }
    
  } catch (error) {
    console.log(error)
    
  }
  
}

function checkAdmin (req, res, next) {
  if (res.locals.user.role !== 'admin') { 
    res.status(403).json({ error: 'User not authorized'}) 
  } else {
    next()
  }
}

function checkHostPro (req, res, next) {
  if (res.locals.user.role !== 'hostPro') { 
    res.status(403).json({ error: 'User not authorized'}) 
  } else {
    next()
  }
}


module.exports = { authUser, checkAdmin, checkHostPro }