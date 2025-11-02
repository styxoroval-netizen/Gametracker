const express = require('express');
const router = express.Router();

router.use('/games', require('./game.routes'));
router.use('/reviews', require('./review.routes'));
router.use('/users', require('./user.routes'));

module.exports = router;