
/* 点击加 */
$('.addbtn').click(function(){
   let num=$(this).siblings('.count').val()
   num++;
   $(this).siblings('.count').val(num)
   //调用
   singleTotalPrice(this,num)
    // 总价
    totalPrice()
})
/* 点击减 */
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
