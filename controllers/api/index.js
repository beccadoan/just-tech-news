const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRotues = require('./post-routes');
const commentRoutes = require('./comment-routes')

router.use('/users', userRoutes);
router.use('/posts', postRotues);
router.use('/comments', commentRoutes)

module.exports = router;