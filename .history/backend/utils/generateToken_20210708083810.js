import jwt from 'jsonwebtoken'

const genetrateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: '30d'
  })
}
export default genetrateToken