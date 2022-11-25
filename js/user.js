// 争对data.js里的数组的操作
let user = {
    // 这里可以访问到data.js的内容
    userList: data.userList,
    // 用户关注表
    userFansRelation: data.userFansRelation,

    // 读取本地存储用户账号数据
    getDate: function () {
        var data = localStorage.getItem("userLists");
        if (data != null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    },

    // 读取本地存储用户账号关注绑定表数据
    getUserFans: function () {
        var data = localStorage.getItem("userFansRelations");
        if (data != null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    },

    // 保存账号关注绑定表，修改了账号关注后需要调用这个方法
    saveUserFans: function (data) {
        localStorage.setItem("userFansRelations", JSON.stringify(data))
    },

    // 保存账号列表，修改了账号里的内容后需要调用这个方法
    save: function (data) {
        localStorage.setItem("userLists", JSON.stringify(data))
    },

    /**
    * 封装一个获取时间函数
    */
    getTime: function () {
        // 获取到当前的时间
        var time = new Date();
        // 年
        var year = time.getFullYear();
        // 月
        month = time.getMonth() + 1;
        // 日
        day = time.getDay();
        // 时
        h = time.getHours();
        // 分
        m = time.getMinutes();
        // 秒
        s = time.getSeconds();
        // 时间戳
        time_stamp = time.getTime();
        // 年月日
        datas = year + "-" + month + "-" + day;
        // 当前时间
        current_time = h + ":" + m + ":" + s;
        // console.log(datas + " " +  current_time);
    },

    /**
     * 注册功能
     * @param {*} phone 用户名(手机号)
     * @param {*} email 邮箱
     * @param {*} passWord 密码
     * @param {*} nickName 昵称
     */
    register: function (phone, email, passWord, nickName) {
        // 注册之前先读取已有的账号
        var data = this.getDate();
        // 用户账号对象
        var userObj = {};
        // 调用时间函数
        this.getTime();
        // 账号id(唯一值)
        var phone_s = time_stamp.toString().slice(9, 11);
        var id = parseInt("2022" + month + phone_s);
        userObj.id = id;
        // 用户昵称
        var nickName = nickName;
        userObj.nickName = nickName;
        // 用户头像(注册系统默认)
        var img = "";
        userObj.img = img;
        // 用户邮箱
        var email = email;
        userObj.email = email;
        // 用户密码
        var password = passWord;
        userObj.password = password;
        // 用户名
        var phone = phone;
        userObj.phone = phone;
        // 个人主页背景(系统默认)
        var bgpic = "";
        userObj.bgpic = bgpic;
        // 个性签名(系统默认)
        var sign = "用心分享生活";
        userObj.sign = sign;
        // 注册时间
        var creatTime = datas + " " + current_time;
        userObj.creatTime = creatTime;
        // 经验值
        var experience = 0;
        userObj.experience = experience;
        // 添加到账号数组
        this.userList.push(userObj);
        // 保存到本地存储
        this.save(this.userList);
        console.log("账号数组", this.userList);
    },

    /**
     * 密码登录功能
     * @param {*} phone 手机号获取邮箱
     * @param {*} password 密码
     */
    loginPass: function (phone, password) {
        var span = document.querySelector(".login-code-div-span");
        // 查看当前账号
        var data = this.getDate();
        // 定义一个初始变量，默认为null
        var user = null;
        // 遍历数组
        for (var i = 0; i < data.length; i++) {
            // 如果数组里某个用户的用户名和输入的用户名相等
            if (phone === data[i].phone) {
                // 找到需要登录的账号了，存到user里
                user = data[i];
                // break;// 跳出循环，提高效率
            }
        };
        // 判断邮箱是否存在
        if (user == null) {
            // 成功提示信息
            $(".login-code-div").slideDown();
            span.innerHTML = "手机号错误！";
            setInterval(function () {
                $(".login-code-div").slideUp(1000);
            }, 1500);
        } else {
            // 判断密码是否相等
            if (password == user.password) {
                // 成功提示信息
                $(".login-code-div").slideDown();
                span.innerHTML = "登录成功！";
                setInterval(function () {
                    $(".login-code-div").slideUp(1000);
                }, 1500);
                // 将登录id保存到sessionStorage
                sessionStorage.setItem("userId", user.id);
            } else {
                // 失败提示信息
                $(".login-code-div").slideDown();
                span.innerHTML = "密码错误！";
                setInterval(function () {
                    $(".login-code-div").slideUp(1000);
                }, 1500);
            }
        }

    },

    /**
     * 邮箱登录功能
     * @param {*} email 邮箱
     * @param {*} password 密码
     */
    loginEmail: function (email, password) {
        var span = document.querySelector(".login-code-div-span");
        // 查看当前账号
        var data = this.getDate();
        // 定义一个初始变量，默认为null
        var user = null;
        // 遍历数组
        for (var i = 0; i < data.length; i++) {
            // 如果数组里某个用户的用户名和输入的用户名相等
            if (email === data[i].email) {
                // 找到需要登录的账号了，存到user里
                user = data[i];
                // break;// 跳出循环，提高效率
            }
        }
        // 判断邮箱是否存在, 不存在就自动注册
        if (user == null) {
            this.register("", email, password, "");
            // 成功提示信息
            $(".login-code-div").slideDown();
            span.innerHTML = "注册成功！";
            setInterval(function () {
                $(".login-code-div").slideUp(1000);
            }, 1500);
            // 获取最新的用户数组对象
            var datas = this.getDate();
            // 通过当前邮箱获取登录id
            var loginObj = datas.find(item => item.email == email);
            // 将登录id保存到sessionStorage
            sessionStorage.setItem("userId", loginObj.id);
        } else {
            // 判断密码是否相等
            if (password == user.password) {
                // 成功提示信息
                $(".login-code-div").slideDown();
                span.innerHTML = "登录成功！";
                setInterval(function () {
                    $(".login-code-div").slideUp(1000);
                }, 1500);
                // 将登录id保存到sessionStorage
                sessionStorage.setItem("userId", user.id);
            } else {
                // 失败提示信息
                $(".login-code-div").slideDown();
                span.innerHTML = "密码错误！";
                setInterval(function () {
                    $(".login-code-div").slideUp(1000);
                }, 1500);
            }
        }

    },


    /**
     * 根据用户id查询单个用户对象
     * @param {*} userId 用户id
     * @returns 用户对象
     */
    getUserById: function (userId) {
        // 查看当前账号
        var data = this.getDate();
        // 将传入的用户id和用户id数组进行对比
        var userobj = data.find(item => item.id == userId);
        // 返回匹配的用户对象
        return userobj;
    },

    /**
     * 根据多个用户id查询用户列表
     * @param  {...any} userIds 用户id数组
     * @returns 用户数组
     */
    getListByIds: function (userIds) {
        // 查看当前账号
        var data = this.getDate();
        let userArr = [];
        userIds.forEach(items => {
            // 根据id数组一一匹配用户对象
            var userobj = data.find(item => item.id == items);
            // 将查到的用户添加到数组
            userArr.push(userobj);
        });
        // 返回用户数组
        return userArr;
    },

    /**
     * 根据电话查询单个用户，找不到返回undefined
     * @param {*} userPhone 电话号码(string)
     * @returns 返回用户对象
     */
    getUserByPhone: function (userPhone) {
        // 查看当前账号
        var data = this.getDate();
        // 将传入的电话号码和用户号码数组进行对比
        var userobj = data.find(item => item.phone == userPhone);
        // 返回匹配的用户对象
        return userobj;
    },

    /**
     * 根据邮箱查询单个用户，找不到返回undefined
     * @param {*} userEmail 邮箱
     * @returns 返回用户对象
     */
    getUserByEmail: function (userEmail) {
        // 查看当前账号
        var data = this.getDate();
        // 将传入的用户邮箱和用户邮箱数组进行对比
        var userobj = data.find(item => item.email == userEmail);
        // 返回匹配的用户对象
        return userobj;
    },

    /**
     * 根据用户id，返回用户的索引
     * @param {*} userId 用户id
     * @returns 返回指定用户索引
     */
    getUserIndexById: function (userId) {
        // 查看当前账号
        var data = this.getDate();
        // 根据传入id获取index
        var index = data.findIndex(item => item.id == userId);
        // 返回指定用户索引
        return index;
    },

    /**
     * 点击关注的时候，关注用户
     * @param {*} userId 登录用户id
     * @param {*} userFollwerId 被关注的用户id
     */
    followUser: function (userId, userFollwerId) {
        // 查看当前用户关注表
        var data = this.getUserFans();
        // 当关注了用户后添加新对象
        var newFllowUser = {
            userId: userId, // 当前用户id
            userFollwerId: userFollwerId, // 被关注用户id
        }
        // 将关注的对象添加到关注绑定表
        user.userFansRelation.push(newFllowUser);
        // 将新的数组放到本地储存
        this.saveUserFans(user.userFansRelation);

    },

    /**
     * 点击取关的时候，取关用户
     * @param {*} userId 登录用户id
     * @param {*} userFollwerId 被取关的用户id
     */
    unfollow: function (userId, userFollwerId) {
        // 查看当前用户关注表
        var data = this.getUserFans();
        // 遍历关注用户表
        var userObj = data.forEach((i, e) => {
            // 判断当前登录用户和取关的用户id
            if (i.userId == userId && i.userFollwerId == userFollwerId) {
                // 取关成功后删除关注绑定关系
                user.userFansRelation.splice(e, 1);
                // 将新的数组添加到本地存储
                this.saveUserFans(user.userFansRelation)
            }
        })
    },

    /**
     * 根据当前登录id获取关注的id数组
     * @param {*} userId 登录id
     * @returns 关注的id数组
     */
    followUserIdList: function (userId) {
        // 查看当前用户关注表
        var data = this.getUserFans();
        // 定义关注id数组
        var followUser = [];
        // 遍历关注用户表
        data.forEach((i, e) => {
            // 判断登录id关注的用户id
            if (i.userId == userId) {
                // 获取关注id
                var userFollwerId = i.userFollwerId;
                // 将关注id存入关注id数组
                followUser.push(userFollwerId);
            }
        })
        // 返回关注id数组
        return followUser;
    },

    /**
     * 根据当前登录id获取粉丝数组
     * @param {*} userId 登录id
     * @returns 返回粉丝数组
     */
    fansUserIdList: function (userId) {
        // 查看当前用户关注表
        var data = this.getUserFans();
        // 定义粉丝数组
        var fansUser = [];
        // 遍历关注用户表
        data.forEach((i, e) => {
            // 判断登录id关注的用户id
            if (i.userFollwerId == userId) {
                // 获取关注id
                var userFollwerId = i.userId;
                // 将关注id存入关注id数组
                fansUser.push(userFollwerId);
            }
        })
        // 返回粉丝数组
        return fansUser;
    },

    /**
     * 查看粉丝数量
     * @param {*} userId 用户id
     * @returns 粉丝数
     */
    fansCount: function (userId) {
        return this.fansUserIdList(userId).length;
    },

    /**
     * 查看关注数量
     * @param {*} userId 用户id
     * @returns 关注数量
     */
    followCount: function (userId) {
        return this.followUserIdList(userId).length;
    },

    /**
     * 获取登录的用户信息，
     * @returns 当前登录用户对象
     */
    getLoginUserInfo() {
        // 查看当前账号
        var data = this.getDate();
        // 获取当前登录用户的id
        var userId = sessionStorage.getItem("userId");
        // 获取当前登录id的对象
        var userObj = data.find(item => item.id == userId);
        // 返回登录用户对象
        return userObj;
    },

    /**
     * 修改登录密码
     * @param {*} userId 当前登录id
     * @param {*} passWord 新的密码
     */
    updateUserPassword(userId, passWord) {
        // 查看当前账号
        var data = this.getDate();
        console.log(data);
        // 通过当前登录id查看用户对象
        var userObj = data.find(item => item.id == userId);
        // 修改当前用户的密码
        userObj.password = passWord;
        // 获取当前旧数据的索引
        var index = this.getUserIndexById(userId);
        // 删掉之前旧用户对象
        data.splice(index, 1);
        // 添加新密码用户对象
        data.push(userObj);
        this.save(data);

    }

}
