const UserModel = require('../models/user.model')
const BookingModel = require('../models/booking.model')

async function createBooking(req, res) {
  try {
    const user = await UserModel.findById(req.params.host_id)
    const newFromDate = new Date(req.body.from_date)
    const newToDate = new Date(req.body.to_date)
    const fromDate = user.host.available_dates.from_date
    const toDate = user.host.available_dates.to_date

    if (newFromDate.getTime() >= fromDate.getTime() && newFromDate.getTime() <= toDate.getTime() &&
      newToDate.getTime() >= fromDate.getTime() && newToDate.getTime() <= toDate.getTime()) {
      const booking = await BookingModel.create({
        from_date: newFromDate,
        to_date: newToDate,
        user_id: res.locals.user.user_id,
        host_id: req.params.host_id,
        pet_id: req.body.pet_id,
        createdAt: new Date()
      })
      user.bookings.push(booking)
      user.save()
      res.send('Booking successfully completed')
    } else {
      res.send('Error fecha no disponible')
    }
   
  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}

async function getAllBooking(req, res) {
  try {
    const user = await UserModel.findById(req.params.user_id).populate('bookings')
    console.log(user)
    if (user) {
      res.status(200).json(user.bookings)
    } else {
      res.status(404).json("User not found")
    }
  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}

/*async function updateBooking(req, res) {
  try {
    const booking = await BookingModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    res.status(200).json({ message: `Your booking is updated!`, booking })
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}*/

async function deleteBooking(req, res) {
  try {
    const user = await User.findById(req.params.userid)
    user.bookings.remove(req.params.bookingid)
    user.save()
    const booking = await BookingModel.findByIdAndDelete(req.params.bookingid)
    res.status(200).send(`Booking deleted`)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}


module.exports = {
  createBooking,
  getAllBooking,
  //updateBooking,
  deleteBooking
}