const Comment = require('../models/comment.model')
const User = require('../models/user.model')


async function getAllComments(req, res) {
  try {
    const user = await User.findById(req.params.user_id)
    res.status(200).json(user.comments)
  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}

/*async function getOneComment(req, res) {
  try {
    const comments = await Comment.findById(req.params.id)
    res.status(200).json(comments)
  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}*/

async function createComment(req, res) {
    try {
        const user = await User.findById(req.params.user_id)
       
       if (user) {
        const comment = req.body
        const newComment = await Comment.create(comment)
       
        user.comments.push(newComment._id)
        await user.save()
        res.send(newComment)

       } else {
           res.send(`El usuario no existe`)
       }
     
      } catch (error) {
        res.status(500).send(`Request error: ${error}`)
      }
    }


async function deleteComment(req, res) {
  try {
    const user = await User.findById(req.params.id)
    user.comments.remove(req.params.id)
    user.save()
    res.status(500).send(`Commnet deleted`)

  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}

module.exports = {
  getAllComments,
  //getOneComment,
  createComment,
  deleteComment
}

