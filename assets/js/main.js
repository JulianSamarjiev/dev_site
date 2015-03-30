// Adding active class based on URL

$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $(".fixed-menu-right .list-group a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});

// Progress bar 

$(window).scroll(function() {
  var distanceToTop, documentHeight, percentScrolled, windowHeight;
  documentHeight = $(document).height();
  windowHeight = $(window).height();
  distanceToTop = $(window).scrollTop();
  percentScrolled = distanceToTop / (documentHeight - windowHeight) * 100;
  $('#progress-bar').css({
    'width': percentScrolled + '%'
  });
});