const authService = require('../services/auth.service');

module.exports = {
  async register(req, res) {
    try {
      const user = await authService.register(req.body);
      res.status(201).json({ id: user._id, email: user.email, name: user.name });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async login(req, res) {
    try {
      const { token, user } = await authService.login(req.body);
      res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  },
};