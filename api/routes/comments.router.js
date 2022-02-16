const router = require('express').Router()

const {
  authUser,
  checkAdmin,
} = require ('../utils')

/*const {
  getAllComments,
  getOneComment,
  createComment,
  deleteComment
} = require ('../controllers/comment.controller')

router.get('/', authUser, getAllComments),
router.post('/:user_id/comments', authUser, createComment)
router.get('/:id',authUser, getOneComment)
router.delete('/:id', authUser, checkAdmin, deleteComment)*/

module.exports = router