const Complaint = require('../models/complaint.model')
const User = require('../models/user.model')


async function getComplaints(req, res) {
  try {
    const user = await User.findById(req.params.userid)
    res.status(200).json(user.complaints)
  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}


async function addComplaint(req, res) {
  try {
    const user = await User.findById(req.params.userid)

    if (user) {
      const complaint = req.body
      const newComplaint = await Complaint.create(complaint)

      user.complaints.push(newComplaint._id)
      await user.save()
      res.send(newComplaint)

    } else {
      res.send('the complaint does not exist')
    }

  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }

}

async function deleteComplaint(req, res) {
  try {
    const user = await User.findById(req.params.userid)
    user.complaints.remove(req.params.complaintid)
    user.save()
    const complaint = await Complaint.findByIdAndDelete(req.params.complaintid)
    res.status(200).send(`Complaint deleted`)

  } catch (error) {
    res.status(500).send(`Request Error: ${error}`)
  }
}


module.exports = {
  getComplaints,
  addComplaint,
  deleteComplaint
}



