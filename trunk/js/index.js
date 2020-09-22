/* 轮播图 */
/* banner*/
/* slider */
/* 抽取轮播方法 */

function lunbo(selector,boxh,w,h){
    $(selector).slidebox({
            boxh: boxh,//盒子的高度
            w: w,//图片的宽度
            h: h,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
                });  
        }
//文档加载事件
$(function (){
    lunbo('#slider',420,1000,420)
    //  lunbo('#slider2',285,955,285)
     lunbo('#slider3',300,455,300)
     lunbo('#slider4',300,455,300)
     lunbo('#slider5',300,455,300)
     lunbo('#slider6',300,455,300)
})

/* 倒计时 */
$(function(){
    let timeBox=document.getElementById('timeBox');
    function diffBox(){
        let curDate=new Date();
        let newDate=new Date('2021-9-21 00:00:00');
        let diffTime=newDate-curDate;//毫秒
        //天
        let days=Math.floor(diffTime/1000/60/60/24);
        days=days<10?'0'+days:days;
        //小时
        let hours=Math.floor(diffTime/1000/60/60%24);
        hours=hours<10?'0'+hours:hours;
        //分钟
        let minutes=Math.floor(diffTime/1000/60%60);
        minutes=minutes<10?'0'+minutes:minutes;
        //秒
        let seconds=Math.floor(diffTime/1000%60);
        seconds=seconds<10?'0'+seconds:seconds;
    
        let time=`${hours}`
        let time2=` ${minutes}`
        let time3=` ${seconds}`
        
        
        timeBox.innerHTML=time;
        timeBox1.innerHTML=time2;
        timeBox2.innerHTML=time3;
    
        //清除定时器
        if(days<=0 && hours<=0 && minutes<=0 && seconds<=0){
            clearInterval(timeId);
        }
    }
    //调用
    diffBox();
    //定时器
    let timeId= setInterval(diffBox,1000);
})
