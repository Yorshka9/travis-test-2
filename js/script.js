// adds the "unhide" class to "hidden" elements to simulate a delayed opacity transition

$('.hidden').addClass('unhide');



    // function for setting the opacity of elements with the class "hideme" when they are scrolled into view

    $(document).ready(function() {
      
        // every time the window is scrolled ...
        $(window).click( function(){
        
            // check the location of each desired element 
            $('.hideme').each( function(i){
                
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                // if the object is completely visible in the window, fade it it
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1500);
                        
                }
                
            }); 
        
        });
        
    });


    // adds the "highlight" class to "faded" elements to simulate a delayed highlight transition

$('.faded').addClass('highlight');



// function for setting the color of elements with the class "faded" when they are scrolled into view

$(document).ready(function() {
  
    // every time the window is scrolled ...
    $(window).scroll( function(){
    
        // check the location of each desired element 
        $('.faded').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            // if the object is completely visible in the window, highlight it
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });
    
});

    // parallax 

    window.addEventListener('scroll', () => {
        let parent = document.getElementById('parallax-container');
        let children = parent.getElementsByTagName('div');
        for(let i = 0; i < children.length; i++) {
          children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
        }
     }, false)
     


// anchor tag smooth scrolling script

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
        });
      }
    }
  });