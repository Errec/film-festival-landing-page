$(document).ready(function(){
  $('.movies__carousel').slick({
    arrows: true,
    centerMode: true,
    infinite: true,
    slidesToScroll: 4,
    speed: 400,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
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

