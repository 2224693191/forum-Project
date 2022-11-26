// 一些基本的功能


// 显示文本字数
// 1. 获取字数元素
var em_num = document.querySelector(".fonts_num").querySelector("em");
// 2. 通过输入字体获取字数
document.onkeydown = function () {
    var html_num = editor.getText().length;
    // 字体长度
    // console.log(html_num);
    em_num.innerHTML = html_num.toString();
}


// 当标题大于某个值时，自动边宽
// 1. 获取元素
var title_text_div = document.querySelector(".title_text_div");
var title_input = document.querySelector("#title_input");
// 2. 根据标题字数自动增加高度
title_input.onkeydown = function () {
    if (title_input.value.length >= 24 && title_input.value.length < 48) {
        title_text_div.style.height = "122px";
        title_input.style.height = "90px";
    } else if (title_input.value.length >= 48) {
        title_text_div.style.height = "167px";
        title_input.style.height = "135px";
    } else if (title_input.value.length <= 24) {
        title_text_div.style.height = "77px";
        title_input.style.height = "45px";
    }
}


// 显示当前登录用户的头像
// 1. 获取元素
var user_haerder_img = document.querySelector(".user_haerder_img");
// 2. 判断当前的登录用户，获取头像
user_haerder_img.src = data.userList[0].img;


// 1. 实现图片上传功能
$("#upload_img").change(function () {
    // 调用上传封面图片功能
    article.putImg();
});


// 发布文章按钮
// 1. 获取元素
var btn_put = document.querySelector("#btn_put");
// 2. 标题和内容不为空的时候按钮可以点
setInterval(function () {
    if (editor.getText().length >= 10 && title_input.value.length >= 2) {
        btn_put.style.backgroundColor = "#056DE8";
    }
}, 1000);


// 分类按钮添加样式
$(".btn_classify").click(function () {
    // 获取点击的文章分类
    $(this).addClass("btn_classify_over").siblings().removeClass("btn_classify_over");
})


// 实现发布文章功能
btn_put.addEventListener("click", function () {
    // 变色的同时，判断有没有内容能不能发布文章
    if (editor.getText().length >= 10 && title_input.value.length >= 2) {
        btn_put.disabled = false;
        article.putText(data.userList[1].id);
        // article.putText("发布成功");
    }
    // 不能发送
    if (editor.getText().length < 10 && title_input.value.length <= 2) {
        btn_put.disabled = true;
    }

})


// 回到顶部设置
$("#btn_can").click(function () {
    $("body, html").stop().animate({
        scrollTop: 0
    })
});