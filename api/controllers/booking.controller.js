const UserModel = require('../models/user.model')
const BookingModel = require('../models/booking.model')

async function createBooking(req, res) {
    try {
        const user = await UserModel.findById(req.params.user_id)
        const newFromDate = new Date(req.body.from_date)
        const newToDate = new Date(req.body.to_date)
        const fromDate = user.host.available_dates.from_date
        const toDate = user.host.available_dates.to_date
        
        if (newFromDate.getTime() >= fromDate.getTime() && newFromDate.getTime() <= toDate.getTime() && 
        newToDate.getTime() >= fromDate.getTime() && newToDate.getTime() <= toDate.getTime()) {
            BookingModel.create({
                from_date: newFromDate,
                to_date: newToDate,
                user_id: res.locals.user.user_id,
                host_id: req.params.host_id,
                pet_id: req.body.pet_id,
                createdAt: new Date()
            })
            res.send('Booking created')
        }
        res.send('Error fecha no disponible')
      } catch (error) {
        res.status(500).send(`Request error: ${error}`)
    }
}
    
async function getAllBooking(req, res) {
    try {
      const booking = await BookingModel.findById(req.params.user_id)

      if(booking) {
        res.status(200).json(user.booking)   
      } else {
          res.status(404).json(error)
      }
    
    } catch (error) {
      res.status(500).send(`Request error: ${error}`)
    }
  }

/*async function getOneBooking(req, res) {
  try {
    const booking = await UserModel.findById(req.params.id, { password: 0 })
    res.status(200).json(user.booking)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}*/

async function updateBooking(req, res) {
  try {
    const booking = await BookingModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    res.status(200).json({message: `Your booking is updated!`, booking })
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

async function deleteBooking(req, res) {
  try {
    const booking = await BookingModel.findByIdAndDelete(req.params.id)
    res.status(200).send(`Your booking is deleted`)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}

module.exports = {
  createBooking,  
  getAllBooking,
  //getOneBooking,
  updateBooking,
  deleteBooking
}