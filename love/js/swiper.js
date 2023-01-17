var swiper = new Swiper('.swiper-container-loveys1', {
    pagination: '.swiper-pagination-loveys1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-loveys2', {
    pagination: '.swiper-pagination-loveys2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-loveys3', {
    pagination: '.swiper-pagination-loveys3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-loveys3',
    prevButton: '.swiper-button-prev-loveys3'
});