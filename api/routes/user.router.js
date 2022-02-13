const router = require('express').Router()

const{
  authUser,
} = requiere('../utils')

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

const {
  createPet,
} =require('../controllers/pet.controller')

router.post('/:user_id/pets', authUser, createPet)

module.exports = router