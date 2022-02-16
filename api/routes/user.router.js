const router = require('express').Router()

const {
  authUser,
  checkAdmin
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
} = require('../controllers/comment.controller')

const {
  getAllPets,
  getOnePet,
  createPet,
  updatePet,
  deletePet
} = require('../controllers/pet.controller')

const {
  getComplaints,
  addComplaint,
  deleteComplaint
} =require('../controllers/complaint.controller')

const { 
  createBooking,
  getAllBooking,
  deleteBooking
} = require('../controllers/booking.controller')

router.get('/', getAllUsers)

router.get('/profile/:id', getOneUser)
router.get('/:userid/complaints', authUser, getComplaints)
router.get('/:userid/comments', authUser, getAllComments),
router.get('/:user_id/booking', authUser, getAllBooking),

router.put('/profile/:id', authUser, updateUser)
router.delete('/profile/:id', deleteUser)
router.delete('/:id', authUser, checkAdmin, deleteUser)
router.get('/:user_id/booking/:id', authUser, deleteBooking),

router.get('/:userid/pets', authUser, getAllPets)
router.get('/:userid/pets/:petid', authUser, getOnePet)
router.put('/:userid/pets/:petid', authUser, updatePet)
router.post('/:userid/pets', authUser, createPet)

router.post('/:host_id/booking', authUser, createBooking),

router.delete('/:userid/pets/:petid', authUser, deletePet)


router.post('/:userid/comments', authUser, createComment);
router.delete('/:userid/comments/:id', authUser, deleteComment);


router.post('/:userid/complaints', authUser, addComplaint)
router.delete('/:userid/complaints/:id', authUser, checkAdmin, deleteComplaint)


module.exports = router