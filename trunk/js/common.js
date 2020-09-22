    /* 顶部搜索框 */
    $(window).scroll(function(){
        let str=$("html,body").scrollTop();
        if(str>=400){
            $('#topsearch').slideDown()
            $('#header .searchbox form').appendTo('#topsearch>div')
            $('#topback').slideDown()
        }else{
            $('#topsearch').slideUp()            
            $('#topsearch>div form').appendTo('#header .searchbox')  
            $('#topback').slideUp()                      
        }
    })
    /* 回到顶部*/
    $('#topback').click(function(){
        let str=$('html,body').scrollTop();
        let time=500;
        let v=str/time;
        let timeId=setInterval(function(){
                str=$("html,body").scrollTop();
                let newstr=str-v*30;
                $("html,body").scrollTop(newstr);
                /* 清除定时器 */
                if(newstr<=0){
                    clearInterval(timeId);
                 }
        },30)
    })