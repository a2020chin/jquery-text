$(document).ready(function () {
    $('.goTop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
          },1000);
    });

    $('#nav-item-click').click(function(event){
        event.preventDefault();
        $('.nav-item').slideToggle();
    })


    $(document).ready(function () {
        const swiper = new Swiper('.swiper-container', {
        // Optional parameters
          loop: true,
          effect : 'cube',
          
          
          autoplay: {
          delay: 3000,
          },
          
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
          },
      
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      
        });
      });
  });