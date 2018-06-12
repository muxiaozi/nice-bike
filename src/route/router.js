const router = require('koa-router')();
const User = require('../controller/user');

router
    .get('/users/:user_id', User.find)
    .post('/users', User.add)
    .delete('/users/:user_id', User.delete)
    .put('/users/:user_id', User.update)

module.exports = router;