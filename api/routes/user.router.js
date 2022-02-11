const router = require('express').Router()

const {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

module.exports = router