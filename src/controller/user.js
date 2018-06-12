const UserModel = require('../model/user.model');

class User
{
    static async add(ctx, next)
    {
        ctx.body = ctx.request.body;
        await next();
    }

    static async update(ctx, next)
    {
        ctx.body = 'update ' + ctx.params.user_id;
        await next();
    }

    static async delete(ctx, next)
    {
        ctx.body = 'delete ' + ctx.params.user_id;
        await next();
    }

    static async find(ctx, next)
    {
        ctx.body = 'find ' + ctx.params.user_id;
        await next();
    }
}

module.exports = User;