const router = require('koa-router')();
const User = require('../controller/user');
const Help = require('../controller/help');

router
    .get('/users', User.find)
    .get('/users/:user_id', User.findId)
    .post('/users', User.add)
    .delete('/users/:user_id', User.delete)
    .put('/users/:user_id', User.update)

    .get('/users/:user_id/badge', User.getBadge)
    .put('/users/:user_id/badge', User.convertBadge)

    .get('/users/:user_id/position/longitude/latitude', User.aroundPosition)
    .get('/users/:user_id/records', User.getRecords)
    .get('/users/:user_id/records/:record_id', User.getRecord)
    .post('/users/:user_id/records', User.addRecord)

    .get('/help', Help.find)
    .get('/help/:help_id', Help.findId)
    .post('/help', Help.add)
    .put('/help/:help_id', Help.update)


module.exports = router;