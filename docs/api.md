# 1. 棒棒的单车API文档

## 1.1. 个人中心

### 1.1.1. 获取个人信息

**接口URL**

```
GET /users/:user_id
```

**返回值**

* 成功 `200`

```javascript
{
    wx_id: String,          //微信OpenId
    avatar_url: String,     //头像
    name: String,           //昵称
    badge: Number,          //勋章
    integral: Number        //积分
}
```

* 失败 `400`

```javascript
{
    message: String     //错误信息
}
```

### 1.1.2. 添加个人信息

**接口URL**

```
POST /users
```

**请求值**

* `Content-Type` 为 `application/json`

```javascript
{
    wx_id: String,          //微信OpenId
    avatar_url: String,     //头像
    name: String,           //昵称
}
```

**返回值**

* 成功 `200`

```javascript
{
    wx_id: String,          //微信OpenId
    avatar_url: String,     //头像
    name: String,           //昵称
    badge: Number,          //勋章
    integral: Number        //积分
}
```

* 失败 `400`

```javascript
{
    message: String     //错误信息
}
```

### 1.1.3. 获取勋章列表

**接口URL**

```
GET /users/:user_id/badge
```

得到已经获取的勋章

**返回值**

* 成功 `200`

```javascript
{
    badges: [Number]    //有可能不连续，是因为用户没有领取勋章
}
```

* 失败 `400`

```javascript
{
    message: String     //错误信息
}
```

### 1.1.4. 兑换勋章

**接口URL**

```
PUT /users/:user_id/badge
```

**请求体**

```javascript
{
    badge: Number    //请求获取的称号code
}
```

**返回值**

* 请求成功 `200`

```javascript
{
    badge: Number
}
```

* 请求失败 `400`

```javascript
{
    message: String     //错误信息
}
```

## 1.2. 记录

### 1.2.1. 获取当前位置信息

**接口URL**

```
GET /users/:user_id/position/longitude/latitude
```

**返回值**

返回附近区域小伙伴们上传的足迹，更具有社交属性，形成一种良性的竞争关系

点击头像，可以看到小伙伴的上传具体内容（时间、内容、图片）

* 成功 `200`

```javascript
[
    {
        longitude: Number,      //经度
        latitude: Number,       //纬度
        content: String,        //内容
        image_url: [String],    //图片URL
        time: Date,             //上传日期
        avatar_url: String,     //上传者头像
        author: String          //上传者姓名
    }
]
```

* 失败 `400`

```javascript
{
    message: String     //错误信息
}
```

### 1.2.2. 记录列表

**接口描述**

点击底部第二个按钮，进入记录列表，此时触发。

**接口URL**

```
GET /users/:user_id/records
```

**返回值**

* 成功 `200`

```javascript
{
    maintain: [             //维护列表
        {
            id: String,     //该条维护记录的ID
            images: String, //首图 上传图片的第一张
            remark: String, //备注
            time: Date,     //时间
            place: String,  //地点
        }
    ],
    integral: [             //积分列表
        {
            id: String,     //该条积分记录的ID
            images: String, //图片
            grade: Number,  //分数
            time: Date,     //时间
            remark: String  //具体内容
        }
    ]
}
```

* 失败 `400`

```javascript
{
    messages: String        //错误信息
}
```

### 1.2.3. 维护详情

**接口描述**

 进入记录界面，默认是维护列表，点击每一项时触发。

**接口URL**

```
GET /users/:user_id/records/:record_id
```

**返回值**

```javascript
{
    id: String,         //该条维护记录的ID
    images: [String],   //上传的所有图片
    remark: String,     //备注
    time: Date,         //时间
    place: String,      //地点名称
    position: {
        longitude: Number,  //经度
        latitude: Number    //纬度
    }
}
```

### 1.2.4. 上传用户记录

**接口描述**

点击首页的记录按钮，填写完后，点击保存按钮时触发。

**接口URL**

```
POST /users/:user_id/records
```

**请求值**

```javascript
{
    position: {
        longitude: Number,  //经度
        latitude: Number    //纬度
    },
    place: String,          //地点名称
    question: String,       //问题选项
    remark: String,         //备注
    images: [String],       //图片
}
```

**返回值**

* 成功 `200`

```javascript
{
    grade: Number,      //保存成功后给多少积分
    ads: [String]       //其他广告
}
```

* 失败 `400`

```javascript
{
    message: String,    //请求失败的描述
}
```

## 1.3. 帮助

### 1.3.1. 帮助列表

**接口描述**

点击帮助进入帮助列表，此时触发。

**接口URL**

``` 
GET /users/:user_id/help
```

**返回值**

* 成功 `200`

```javascript
[
    {
        id: String,     //帮助id
        title: String   //该条帮助的题目
    }
]
```

* 失败 `400`

```javascript
{
    message: String     //错误信息
}
```

### 1.3.2. 帮助详情

**接口描述**

进入帮助列表，点击每一项时触发。

**接口URL**

```
GET /users/:user_id/help/:help_id
```

**返回值**

* 成功 `200`

```javascript
{
    id: String,         //帮助ID
    title: String,      //帮助题目
    content: String,    //解决办法 文字描述
    images: [String],   //如果帮助有图片形式的展示的话，这里放图片
}
```

* 失败 `400`

```javascript
{
    message: String     //错误信息
}
```

## 1.4. 附表

### 1.4.1. 勋章

| code | 称号 | 图标URL | 所需最少积分 |
|------|------|--------|-------------|
| 0 | 无 | xxx | 0 |
| 1 | 一级棒棒达人 | xxx | 1 |
| 2 | 二级棒棒达人 | xxx | 5 |
| 3 | 三级棒棒达人 | xxx | 15 |
| 4 | 四级棒棒达人 | xxx | 25 |
| 5 | 五级棒棒达人 | xxx | 50 |
| 6 | 六级棒棒达人 | xxx | 99 |