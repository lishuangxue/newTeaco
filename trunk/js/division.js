    /*  女装销量 */
    $('.rightbook  ul li').mouseenter(function(){
        $(this).find('.rightbox').show()
        $(this).siblings().find('.rightbox').hide()        
        $(this).find('.righttitle').hide()
        $(this).siblings().find('.righttitle').show()
    })