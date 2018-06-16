const HelpModel = require('../model/help.model');

module.exports = class Help {
    /**
     * 添加帮助
     */
    static async add(ctx, next) {
        ctx.body = await HelpModel.create(ctx.request.body)
            .catch(err => ctx.throw(400, err));
        await next();
    }

    /**
     * 更新帮助
     */
    static async update(ctx, next) {
        let help_id = ctx.params.help_id;
        let help = await HelpModel.findByIdAndUpdate(help_id, ctx.request.body, 
            { new: true, select: '-__v' })
            .catch(err => ctx.throw(400, err));
        if (help) {
            ctx.body = help;
        } else {
            ctx.throw(404, help_id + ' not found');
        }
        await next();
    }

    /**
     * 获取帮助列表
     */
    static async find(ctx, next) {
        let helps = await HelpModel.find()
            .catch(err => ctx.throw(400, err));
        let result = [];
        helps.forEach(element => {
            result.push({
                id: element._id,
                title: element.title
            })
        });
        ctx.body = result;
        await next();
    }

    /**
     * 获取帮助详情
     */
    static async findId(ctx, next) {
        let help_id = ctx.params.help_id;
        let help = await HelpModel.findById(help_id, '-__v')
            .catch(err => ctx.throw(400, err));
        if (help) {
            ctx.body = help;
        } else {
            ctx.throw(404, help_id + ' not found');
        }
        await next();
    }
}