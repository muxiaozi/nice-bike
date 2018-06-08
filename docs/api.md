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

# 帮助

### 1. 帮助列表---请求接口

- 接口描述   

点击帮助进入帮助列表，此时触发。

- 接口URL

```
GET /users/:user_id/helpList
```

- 传给后台的数据及其格式

``` 
userId:12,//当前登录用户ID，即微信号
```

- 后台返回的数据及其格式

```
{
    list:[
        {
            id:"",//该条帮助id
            tit:"",//该条帮助的题目
        }
    ],//帮助列表 
    des:'',//请求失败的描述
    result:1,//请求成功或失败的标志，0为失败 1为成功
}
```

### 2. 帮助详情---请求接口
- 接口描述   

 进入帮助列表，点击每一项时触发。

- 接口URL

```
GET /users/:user_id/helpDetail
```

- 传给后台的数据及其格式

```
id:1, //帮助ID
userId:12,//当前登录用户ID，即微信号
```

- 后台返回的数据及其格式

```
{
    tit:"如何使用小程序",//帮助题目
    step:"第一步 打开微信，第二步 打开扫一扫， 第三步 扫一扫二维码进入",//解决办法 文字描述
    imgs:['',''],//如果帮助有图片形式的展示的话，这里放图片
    des:'',//请求失败的描述
    result:1,//请求成功或失败的标志，0为失败 1为成功
}
```


# 记录

### 1. 记录列表---请求接口

- 接口描述   

点击底部第二个按钮，进入记录列表，此时触发。

- 接口URL

```
GET /users/:user_id/record
```

- 传给后台的数据及其格式

``` 
userId:12,//当前登录用户ID，即微信号
```

- 后台返回的数据及其格式

```
{
    maintain:[ 
        {
            id:"",//该条维护记录的ID
            img:'',//首图 上传图片的第一张 
            remark:"",//备注
            time:"",//时间
            place:"",//地点
        }
    ],//维护列表
    integral:[
        {
            id:"",//该条积分记录的ID
            img:'',//地址
            grade:"",//分数
            time:"",//时间 
        }
    ],//积分列表
    des:'',//请求失败的描述
    result:1,//请求成功或失败的标志，0为失败 1为成功
}
```

### 2. 维护详情---请求接口
- 接口描述   

 进入记录界面，默认是维护列表，点击每一项时触发。

- 接口URL

```
GET /users/:user_id/maintainRecord
```

- 传给后台的数据及其格式

```
id:1, //维护ID
userId:12,//当前登录用户ID，即微信号
```

- 后台返回的数据及其格式

```
{
     id:"",//该条维护记录的ID
    img:['','',''],// 上传的所有图片 
    remark:"",//备注
    time:"",//时间
    place:"",//地点
}
```

# 首页记录

### 1. 用户记录---保存接口

- 接口描述   

点击 首页的记录按钮， 填写完后，点击保存按钮时 触发。

- 接口URL

```
POST /users/:user_id/record
```

- 传给后台的数据及其格式

``` 
place：'北京市吧啦吧啦'，//地点
remark:"",//备注
ques:"",//问题选项
img:[‘’，‘’],//图片
userId:12,//当前登录用户ID，即微信号
```

- 后台返回的数据及其格式

```
{
    grade:'',//保存成功后给多少积分
    ads;[],//其他广告
    des:'',//请求失败的描述
    result:1,//请求成功或失败的标志，0为失败 1为成功
}
```
