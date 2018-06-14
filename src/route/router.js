const router = require('koa-router')();
const User = require('../controller/user');

router
    .get('/users/:user_id', User.find)
    .post('/users', User.add)
    .delete('/users/:user_id', User.delete)
    .put('/users/:user_id', User.update)

    .get('/users/:user_id/badge', User.getBadge)
    .put('/users/:user_id/badge', User.convertBadge)

module.exports = router;