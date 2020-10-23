import $ from 'jquery';

$(document).ready(() => {
    $('.columns').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    })
})