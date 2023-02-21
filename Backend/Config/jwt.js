module.exports = {
  secretKey: process.env.JWT_SECRET_KEY || 'secret',
  expiresIn: '7d' // or however long you want the JWT to be valid for
}
