const express = require('express')
const Creator = require('../models/creator')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/me', auth, async (req, res) => {
  res.send(req.creator)
})

router.post('/', async (req, res) => {
  try {
    const creator = new Creator(req.body)
    await creator.save()
    const token = await creator.generateAuthToken()
    res.status(201).send({ creator, token })
  } catch (error) {
    res.status(400).send(error)
  }
})

router.patch('/me', auth, async (req, res) => {
  const allowedUpdates = ['name', 'email', 'password', 'bio']
  const updates = Object.keys(req.body)
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update))

  if (!isValidUpdate) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    updates.forEach(update => (req.creator[update] = req.body[update]))
    await req.creator.save()
    res.send(req.creator)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router
