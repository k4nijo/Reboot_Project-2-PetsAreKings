
const Pet = require('../models/pet.model')
const User = require('../models/user.model')

async function getAllPets(req, res) {
  try {
    const user = await User.findById(req.params.userid)
    console.log(user)
    res.status(200).json(user.pets)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function getOnePet(req, res) {
  try {
    const user = await User.findById(req.params.userid).populate('pets')
    const pet = user.pets.filter(function (pet) {
      return pet._id === req.params.petid
    })
    res.status(200).json(pet)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function updatePet(req, res) {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.petid, req.body, { new: true })
    res.status(200).json({ message: `Pet profile updated!`, pet })
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function deletePet(req, res) {
  try {
    const user = await User.findById(req.params.userid)
    user.pets.remove(req.params.petid)
    user.save()
    const pet = await Pet.findByIdAndDelete(req.params.petid)
    res.status(200).send(`Pet profile deleted`)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function createPet(req, res) {
  try {
    const user = await User.findById(req.params.userid)

    if (user) {
      const pet = req.body
      const newPet = await Pet.create(pet)

      user.pets.push(newPet._id)
      await user.save()
      res.send(newPet)

    } else {
      res.send('El usuario no existe')
    }

  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}


module.exports = {
  getAllPets,
  getOnePet,
  updatePet,
  deletePet,
  createPet
}