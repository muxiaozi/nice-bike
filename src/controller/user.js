const UserModel = require('../model/user.model');

class User {
    static async add(ctx, next) {
        let user_info = ctx.request.body;
        ctx.body = await UserModel.create(user_info)
            .catch((err) => {
                ctx.throw(400, err);
            })
        await next();
    }

    static async update(ctx, next) {
        let user_info = ctx.request.body;
        let user_id = ctx.params.user_id;
        ctx.body = await UserModel.findByIdAndUpdate(user_id, user_info, { new: true })
            .catch((err) => {
                ctx.throw(400, err);
            })
        if (!ctx.body) ctx.throw(404, user_id + ' not found');
        await next();
    }

    static async delete(ctx, next) {
        let user_id = ctx.params.user_id;
        let res = await UserModel.findOneAndRemove(user_id)
            .catch((err) => {
                ctx.throw(400, err);
            })
        if (!res) {
            ctx.throw(404, user_id + ' not found');
        } else {
            ctx.status = 200;
        }
        await next();
    }

    static async find(ctx, next) {
        let user_id = ctx.params.user_id;
        ctx.body = await UserModel.findById(user_id)
            .catch((err) => {
                ctx.throw(404, err);
            })
        await next();
    }
}

module.exports = User;