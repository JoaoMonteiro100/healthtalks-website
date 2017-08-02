$('.carousel').carousel({
    interval: 5000 //changes the speed
})

$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 260) {
            $('.navbar').addClass('scrolled-nav');
        } else if (scrollTop < 260) {
            $('.navbar').removeClass('scrolled-nav');
        }

    });

});

$('.launch-modal').on('click', function(e){
    e.preventDefault();
    var $modalElement = $('#' + $(this).data('modal-id'));
    $modalElement.modal();
    var $iframe = $modalElement.find('iframe')[0];
    $modalElement.on('hide.bs.modal', function (e) {
        $iframe.src = $iframe.src;
    });
});