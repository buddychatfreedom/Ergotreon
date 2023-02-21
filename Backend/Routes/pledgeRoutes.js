const express = require('express')
const Pledge = require('../models/pledge')
const auth = require('../middleware/auth')
const Creator = require('../models/creator')

const router = express.Router()

router.post('/pledges', auth, async (req, res) => {
  const pledge = new Pledge({
    ...
