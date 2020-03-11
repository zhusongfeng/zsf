
$(document).ready(function(){
    $('.keyboard-cover').hide();

    //选择套餐
    $('#options li').on('click', function() {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');

    });

    //解决键盘遮挡
    $("input").focus(function(){
        document.querySelector('#name').scrollIntoView();
        $('.keyboard-cover').show();
    });
    $("input").blur(function(){
        $('.keyboard-cover').hide();

    });
    $('#location').on('click', function() {
        var scrollTop=document.body.scrollTop+document.documentElement.scrollTop+300+'px';
        console.log(333,scrollTop)
        $('html,body').animate({scrollTop:scrollTop},'slow');

    });


})



