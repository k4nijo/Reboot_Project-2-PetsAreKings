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


module.exports = router