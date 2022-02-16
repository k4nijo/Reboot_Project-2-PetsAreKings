const router = require('express').Router()

const {
    addComplaint,
    deleteComplaint
    
  } = require('../controllers/pet.controller')
  
  router.post('/', addComplaint)
  router.delete('/:id', deleteComplaint)
  
  
  
  
  
  module.exports = router