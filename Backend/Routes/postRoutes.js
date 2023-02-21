const express = require('express')
const Post = require('../models/post')
const auth = require('../middleware/auth')
const Creator = require('../models/creator')

const router = express.Router()

router.post('/posts', auth, async (req, res) => {
  const post = new Post({
    ...req.body,
    creatorId: req.creator.id,
  })

  try {
    await post.save()
    res.status(201).send(post)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.patch('/posts/:id', auth, async (req, res) => {
  const allowedUpdates = ['title', 'content', 'imageUrl']
  const updates = Object.keys(req.body)
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update))

  if (!isValidUpdate) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
        creatorId: req.creator.id,
      },
    })

    if (!post) {
      return res.status(404).send()
    }

    updates.forEach(update => (post[update] = req.body[update]))
    await post.save()
    res.send(post)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router
