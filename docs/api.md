# 首页

## 获取当前位置信息

```
GET /users/:user_id/position
```

**请求值**

```
{
    longitude: Number,  //经度
    latitude: Number    //纬度
}
```

**返回值**

返回附近区域小伙伴们上传的足迹，更具有社交属性，形成一种良性的竞争关系

点击头像，可以看到小伙伴的上传具体内容（时间、内容、图片）

```
[
    {
        longitude: Number,      //经度
        latitude: Number,       //纬度
        content: String,        //内容
        image_url: [String],    //图片URL
        time: Date,             //上传日期
        author: String          //上传者头像
    },
    ......
]
```

# 个人中心

## 获取个人信息

```
GET /users/:user_id
```

例如`https://example.com/users/xxxxx`（其中的`xxxxx`代表**微信OpenId**）

**返回值**

* 成功

```
{
    wx_id: String,          //微信OpenId
    avatar_url: String,     //头像
    name: String,           //昵称
    badge: Number,          //勋章
    integral: Number        //积分
}
```

* 失败

```
{
    "message": "ID不存在"
}
```

## 添加个人信息

```
POST /users
```

**请求体**

* `Content-Type` 为 `application/json`

```
{
    wx_id: String,          //微信OpenId
    avatar_url: String,     //头像
    name: String,           //昵称
}
```

**返回值**

* 成功

```
{
    wx_id: String,          //微信OpenId
    avatar_url: String,     //头像
    name: String,           //昵称
    badge: Number,          //勋章
    integral: Number        //积分
}
```

* 失败

```
{
    "message": "参数不合法"
}
```

## 获取勋章列表

```
GET /users/:user_id/badge
```

得到已经获取的勋章

**返回值**

* 成功

```
{
    badges: [1, 2, 4, 5]  //有可能不连续，是因为用户没有领取勋章
}
```

* 失败

```
{
    message: "ID不存在"
}
```

## 兑换勋章

```
PUT /users/:user_id/badge
```

**请求体**

```
{
    badge: 2    //请求获取的称号code
}
```

**返回值**

* 请求成功
```
{
    badge: 2
}
```

* 请求失败
```
{
    "message": "积分不足"
}
```

# 附表

**勋章**

| code | 称号 | 图标URL | 所需最少积分 |
|------|------|--------|-------------|
| 0 | 无 | xxx | 0 |
| 1 | 一级棒棒达人 | xxx | 1 |
| 2 | 二级棒棒达人 | xxx | 5 |
| 3 | 三级棒棒达人 | xxx | 15 |
| 4 | 四级棒棒达人 | xxx | 25 |
| 5 | 五级棒棒达人 | xxx | 50 |
| 6 | 六级棒棒达人 | xxx | 99 |
