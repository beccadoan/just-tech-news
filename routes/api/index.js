const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRotues = require('./post-routes')

router.use('/users', userRoutes);
router.use('/posts', postRotues)

module.exports = router;