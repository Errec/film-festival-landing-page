$(document).ready(function(){
  $('.movies__carousel').slick({
    dots: false,
    centerMode: true,
    infinite: true,
    // slidesToScroll: 4,
    // speed: 500,
    // variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

