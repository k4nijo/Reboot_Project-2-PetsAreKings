const router = require('express').Router()

const {
    getAllPets,
    getOnePet,
    deletePet,
    updatePet
  } = require('../controllers/pet.controller')
  
  router.get('/', getAllPets)
  router.get('/:id', getOnePet)
  router.delete('/:id', deletePet)
  router.put('/:id', updatePet)
  
  module.exports = router