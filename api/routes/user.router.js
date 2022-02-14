const router = require('express').Router()

const {
  authUser,
  checkAdmin,
  checkHostPro
} = require ('../utils')

const {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/profile/:id', getOneUser)
router.delete('/profile/:id', deleteUser)
router.put('/profile/:id', updateUser)
router.delete('/:id', authUser, checkAdmin, deleteUser)

const {
  getAllComments,
  createComment,
  deleteComment
} = require ('../controllers/comment.controller')

router.get('/:user_id/comments', authUser, getAllComments),
router.post('/:user_id/comments', authUser, createComment);
router.delete('/:user_id/comments/:id', authUser, deleteComment);





module.exports = router