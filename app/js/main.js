$(function(){
    $('.popular__inner').slick({
        
    });
    $('.product__item-star').rateYo({
        starWidth: '15px',
        rating: '4.5',
        readOnly: true,
        // starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><title>star_outline</title><path d="M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"></path></svg>',
    });

    var mixer = mixitup('.relise__inner');

    $('.followers__slider').slick({
        slidesToShow: 3,
    });

});