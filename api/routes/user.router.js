<<<<<<< HEAD
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

=======
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


>>>>>>> ebb0be83f8bb81d6e335df5cb4806a9761e6b41d
module.exports = router