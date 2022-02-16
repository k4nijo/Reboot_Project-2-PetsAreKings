const Comment = require('../models/comment.model')
const User = require('../models/user.model')


async function getAllComments(req, res) {
  try {
    const user = await User.findById(req.params.userid).populate("comments")
    res.status(200).json(user.comments)
  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}

async function createComment(req, res) {
  try {
    const user = await User.findById(req.params.userid)

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
    const user = await User.findById(req.params.userid)
    user.comments.remove(req.params.commentid)
    user.save()
    const comment = await Comment.findByIdAndDelete(req.params.commentid)
    res.status(200).send(`Comment deleted`)

  } catch (error) {
    res.status(500).send(`Request error: ${error}`)
  }
}

module.exports = {
  getAllComments,
  createComment,
  deleteComment
}

