// 文章相关对象  
let article = {
    /*
        {
            textId 文章id
            title  文章标题
            html 文章内容
            address_img 文章封面背景
            typeId 文章id
            userId 用户id
            visit_num 文章访问数
            express_time 发布时间
        },
    */
    // 文章列表
    articleList: [
        // {
        //     textId: "T202275982",
        //     title_input: "撩人情话污一点的又污又撩的情话句子【精选101句】",
        //     html: '<p style="text-align: start;">6、如果距离是思念的借口，那么让我与你远隔天涯。沿路的风景再美，也比不上在你的身边徘徊抽出我埋藏在心底的情和意，织一张网挂在这里，等你。我爱得不多，一分钟只爱了你60秒。</p><p style="text-align: start;">7、明明很想见你，可是却没有勇气，我在想会不会有一天能平静的跟你说声嗨，微笑的走过你身边，转身却泪流满面的说我真的好爱你。</p><p style="text-align: start;">8、污污的情话套路到了一定的年龄，对于那些比较浪漫和梦幻的情话，女生不会那么的动心了，倒是对于那种比较污污的情话比较的钟爱，在女生的内心深处，觉得那些比较污一些的情话听起来非常的有意思，而且比较符合自己现在的年龄阶段和心境。就比如说：“男：今晚我要干一件大事；女：什么大事？男：你就是我的大事”这段对话，就会深得女生的心意</p><p style="text-align: start;">9、“为了节约用水，以后可以一起洗澡吗？”</p>',
        //     address_img: "https://y-stu.oss-cn-chengdu.aliyuncs.com/files/null/%E8%B5%B7%E9%A3%9E.jpg",
        //     typeId: "0",
        //     userId: 2,
        //     visit_num: 0,
        //     express_time: "2022-11-4 16:29:19",
        // },
        // {
        //     textId: "W202277466",
        //     title_input: "撩人情话污一点的又污又撩的情话句子",
        //     html: "<p><br></p><h1>撩人情话污一点的又污又撩的情话句子【精选101句】</h1><p><em>admin</em> <em>句子大全</em> <em>2022-07-17 01:07:16</em> &nbsp;</p><p><br></p><p>1、男生“撩妹”小套路情话，甜蜜度10＋，单身汪：我要做锡纸烫！</p><p>2、你为什么乱动我东西！ 我动什么了？我的心</p><p>3、咱俩友情到头了，该发展成爱情了。</p><p>4、饭在锅里人在床上你随便啊～</p><p>5、我爱你，所以你不用做那个听话才能拿到小红花的小朋友，就算你耍赖闹小脾气我也是最最偏心你，口袋里的糖都给你。</p><p>6、如果距离是思念的借口，那么让我与你远隔天涯。沿路的风景再美，也比不上在你的身边徘徊抽出我埋藏在心底的情和意，织一张网挂在这里，等你。我爱得不多，一分钟只爱了你60秒。</p><p>7、明明很想见你，可是却没有勇气，我在想会不会有一天能平静的跟你说声嗨，微笑的走过你身边，转身却泪流满面的说我真的好爱你。</p><p>8、污污的情话套路到了一定的年龄，对于那些比较浪漫和梦幻的情话，女生不会那么的动心了，倒是对于那种比较污污的情话比较的钟爱，在女生的内心深处，觉得那些比较污一些的情话听起来非常的有意思，而且比较符合自己现在的年龄阶段和心境。就比如说：“男：今晚我要干一件大事；女：什么大事？男：你就是我的大事”这段对话，就会深得女生的心意</p><p>9、“为了节约用水，以后可以一起洗澡吗？”</p><p>10、花有什么好种的，来和我种草莓。</p>",
        //     address_img: "https://y-stu.oss-cn-chengdu.aliyuncs.com/files/null/%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8.jpg",
        //     typeId: "1",
        //     userId: 2,
        //     visit_num: 0,
        //     express_time: "2022-11-4 16:29:34",
        // }
    ],

    typeList: [// 文章分类列表
        {
            id: "0",
            name: "美食"
        },
        {
            id: "1",
            name: "娱乐"
        },
        {
            id: "2",
            name: "搞笑"
        },
        {
            id: "3",
            name: "体育"
        },

    ],

    init: function () {// 初始化函数,打开页面的时候去localStroage加载文章列表和文章分类列表，如果没有就用默认数据

        let article = JSON.parse(localStorage.getItem("articleList"));
        console.log(article);
        if (article) {
            this.articleList = article
        }

        let type = JSON.parse(localStorage.getItem("typeList"))
        console.log(type);
        if (type) {
            this.type = type
        }

    },

    // 读取本地存储数据
    getDate: function () {
        var data = localStorage.getItem("essay_code");
        if (data != null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    },

    save: function () {// 保存文章列表，修改了文章里的内容后需要调用这个方法
        localStorage.setItem("articleList", JSON.stringify(this.articleList))
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
     * 根据文章id获取文章对象
     * @param {*} id 文章的id
     * @returns 文章对象
     */
    getArticleInfoById: function (id) {// 根据文章id获取文章信息,文章列表点击文章进入文章信息页时需要显示这篇文章的信息
        let index = this.getArticleIndexById(id)
        //   this.addArticleVisite(id)// 增加该文章的浏览次数
        return this.articleList[index]
    },

    addArticleVisite: function (id) {// 增加文章的阅读量(浏览次数)
        let index = this.getArticleIndexById(id)
        this.articleList[index].visit++
        this.save()
    },

    getArticleIndexById: function (id) {// 根据文章id获取文章的索引,方便内部方法调用
        for (let i = 0; i < this.articleList.length; i++) {
            if (this.articleList[i].id == id) {
                return i
            }
        }
    },

    /**
     * 根据文章分类id，获取满足条件的文章数组
     * @param {*} typeId 文章分类id
     * @returns 当前分类id的文章列表(临时列表)
     */
    getArticleListByTypeId: function (typeId) {
        // 定义一个准备返回用的数组
        let tempArr = []
        // 遍历文章列表
        for (let i = 0; i < this.articleList.length; i++) {
            // 
            if (this.articleList[i].typeId === typeId) {
                tempArr.push(this.articleList[i])
            }
        }
        return tempArr

    },

    /**
     * 添加一篇文章,记得给关注了这个作者的用户推送通知
     * @param {*} articleInfo 文章对象
     */
    addArticleInfo: function (articleInfo) {
        // 这里用unshift添加文章到数组的第一位，默认按发布时间降序排列
        this.articleList.unshift(articleInfo)
        this.saveArticleList()// 保持数组数据到localStroage
    },

    /**
     * 根据用户id，获取该用户发表的所有文章
     * @param {*} userid 
     * @returns 
     */
    getArticleListByUserId: function (userid) {
        // let tempArr = []
        // return tempArr
    },

    /**
     * 上传封面图片功能
     */
    putImg: function () {
        var formData = new FormData();   //新建表单元素
        formData.append('file', $('#upload_img')[0].files[0]);
        // console.log(document.getElementById("upload_img").files[0]);
        $.ajax({
            type: 'POST',
            // http://yuanchanglin.com:8080/editorUpload // wangEditor图片上传服务器
            url: 'http://yuanchanglin.com:8080/upload',// 图片上传服务器
            data: formData,
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: false, // 告诉jQuery不要去设置Content-Type请求头
            async: false,
            success: function (res) {
                // console.log("服务器返回数据:", res)
                $("#cover_image_img").prop("src", res.data)
            }
        })
    },

    /**
     * 
     * @param {*} userId 用户id
     * 发布文章功能
     */
    putText: function (userId) {
        // 文章对象
        essay = {};
        // 调用时间函数
        this.getTime();
        // 文章id(唯一值，根据id可以查看文章)
        var randomLetter = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        // id生成原理(随机字母 + 202212 + 时间戳后几位)
        var textId = randomLetter + "2022" + time_stamp.toString().slice(7, 12);
        essay.textId = textId;
        // 文章标题
        var title_input = document.querySelector("#title_input").value;
        essay.title_input = title_input;
        // 文章内容
        var html = editor.getHtml();
        // 文章纯文本
        var text = editor.getText();
        essay.text = text;
        essay.html = html;
        // 文章的封面背景
        var cover_image_img = document.querySelector("#cover_image_img");
        // 判断是否用户是否上传封面背景图片
        if (cover_image_img.src == "") {
            address_img = "";
            essay.address_img = address_img;
        } else {
            address_img = cover_image_img.src;
            essay.address_img = address_img;
        }
        // 文章分类id
        // 获取文章分类id功能
        // 获取分类元素
        var btn_classify = document.querySelectorAll(".btn_classify");
        // // 循环绑定事件
        for (var i = 0; i < btn_classify.length; i++) {
            // 判断当前选中的分类
            if ($(".btn_classify").eq(i).prop("class") == "btn_classify btn_classify_over") {
                var typeId = $(".btn_classify").eq(i).attr("index");
                essay.typeId = typeId;
            }
        }
        // 循环绑定事件
        // 发表用户id(当前登录的用户id)
        var userId = userId;
        essay.userId = userId;
        // 文章访问数
        var visit_num = 0;
        essay.visit_num = visit_num;
        // 点赞数
        var praise = 0;
        essay.praise = praise;
        // 文章发表时间
        var express_time = datas + " " + current_time;
        essay.express_time = express_time;

        // 查看文章对象
        // console.log(essay);
        // 添加到文章数组
        article.articleList.push(essay);
        console.log(article.articleList);

        // 保存到本地
        localStorage.setItem("articleList", JSON.stringify(article.articleList));
        // 发布成功刷新页面
        location.replace(location.href);
    },

    /**
     * 
     * @param {*} userId 用户id
     * 个人中心查看我自己的文章
     */
    myText: function (userId) {

    },

    /**
     * 
     * @param {*} user 用户id
     */
    updateUser: function (user) {

    },

    /**
     * 查看给我文章评论的用户通知
     */
    lookNotice: function () {

    },

}

article.init()