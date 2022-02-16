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

const {
  getAllComments,
  createComment,
  deleteComment
} = require ('../controllers/comment.controller')

const {
  getAllServices,
  createService,
  deleteService
} = require ('../controllers/service.controller')

const { createBooking } = require('../controllers/booking.controller')

router.get('/', getAllUsers)
<<<<<<< HEAD
router.get('/profile/:id', getOneUser)
router.get('/:user_id/comments',authUser, getAllComments),
router.get('/:user_id/services',authUser, getAllServices),
router.put('/profile/:id', authUser, updateUser)
router.delete('/profile/:id', deleteUser)
router.delete('/:id', authUser, checkAdmin, deleteUser)
=======
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
>>>>>>> 4186bb96378b18f54da6ecd5c7f60cff1dad633c

router.post('/:user_id/services', authUser, createService);
router.post('/:host_id/booking', authUser, createBooking), 

router.post('/:user_id/comments', authUser, createComment);
//router.delete('/:user_id/services/:id', authUser, deleteService);
router.delete('/:user_id/comments/:id', authUser, deleteComment);


module.exports = router