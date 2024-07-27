(function($) {
    // "use strict";

    var fullHeight = function () {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();

    // $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    // });

    // 改為由 body 往下綁定事件
    $('body').on('click', '#sidebarCollapse', function(e) {
        e.preventDefault();
        $('#sidebar').toggleClass('active');
    });

})(jQuery);


