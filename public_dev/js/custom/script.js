$(document).ready(function () {
    $(".icon").click(function () {
        $(".icon").css({
            "background-image": 'url(/images/icon_x.png)'
    });

        $(".hide_menu").slideToggle(300);
        $(".field").show();
    });
    $(".field").click(function () {
        $(".icon").css({
            "background-image": 'url(/images/icon.png)'
        });
        $(".hide_menu").slideUp(300);
        $(".field").hide();
    });
    $(".accordion_toggle").click(function () {
        if (!$(this).find(".box_triangle").hasClass('active')) {
            $(".accordion_toggle").find(".box_triangle").removeClass('active');
            $(".accordion_toggle").next(".accordion_content").slideUp('fast');
            $(this).find(".box_triangle").addClass('active');
            $(this).next(".accordion_content").slideDown('fast');
        }
    });
});