const router = require('express').Router()

const usersRouter = require('./user.router')
const authRouter = require('./auth.router')
<<<<<<< HEAD
const commentRouter = require('./comments.router')

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/comments', commentRouter)
=======
const petRouter = require('./pet.router')
const { authUser } = require('../utils') 
const profileRouter = require('./profile.router')

router.use('/users', usersRouter)
router.use('/auth', authRouter)
//router.use('/pets', petRouter)


/*router.get('/profile', authUser, (req, res) => {
  res.json(res.locals.user)
})*/
>>>>>>> 4186bb96378b18f54da6ecd5c7f60cff1dad633c

module.exports = router