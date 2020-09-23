$('#payment .itembook li').hover(function(){
    $(this).css('backgroundColor','#f2f2f2')
},function(){
    $(this).css('backgroundColor','#fff')
})

/* 1.全选 */
$('.selall').click(function(){
    $('.singlechk,.selall').prop('checked',$(this).prop('checked'))
        // 总价
        totalPrice()
})

/* 2.点取取消一个全选就取消 */
/* 当选中复选框的个数等于复选框的个数时就全选 */
$('.singlechk').click(function(){
    let singlechkNum=$('.singlechk:checked').length
    let singlechkAll=$('.singlechk').length
    if(singlechkNum===singlechkAll){
        $('.selall').prop('checked',true)
    }else{
        $('.selall').prop('checked',false)   
    }
    //调用
    // 总价
    totalPrice()
})

/* 3.点击加 */
$('.addbtn').click(function(){
   let num=$(this).siblings('.count').val()
   num++;
   $(this).siblings('.count').val(num)
   //调用
   singleTotalPrice(this,num)
    // 总价
    totalPrice()
})
/* 4.点击减 */
$('.reducebtn').click(function(){
    let num=$(this).siblings('.count').val()
    if(num>1){
        num--;
    }
    $(this).siblings('.count').val(num)

     //调用
     
    //小计
    singleTotalPrice(this,num)

    // 总价
    totalPrice()
 })
/* 5.删除单个按钮的点击事件 */
$('.delbtn').click(function(){
    $(this).parents('tr').remove()
        //重新计算总价
        totalPrice()
})
/* 6.删除全选的点击事件 */
$('.delallbtn').click(function(){
    $('.singlechk:checked').each(function(index,dom){
        $(this).parent().parent().remove();
        //重新计算总价
        totalPrice()
    })
})
/* 7.改变数量的事件 */
$('.count').keyup(function(){
    let num=$(this).val()
    if(isNaN(num) || num==0){
        $(this).val(1);
    }
    if(num>200){
        $(this).val(200)
        num=200;
    }
    //重新计算小计
    singleTotalPrice(this,num)
    //重新计算总价
    totalPrice()
})

 /* 封装函数 */
/* 小计*/
 function singleTotalPrice(obj,num){
    /* 小计=数量*单价 */
    let singlePrice=$(obj).parent().siblings('.singlePrice').html()
    let singleTotalPrice=singlePrice*num
    $(obj).parent().siblings('.singleTotalPrice').html(singleTotalPrice.toFixed(2))
        
 }
 /* 总价 */
 function totalPrice(){
     let sum=0;
     let countall=0;
    $('.singlechk:checked').each(function(index,dom){
        let singleTotalPrice=$(dom).parent().siblings('.singleTotalPrice').html()
        let countval=$(dom).parent().siblings().find('.count').val()
        countall+=parseFloat(countval)
        sum+=parseFloat(singleTotalPrice)
    })
    $('.totalPrice').html(sum.toFixed(2))
    $('.totalNum').html(countall)
 }
