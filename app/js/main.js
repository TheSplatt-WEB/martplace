$(function(){
    $('.popular__inner').slick({
        
    });
    $('.product__item-star').rateYo({
        starWidth: '18px',
        rating: '4.5',
        ratedFill: '#ffc000',
        readOnly: true,
        normalFill: 'transparent',
        starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path></svg>',
    });

    var mixer = mixitup('.relise__inner');

    $('.followers__slider').slick({
        slidesToShow: 3,
    });

});