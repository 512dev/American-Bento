$(document).ready(function(){

   // jQuery methods go here...
$("#bars").click(function(event) {
	$('.bars-dropdown').toggle('fast');
});
  
$(".tabs-item").hover(function() {
	$(this).addClass('active');
}, function() {
	$(this).removeClass('active');
});

 
});