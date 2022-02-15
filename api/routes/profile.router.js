const router = require('express').Router()
const { ownProfile, updateProfile } = require('../controllers/profile.controller')
const { authUser } = require('../utils')

router.get('/', authUser, ownProfile)
router.put('/', authUser, updateProfile)

module.exports = router