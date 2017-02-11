$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });

    $("[data-fancybox]").fancybox({
        // Options will go here
    });
});
