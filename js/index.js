
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
      $(".navbar").css("background" , "white");
      $(".nav-link").css("color" , "black");
      console.log('hdu');
	  }
	  else{
      $(".navbar").css("background" , "transparent" );  
      $(".nav-link").css("color" , "black");	
	  }
  })

    // $("a").on('click', function(event) {

    //     // Make sure this.hash has a value before overriding default behavior
    //     if (this.hash !== "") {
    //     // Prevent default anchor click behavior
    //     event.preventDefault();

    //     // Store hash
    //     var hash = this.hash;

    //     // Using jQuery's animate() method to add smooth page scroll
    //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //     $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //     }, 800, function(){

    //         // Add hash (#) to URL when done scrolling (default click behavior)
    //         window.location.hash = hash;
    //     });
    //     } // End if
    // });
    



    var galleryThumbs = new Swiper('.gallery-thumbs', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '2',
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows : true,
      // },
      
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 6,
          slideShadows : false,
        },
        
    });
    
    
  var galleryTop = new Swiper('.swiper-container.testimonial', {
      speed: 400,
      spaceBetween: 50,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      direction: 'vertical',
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      },
      thumbs: {
          swiper: galleryThumbs
        }
    });
    
  