//show and hide script. to show/hide menu press delete on num pad
$(document).keypress(function(e){
    var key = e.which;
    if (key == 46) {
    
        $('#menu').fadeToggle();
        $('#fogging').fadeToggle();
    }
});


$(document).ready(function(){
  
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  
  });


  

  


  $(function() {
    $(".range").slider({
      min: 0,
      value: 1,
      max: 100,
      orientation: "horizontal",
      range: "min",
    });
  });