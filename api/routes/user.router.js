const router = require('express').Router()

const{
  authUser,
} = require('../utils')

const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

const {
  getAllPets,
  getOnePet,
  createPet,
  updatePet,
  deletePet
} =require('../controllers/pet.controller')

router.get('/:userid/pets', authUser, getAllPets)
router.get('/:userid/pets/:petid', authUser, getOnePet )
router.put('/:userid/pets/:petid', authUser, updatePet)
router.post('/:userid/pets', authUser, createPet)
router.delete('/:userid/pets/:petid', authUser, deletePet)


module.exports = router