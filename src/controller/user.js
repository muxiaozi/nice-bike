const UserModel = require('../model/user.model');
const RecordModel = require('../model/record.model');

module.exports = class User {
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
        ctx.body = await UserModel.findByIdAndUpdate(user_id, user_info, { new: true, select: '-__v' })
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
        ctx.body = await UserModel.find(null, '-__v')
            .catch(err => ctx.throw(400, err));
        await next();
    }

    /**
     * 通过ID查找用户
     */
    static async findId(ctx, next) {
        let user_id = ctx.params.user_id;
        let user = await UserModel.findById(user_id, '-__v')
            .catch(err => ctx.throw(400, err));
        if (user) {
            ctx.body = user;
        } else {
            ctx.throw(404, user_id + ' not found');
        }
        await next();
    }

    static async uploadAvatar(ctx, next) {
        let user_id = ctx.params.user_id;
        if (ctx.req.file) {
            await UserModel.findByIdAndUpdate(user_id, {
                $set: {
                    avatar_url: ctx.req.file.filename
                }
            }).then(user => {
                ctx.body = user;
            }).catch(err => ctx.throw(400, err));
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
            await UserModel.findByIdAndUpdate(user_id, {
                $addToSet: {
                    badge: badge
                }
            }).catch(err => ctx.throw(400, err));
            ctx.body = { badge: Number(badge) };
        } else {
            ctx.throw(400, 'integral not enough');
        }
        await next();
    }

    /**
     * 获取周围记录
     */
    static async aroundPosition(ctx, next) {
        ctx.body = 'aroundposition';
        await next();
    }

    /**
     * 获取记录列表
     */
    static async getRecords(ctx, next) {
        let user_id = ctx.params.user_id;
        let user = await UserModel.findById(user_id)
            .populate('records', ['question', 'place', 'time', 'images'])
            .catch(err => ctx.throw(400, err));
        if (user) {
            ctx.body = {
                maintain: user.records,
                integral: []
            }
        } else {
            ctx.throw(404, user_id + ' not found');
        }
        await next();
    }

    /**
     * 获取记录
     */
    static async getRecord(ctx, next) {
        let user_id = ctx.params.user_id;
        let record_id = ctx.params.record_id;
        await UserModel.findOne({
            _id: user_id,
            records: record_id
        }).then(user => {
            if (user) {
                return RecordModel.findById(record_id);
            } else {
                ctx.throw(404, user_id + ' does not have record ' + record_id);
            }
        }).then(record => {
            if (record) {
                ctx.body = record;
            } else {
                ctx.throw(404, record_id + ' not found');
            }
        }).catch(err => ctx.throw(400, err));
        await next();
    }

    /**
     * 上传记录
     */
    static async addRecord(ctx, next) {
        let user_id = ctx.params.user_id;
        let record = Object.assign(ctx.request.body, { user: user_id });
        await UserModel.findById(user_id)
            .then(user => {
                if (user) {
                    return RecordModel.create(record);
                } else {
                    ctx.throw(user_id + ' not found');
                }
            })
            .then(record => {
                if (record) {
                    ctx.body = record;
                    return UserModel.findByIdAndUpdate(user_id, {
                        $push: {
                            records: record._id
                        }
                    });
                } else {
                    ctx.throw(400, 'create record fail');
                }
            })
            .catch(err => ctx.throw(400, err));

        await next();
    }
}