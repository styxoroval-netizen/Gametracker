const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async ({ name, email, password }) => {
  if (!name || !email || !password) throw new Error('Datos incompletos');
  const existing = await User.findOne({ email });
  if (existing) throw new Error('El email ya está registrado');
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, passwordHash });
  return user;
};

const login = async ({ email, password }) => {
  if (!email || !password) throw new Error('Credenciales incompletas');
  const user = await User.findOne({ email });
  if (!user) throw new Error('Usuario no encontrado');
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new Error('Contraseña inválida');
  const secret = process.env.JWT_SECRET || 'dev_secret';
  const token = jwt.sign({ sub: user._id, email: user.email }, secret, { expiresIn: '7d' });
  return { token, user };
};

module.exports = { register, login };