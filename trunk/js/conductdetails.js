$(function () {

    var magnifierConfig = {
        magnifier: "#magnifier1",//最外层的大容器
        width: 380,//承载容器宽
        height: 500,//承载容器高
        moveWidth: null,//如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 5//缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);

    /*magnifier的内置函数调用*/
    /*
        //设置magnifier函数的index属性
        _magnifier.setIndex(1);

        //重新载入主图,根据magnifier函数的index属性
        _magnifier.eqImg();
    */
});

    /* 选项卡 */
    $('#item .itemdetail span').mouseenter(function(){
        $(this).addClass('spancur').siblings().removeClass('spancur')
        let index= $(this).index();
        let obj=$('.appraise').eq(index).addClass('appraisecur').siblings().removeClass('appraisecur')
    })

    /* 版本选择 */
    $('#library .she .choice span').click(function(){
        $(this).addClass('spanbg').siblings().removeClass('spanbg')
    })

    $('.choice1 span').click(function(){
        $(this).addClass('bcur').siblings().removeClass('bcur')
    })

    /* li的背景颜色 */
    $('#item .itembook  ul li,#item .itemlook  ul li').hover(function(){
        $(this).css('backgroundColor','#f2f2f2')
    },function(){
        $(this).css('backgroundColor','#fff')
    })

    /* 数量加减 */
    $('.add').click(function(){
        let index=$('.num').eq(1).val()
        index++;
        $('.num').eq(1).val(index)
    })
    $('.reduce').click(function(){
        let index=$('.num').eq(1).val()
        index--; 
        if(index<=1){
            $('.num').eq(1).val(1)
        }else{
            $('.num').eq(1).val(index)
        }
    })
    