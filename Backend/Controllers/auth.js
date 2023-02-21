const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../models')
const { secretKey, expiresIn } = require('../config/jwt')

exports.signup = async (req, res, next) => {
  const { email, password } = req.body

  try {
    // Check if email is already in use
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(409).json({ error: 'Email is already in use' })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the user
    const user = await User.create({ email, password: hashedPassword })

    // Generate a JWT
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn })

    // Return the JWT and user info
    res.status(201).json({ token, user })
  } catch (error) {
    next(error)
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(401).json({ error: 'Email or password is incorrect' })
    }

    // Compare the passwords
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Email or password is incorrect' })
    }

    // Generate a JWT
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn })

    // Return the JWT and user info
    res.json({ token, user })
  } catch (error) {
    next(error)
  }
}
