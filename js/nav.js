(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.header__menu-second').toggleClass('menu_state_open');
        });
    });
})(jQuery);
