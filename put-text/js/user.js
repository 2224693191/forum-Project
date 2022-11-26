// 争对data.js里的数组的操作
let user = {
    userList: data.userList, // 这里可以访问到data.js的内容
    userFansRelation: data.userFansRelation,
    /**
     * 用户登录 , 如果是当天第一次登录，加10经验
     * @param {*} account 登录邮箱
     * @param {*} password 登录的密码
     * @returns 成功登录返回 当前登录的对象 返回null表示用户名或密码错误
     */
    login: function (account, password) {
        let user = null
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].email == account && this.userList[i].password == password) {
                user = this.userList[i]
                sessionStorage.setItem("curUser", user)
                let time = new Date().getTime() - new Date(user.lastLoginTime)
                // time>1000*60*60*24
                // 
                this.updateUserLastLoginTime(user.id)
            }
        }
        return user
    },

    updateUserLastLoginTime: function (userId) {
        let index = this.getUserIndexById(userId)
        let date = new Date()
        this.userList[index].lastLoginTime = date.getFullYear + "-" + (date.getMonth() + 1) + '-' + date.getDate()
        this.save()
    },

    getUserIndexById: function (userId) {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].id == userId) {
                return i
            }
        }
    },

    /**
     * 
     * @param {*} id1 被关注用户id
     * @param {*} id2 关注用户id
     * 
     */
    userFollw: function (id1, id2) {
        // 判断有没有关注
    },

    // 取关
    // 修改个人信息
    updateLoginUserInfo: function () {
        // 
        arr[1] = {

        }
    },

    /**
     * 根据指定的用户id查看当前用户关注的用户列表
     * @param {*} usersId 用户id
     * @returns 返回当前用户关注的用户列表
     */
    checkInterestList: function(usersId){
        // 查看到的用户列表
        return arrUser;
    },

    /**
     * 注册入口
     * 将注册成功的用户名、密码和其他信息保存到localStorage中本地存储
     */
     register:function(){

    },

    /**
     * 传入用户id获取指定的用户信息
     * @param {*} userId 用户id
     * @returns 返回对应用户id的用户
     */
    getUser: function(userId){
        return user // 当前用户id的所有用户信息
    },

    /**
     * 根据当前登录的用户获取用户id，然后给文章发表评论
     * @param {*} userId 用户id
     * 用户评论功能
     */
    commentArticle: function(userId){

    },

    /**
     * 用户给某个文章发表了评论,记得给这个作者的推送xxx评论通知
     * @param {*} userId 用户id
     * 用户评论发送通知功能
     */
    notification:function(userId){

    },

    /**
    * 传入用户id，返回这个用户的所有粉丝列表
    * @param {*} userId 查看粉丝的用户id
    * @returns 粉丝 用户数组
    */
    myfans:function(userId){
        let userArr = []


        return userArr;
    },

    /**
     * 传入用户id，返回这个用户关注用户的列表
     * @param {*} userId 查看的用户id
     * @returns 关注用户列表
     */
    interestUserNum:function(userId){
        return userArr;
    }



}
// user.init()