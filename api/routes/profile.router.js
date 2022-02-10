const router = require('express').Router()
const { ownProfile, updateProfile } = require('../controllers/profile.controller')
const { checkAuth } = require('../utils')

router.get('/', checkAuth, ownProfile)
router.put('/', checkAuth, updateProfile)

module.exports = router