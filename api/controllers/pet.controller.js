const PetModel = require('../models/pet.model')
const UserModel = require('../models/user.model')

async function getAllPets(req, res) {
  try {
    const pets = await PetModel.find({} , { password: 0 })
    res.status(200).json(pets)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function getOnePet(req, res) {
  try {
    const pet = await PetModel.findById(req.params.id, { password: 0 })
    res.status(200).json(pet)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function updatePet(req, res) {
  try {
    const pet = await PetModel.findByIdAndUpdate(req.params.id, req.body, { password: 0, new: true })
    res.status(200).json({message: `${pet.name}'s profile updated!`, pet })
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function deletePet(req, res) {
  try {
    const pet = await PetModel.findByIdAndDelete(req.params.id)
    res.status(200).send(`${pet.name}'s profile deleted`)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function createPet(req, res) {
  try {
      const user = await UserModel.findById(req.params.user_id)

     if (user) {
      const pet = req.body
      const newPet = await Pets.create(pet)

      user.pet.push(newPet._id)
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