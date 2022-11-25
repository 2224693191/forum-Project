// 所有的数据都存储到这个data里面
let data = {
    // 所有的用户都存到这个数组里
    userList: [
        {
            id: 20221106,
            nickName: "佳佳辉",
            img: "https://img1.baidu.com/it/u=4268989635,1880580995&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
            email: "2224693191@qq.com",
            password: "123456cj",
            phone: "13036436228",
            bgpic: "https://y-stu.oss-cn-chengdu.aliyuncs.com/files/null/jk%E5%B0%81%E9%9D%A2%E8%83%8C%E6%99%AF.jpg",
            sign: "不用迷恋哥，哥只是传说",
            creatTime: "2022-11-2 00:00:00",
            experience: 888,
        },
        {
            id: 20221129,// 用户id,唯一标识,
            nickName: "大威天龙",// 用户昵称,显示用,
            img: "https://profile.csdnimg.cn/9/F/5/2_qq_36569945",// 用户头像,显示用
            email: "2664265545@qq.com",// 登录,接收邮件
            password: "123456",// 用户密码,登录用
            phone: "15283079837",// 用户手机号
            bgpic: "https://profile.csdnimg.cn/9/F/5/2_qq_36569945",// 个人主页图片
            sign: "用心分享生活",//签名，显示用
            creatTime: "2022-11-07 15:15:00",// 加入时间,
            experience: 15,// 用户经验值  15/50 lv1   55/100  lv2  200/500 lv3
        },
        {
            id: 20221133,// 用户id,唯一标识,
            nickName: "小张",// 用户昵称,显示用,
            img: "https://profile.csdnimg.cn/9/F/5/2_qq_36569945",// 用户头像,显示用
            email: "1040068055@qq.com",// 登录,接收邮件
            password: "456789",// 用户密码,登录用
            phone: "17360543359",// 用户手机号
            bgpic: "https://profile.csdnimg.cn/9/F/5/2_qq_36569945",// 个人主页图片
            sign: "用心分享生活",//签名，显示用
            creatTime: "2022-10-27 16:15:00",// 加入时间,
            experience: 15,// 用户经验值  15/50 lv1   55/100  lv2  200/500 lv3
        }
    ],
    // 用户关注表
    userFansRelation: [
        {
            userId: 20221129, // 登录用户id
            userFollwerId: 20221106 // 被取关的用户id
        },
        {
            userId: 20221133,
            userFollwerId: 20221106
        },
        {
            userId: 20221106,
            userFollwerId: 20221129
        },
        {
            userId: 20221106,
            userFollwerId: 20221133
        },

    ],
    // 文章评论列表
    articleCommentList: [
        {
            id: 1,//主键id
            articleId: 1, // 文章id new Date.getTime()
            userId: 1,// 评论用户的id
            content: "评论内容",// 评论内容
            createTime: "2022-10-11 12:25:15"// 评论时间
        }
    ],
    // 通知列表
    notifyList: [
        {
            id: 1,// 主键id
            userId: 1,// 被通知人id
            createTime: "2022-10-01 12:12:12",// 通知时间
            content: "xxx评论了你的文章",// 通知内容
            isRead: false,// true 已读 false 未读
        }
    ],
    // 初始化函数，打开页面将默认账号添加进去
    init: function () {
        // 将默认账号添加本地储存
        localStorage.setItem("userLists", JSON.stringify(this.userList));
        // 将默认关注绑定表格添加本地储存
        localStorage.setItem("userFansRelations", JSON.stringify(this.userFansRelation));
        // 将文章评论列表添加本地储存
        localStorage.setItem("articleCommentLists", JSON.stringify(this.articleCommentList));
        // 将通知列表添加本地储存
        localStorage.setItem("notifyLists", JSON.stringify(this.notifyList));

    },

}

// 打开页面自动调用默认函数
data.init();