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
  const accessSecret = process.env.JWT_SECRET || 'dev_secret';
  const refreshSecret = process.env.JWT_REFRESH_SECRET || 'dev_refresh_secret';
  const token = jwt.sign({ sub: user._id, email: user.email }, accessSecret, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ sub: user._id, email: user.email }, refreshSecret, { expiresIn: '30d' });
  return { token, refreshToken, user };
};

const refresh = async ({ refreshToken }) => {
  if (!refreshToken) throw new Error('Refresh token requerido');
  const refreshSecret = process.env.JWT_REFRESH_SECRET || 'dev_refresh_secret';
  try {
    const payload = jwt.verify(refreshToken, refreshSecret);
    const user = await User.findById(payload.sub);
    if (!user) throw new Error('Usuario no encontrado');
    const accessSecret = process.env.JWT_SECRET || 'dev_secret';
    const token = jwt.sign({ sub: user._id, email: user.email }, accessSecret, { expiresIn: '15m' });
    return { token, user };
  } catch (err) {
    throw new Error('Refresh token inválido');
  }
};

module.exports = { register, login, refresh };