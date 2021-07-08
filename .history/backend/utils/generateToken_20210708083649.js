import jwt from 'jsonwebtoken'

const genetrateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN)
}