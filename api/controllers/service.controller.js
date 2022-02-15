const Services = require('../models/services.model')
const User = require('../models/user.model')


async function getAllServices(req, res) {
  try {
    const user = await User.findById(req.params.user_id)
    res.status(200).json(user.services)
  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}

async function createService(req, res) {
    try {
       const user = await User.findById(req.params.user_id)
       if (user) {
        const service = req.body
        const newService = await Services.create(service)
       
        user.services.push(newService._id)
        await user.save()
        res.send(newService)

       } else {
           res.send(`El usuario no existe`)
       }
     
      } catch (error) {
        res.status(500).send(`Request error: ${error}`)
    }
 }


async function deleteService(req, res) {
  try {
    const user = await User.findById(req.params.id)
    user.service.remove(req.params.id)
    user.save()
    res.status(500).send(`Service deleted`)

  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}

module.exports = {
  getAllServices,
  createService,
  deleteService
}

