$(document).ready(function () {
  
  
            $( "#accordion" ).accordion({
          collapsible: true
        
      });
  
  $( "#accordion2" ).accordion({
          collapsible: true
        
      });
  
  
  $('.mainLogo').hide().fadeIn("slow");
  
        $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });
  
  $(".events img").on('mouseenter',function(){
    $(this).fadeTo(500, 0.5);
  });
  
  $(".events img").on('mouseleave',function(){
    $(this).fadeTo(500, 1);
  });
  
 
    });



