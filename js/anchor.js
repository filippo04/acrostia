$(document).ready(function(){
    $(".hd-menu, .sr-menu, .ab-menu, .wk-menu, .cn-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
