const User = require('../models/user.model')

async function getAllUsers(req, res) {
  try {
    const users = await User.find({} , { password: 0 })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findById(req.params.id, { password: 0 })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { password: 0, new: true })
    res.status(200).json({message: `${user.name}'s profile updated!`, user })
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).send(`User profile deleted`)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}


module.exports = {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser
}