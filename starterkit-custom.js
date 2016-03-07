// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
$(document).ready(function() {
  alert("DOM cargado");
  $("#faq dt").click(function() {
	  $(this).fadeOut("slow");
  });
  $("#orderedlist").addClass("red");
  $("#orderedlist > li").addClass("blue");
  $("#orderedlist > li:last").hover(function() {
	  $(this).addClass("green");
  },function(){
	  $(this).removeClass("green");
  });
});
