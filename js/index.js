$(function () {
    $('.item>div').on('click',function () {
        $('.item>div').removeClass('active');
        $(this).addClass('active');
        $('.line>img').hide();

        $('.line>img').eq($(this).index()).show();
    })
});