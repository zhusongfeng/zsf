
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
        console.log(2222222)
        $('.keyboard-cover').hide();

    });

})



$('#location').on('click', function() {
    document.querySelector('#location').scrollIntoView();
});