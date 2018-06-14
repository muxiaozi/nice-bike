const UserModel = require('../model/user.model');

class User {
    /**
     * 添加用户
     */
    static async add(ctx, next) {
        let user_info = ctx.request.body;
        ctx.body = await UserModel.create(user_info)
            .catch(err => ctx.throw(400, err));
        await next();
    }

    /**
     * 更新用户
     */
    static async update(ctx, next) {
        let user_info = ctx.request.body;
        let user_id = ctx.params.user_id;
        ctx.body = await UserModel.findByIdAndUpdate(user_id, user_info, { new: true })
            .catch(err => ctx.throw(400, err));
        if (!ctx.body) ctx.throw(404, user_id + ' not found');
        await next();
    }

    /**
     * 删除用户
     */
    static async delete(ctx, next) {
        let user_id = ctx.params.user_id;
        let res = await UserModel.findOneAndRemove(user_id)
            .catch(err => ctx.throw(400, err));
        if (!res) {
            ctx.throw(404, user_id + ' not found');
        } else {
            ctx.status = 200;
        }
        await next();
    }

    /**
     * 查找用户
     */
    static async find(ctx, next) {
        let user_id = ctx.params.user_id;
        let user = await UserModel.findById(user_id)
            .catch(err => ctx.throw(400, err));
        if (user) {
            ctx.body = user;
        } else {
            ctx.throw(404, user_id + ' not found');
        }
        await next();
    }

    /**
     * 获取勋章列表
     */
    static async getBadge(ctx, next) {
        let user_id = ctx.params.user_id;
        let user = await UserModel.findById(user_id)
            .catch(err => ctx.throw(400, err));
        if (user) {
            ctx.body = user.badge;
        } else {
            ctx.throw(404, user_id + ' not found');
        }
        await next();
    }

    /**
     * 兑换勋章
     */
    static async convertBadge(ctx, next) {
        let T_BADGE = [0, 1, 5, 15, 25, 50, 99];
        let user_id = ctx.params.user_id;
        let badge = ctx.request.body.badge;
        if (badge === undefined) ctx.throw(400, 'no badge');

        let user = await UserModel.findById(user_id)
            .catch(err => ctx.throw(400, err));
        if (!user) ctx.throw(404, user_id + ' not found');

        if (user.integral >= T_BADGE[badge]) {
            let user = await UserModel.findByIdAndUpdate(user_id, {
                $addToSet: {
                    badge: badge
                }
            }).catch(err => ctx.throw(400, err));
            ctx.body = { badge: Number(badge) };
        }else{
            ctx.throw(400, 'integral not enough');
        }
        await next();
    }
}

module.exports = User;