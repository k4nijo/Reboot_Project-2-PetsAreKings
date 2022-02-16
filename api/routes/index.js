const router = require('express').Router()

const usersRouter = require('./user.router')
const authRouter = require('./auth.router')

//const commentRouter = require('./comments.router')

router.use('/users', usersRouter)
router.use('/auth', authRouter)
//router.use('/comments', commentRouter)


module.exports = router