import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Raj Dahal',
    email: 'raj@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Aakash Rai',
    email: 'aakash@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users