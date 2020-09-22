/* 登录 */
/* 用户名添加输入事件 */
$('#login .username').keyup(function(){
    let delstr=$('.username').val();
    if(delstr.length>0){   
        $(this).prev('img').css('display','block');
    }else{
        $(this).prev('img').css('display','none');        
    }
 
})
/* 添加删除图片的点击事件 */
$('#login .delimg').click(function(){
    $(this).css('display','none');  
    $(this).next('input').prop('value',"");         
})
/* 用密码添加输入事件 */
$('#login .pwd').keyup(function(){
    let delstr=$('.pwd').val();
    if(delstr.length>0){   
        $(this).prev('img').css('display','block');
    }else{
        $(this).prev('img').css('display','none');        
    }
})
/* 添加关闭图片的点击事件 */
/* 关于点击图片切换要使用标杆思想 */
let flag=false;
$('#login .climg').click(function(){
    if(!flag){
        $(this).prop('src',"./images/open.png");
        $(this).siblings('input').prop('type',"text");
    }else{
        $(this).prop('src',"./images/close.png");
        $(this).siblings('input').prop('type',"password"); 
    }
    flag=!flag;
})

/* 表单验证 */
$(function (){
    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
        rules: {
            username: {
                required: true,
                username:true,
            },
            pwd: {
                required: true,
                pwd:true
            }
        },
        messages: {
            username: {
                required: "请输入用户名",
            },
            pwd: {
                required: "请输入密码",
            }               
        }
    })
    //用户名
    jQuery.validator.addMethod("username", function(value, element) {   
            var tel = /^[A-Za-z0-9]{4,10}$/;
            return this.optional(element) || (tel.test(value));
    }, "请正确填写您的用户名");
    //密码
    jQuery.validator.addMethod("pwd", function(value, element) {   
            var tel = /^[A-Za-z0-9]{6,16}$/;
            return this.optional(element) || (tel.test(value));
    }, "请正确填写您的密码");

});

/* 添加扫码登录的点击事件 */
$('#login .login-tab-l').click(function(){
    $('#login .saoma').css('display','block')
    $('#login .account').css('display','none')
    $(this).css('color','#ff6600')
    $('#login .login-tab-r').css('color','#333')
})
$('#login .login-tab-r').click(function(){
    $('#login .saoma').css('display','none')
    $('#login .account').css('display','block')
    $(this).css('color','#ff6600')
    $('#login .login-tab-l').css('color','#333')
})
/* 给二维码添加移入事件 */
$('.ma1,.ma2').hover(function(){
    $('.ma2').stop().fadeOut();
    $('.ma1').stop().animate({left:90})
},function(){
    $('.ma2').stop().fadeIn();
    $('.ma1').stop().animate({left:26})
})